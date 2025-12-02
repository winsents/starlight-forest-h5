const EVENT_SCROLL_CHANGE = "event_scroll_change";
const EVENT_SCROLL_END = "event_scroll_end";
const EVENT_SCROLL_START = "event_scroll_start";

function init_scroll (ct, mk) {
  let that = this;
  let content = ct;

  let mask = new createjs.Shape();

  mask.width = mk.width;
  mask.height = mk.height;
  mask.graphics.beginFill("#ffffff").drawRect(mk.x, mk.y, mask.width, mask.height);

  content.mask = mask;

  // content.regX = 0;
  // content.regY = 0;

  let bg = null;

  if(!content.getChildByName("bg")) {
    let bg = new createjs.Shape();
    bg.width = content.getTransformedBounds().width;
    bg.height = content.getTransformedBounds().height;
    bg.graphics.beginFill("#ffffff").drawRect(0, 0, bg.width, bg.height);
    bg.name = "bg";

    let bg_pt = content.parent.localToLocal(content.x, content.y, content);
    bg.x = bg_pt.x;
    bg.y = bg_pt.y;
    bg.alpha = 0.01;
    content.addChild(bg);
  } else {
    bg = content.getChildByName("bg");
  }

  let idx = content.getChildIndex(bg);

  for (let i = idx; i>0 ; i--) {
    content.swapChildrenAt(i, i-1)
  }

  let updateScrollFunY = 0;

  content.scroll = (v)=>{
    console.log("scroll:", v)
    touched = false;
    ticking = false;
    scrollDirection = null;

    let currScroll = content.y/(content.getTransformedBounds().height-mk.height);
    let scroll = currScroll+v;

    if(Math.abs(scroll)<0.4) {
        scroll = -0.4;
    }

    updateScrollFunY = scroll*(content.getTransformedBounds().height-mk.height);

    if(Math.abs(updateScrollFunY)>(content.getTransformedBounds().height-mk.height)) {
      updateScrollFunY = -(content.getTransformedBounds().height-mk.height);
    }

    if(!updateScroll) {
      updateScroll = true;
      content.addEventListener("tick", updateScrollFun);
    }

    console.log("updateScrollFunY", updateScrollFunY, (content.getTransformedBounds().height-mk.height));
  }

  function updateScrollFun () {
    content.y+=(updateScrollFunY-content.y)/10;

    if(Math.abs(updateScrollFunY-content.y)<0.1) {
      updateScroll = false;
    }

    let evt = new Event(EVENT_SCROLL_CHANGE);
    evt.scroll = content.y/(content.getTransformedBounds().height-mk.height);
    evt.scrollDirection = "VERTICAL";
    content.dispatchEvent(evt);

    if(!updateScroll) {
      content.removeEventListener("tick", updateScrollFun);
    }
  }

  let scrollDirection = null;

  let s_x = content.x;
  let s_y = 0;//content.y;
  let e_x = s_x + mk.width;
  let e_y = s_y + mk.height;

  let stageY = 0;
  let stageX = 0;
  let timeStamp = 0;
  let speedY = 0;
  let speedX = 0;
  let startX = 0;
  let startY = 0;

  let touched = false;
  let ticking = false;
  let updateScroll = false;

  let childrens = new Array();

  function listChildren(mc) {
    for (let i = 0; i < mc.children.length; i++) {
      let children = mc.children[i];
      childrens.push(children);

      if (children.children) {
        listChildren(children);
      }
    }
  }

  content.addEventListener("complate", e=>{
    e.remove();
    listChildren(content)
  });

  content.addEventListener("mousedown", handleStart);

  function handleStart (e) {
    timeStamp = e.timeStamp;
    let pt = content.localToLocal(e.stageX, e.stageY, content.parent);
    startX = stageX = pt.x;
    startY = stageY = pt.y;
    touched = true;
    scrollDirection = null;
    updateScroll = false;

    content.addEventListener("pressup", handleEnd);

    console.log("====================")
    console.log("height:", content.getTransformedBounds().height, "mask_height:", mk.height)
    console.log("width:", content.getTransformedBounds().width, "mask_width:", mk.width)

    if(content.getTransformedBounds().height>mk.height||content.getTransformedBounds().width>mk.width) {
      content.addEventListener("pressmove", handleMove);

      if(!ticking) {
        content.addEventListener("tick", onScorllTick);
        ticking = true;
      }
    }

    e.stopPropagation();
  }

  function handleEnd (e){
    content.removeEventListener("pressup", handleEnd);
    content.removeEventListener("pressmove", handleMove);
    touched = false;
    e.stopPropagation();

    let pt = content.localToLocal(e.stageX, e.stageY, content.parent);

    if(Math.abs(pt.x-startX)<=10&&Math.abs(pt.y-stageY)<=10) {

      let pt_ = content.globalToLocal(e.stageX, e.stageY);

      for (let i = 0; i < childrens.length; i++) {
        let children = childrens[i];

        if (children.getBounds()) {
          try {
            let pt_1 = children.parent.localToLocal(children.x, children.y, content);

            if(pt_.x>pt_1.x&&pt_.x<pt_1.x+children.getBounds().width) {
              if(pt_.y>pt_1.y&&pt_.y<pt_1.y+children.getBounds().height){
                var event = new Event("click");
                children.dispatchEvent(event);
                console.log("## event:", children.name);
              }
            }
          } catch (e) {

          }
        }
      }
    //
    //   console.log(childrens)
    //
    // //   // pt = content.localToGlobal(pt.x, pt.y);
    // //   // console.log(pt)
    // //   // pt.x = pt.x*stage.scaleX*canvasScale
    // //   // pt.y = pt.y*stage.scaleX*canvasScale
    // //
    // //   // for (let i = 0; i < content.children.length; i++) {
    // //   //   let children = content.children[i];
    // //   //   console.log(children)
    // //   //   // if (children.getBounds()) {
    // //   //     // console.log(children.getBounds())
    // //   //     // let pt_ = content.localToGlobal(children.x, children.y);
    // //   //
    // //   //     // if(pt.x>pt_.x&&pt.x<pt_.x+children.getBounds().width) {
    // //   //     //
    // //   //     //   if(pt.y>pt_.y&&pt.y<pt_.y+children.getBounds().height){
    // //   //     //     console.log(children,2)
    // //   //     //   }
    // //   //     // }
    // //   //   // }
    // //   // }
    }

    switch (scrollDirection) {
      case "VERTICAL":{
        break;
      }
      case "HORIZONTAL":{
        let evt = new Event(EVENT_SCROLL_END);
        content.dispatchEvent(evt);
        break;
      }
    }
  }

  function handleMove (e) {
    let t = e.timeStamp-timeStamp;
    let pt = content.localToLocal(e.stageX, e.stageY, content.parent);
    let offsetX = (pt.x-stageX)/stage.scaleX/stage.scaleX;
    let offsetY = (pt.y-stageY)/stage.scaleY/stage.scaleY;

    if(scrollDirection==null) {
        if(Math.abs(offsetX)>Math.abs(offsetY)) {
            scrollDirection = "HORIZONTAL";
        } else {
            scrollDirection = "VERTICAL";
        }
    }

    console.log("##", scrollDirection)

    // console.log(content.children)

    for (let i = 0; i < content.children.length; i++) {
        let children = content.children[i];

        if (children.name == "bg") {
            continue;
        }

        children.mouseEnabled = false;
    }

    speedY = (pt.y-stageY)/t;
    speedX = (pt.x-stageX)/t;

    let oldX = stageX;
    stageX = pt.x;
    stageY = pt.y;

    timeStamp = e.timeStamp;

    if(content.y+offsetY>s_y) {
      offsetY = s_y-content.y;
      speedY = 0;
    }

    if(content.y+content.getTransformedBounds().height+offsetY<e_y) {
      offsetY = e_y-(content.y+content.getTransformedBounds().height);
      speedY = 0;
    }

    if(content.x+offsetX>s_x) {
      offsetX = s_x-content.x;
      speedX = 0;
    }

    if(content.x+content.getTransformedBounds().width+offsetX<e_x) {
      offsetX = e_x-(content.x+content.getTransformedBounds().width);
      speedX = 0;
    }

    switch (scrollDirection) {
        case "VERTICAL":{
          content.y+=offsetY;
          let evt = new Event(EVENT_SCROLL_CHANGE);
          evt.scroll = content.y/(content.getTransformedBounds().height-mk.height);
          evt.scrollDirection = scrollDirection;
          content.dispatchEvent(evt);
          break;
        }
        case "HORIZONTAL":{
          // content.x+=offsetX;
          let evt = new Event(EVENT_SCROLL_CHANGE);
          evt.scroll = (pt.x-oldX)/stage.scaleX/stage.scaleX;
          evt.scrollDirection = scrollDirection;
          content.dispatchEvent(evt);
          break;
        }
        default:{
          break;
        }
    }

    // if(offsetY!=0) {
    //   let evt = new Event(EVENT_SCROLL_CHANGE);
    //   evt.scroll = content.y/e_y;
    //   content.dispatchEvent(evt);
    //   e.stopPropagation();
    // }

    // if(offsetX!=0) {
    //   let evt = new Event(EVENT_SCROLL_CHANGE);
    //   evt.scroll = content.x/e_x;
    //   content.dispatchEvent(evt);
    //   e.stopPropagation();
    // }
  }

  function onScorllTick(e) {
    if(Math.abs(speedY)>0) {
      speedY += -speedY/10;
      if(Math.abs(speedY)<=0.01) {
        speedY = 0;
      }
    }

    if(Math.abs(speedX)>0) {
      speedX += -speedX/10;
      if(Math.abs(speedX)<=0.01) {
        speedX = 0;
      }
    }

    // if(speedY==0&&!touched) {
    //   content.removeEventListener("tick", onScorllTick);
    //   ticking = false;
    // }

    if(speedX==0&&speedY==0&&!touched) {
      content.removeEventListener("tick", onScorllTick);
      ticking = false;

      for (let i = 0; i < content.children.length; i++) {
        let children = content.children[i];
        children.mouseEnabled = true;
      }
    }

    if(!touched) {

      let offsetY = speedY*e.delta/stage.scaleY/stage.scaleY;
      let offsetX = speedX*e.delta/stage.scaleX/stage.scaleX;

      if(content.y+offsetY>s_y) {
        offsetY = s_y-content.y;
        speedY = 0;
      }

      if(content.y+content.getTransformedBounds().height+offsetY<e_y) {
        offsetY = e_y-content.y-content.getTransformedBounds().height;
        speedY = 0;
      }

      if(content.x+offsetX>s_x) {
        offsetX = s_x-content.x;
        speedX = 0;
      }

      if(content.x+content.getTransformedBounds().width+offsetX<e_x) {
        offsetX = e_x-content.x-content.getTransformedBounds().width;
        speedX = 0;
      }

      // content.y+=offsetY;
      // content.x+=offsetX;

      switch (scrollDirection) {
        case "VERTICAL":{
          content.y+=offsetY;
          let evt = new Event(EVENT_SCROLL_CHANGE);
          evt.scroll = content.y/(content.getTransformedBounds().height-mk.height);
          evt.scrollDirection = scrollDirection;
          content.dispatchEvent(evt);
          break;
        }
        case "HORIZONTAL":{
          // content.x+=offsetX;
          // let evt = new Event(EVENT_SCROLL_CHANGE);
          // evt.scroll = offsetX;
          // content.dispatchEvent(evt);
          break;
        }
      }

      // console.log("###", content.x, content.y, offsetX, offsetY)

      // if(offsetY!=0) {
      //   let evt = new Event(EVENT_SCROLL_CHANGE);
      //   evt.scroll = content.y/e_y;
      //   content.dispatchEvent(evt);
      // }
      //
      // if(offsetX!=0) {
      //   let evt = new Event(EVENT_SCROLL_CHANGE);
      //   evt.scroll = content.x/e_x;
      //   content.dispatchEvent(evt);
      // }
    }
  }

  function reset() {
    content.removeEventListener("pressup", handleEnd);
    content.removeEventListener("pressmove", handleMove);
    content.removeEventListener("tick", onScorllTick);

    touched = false;
    content.y = 0;
    content.x = 0;
    speedY==0
    speedX==0;

    e_x = mk.width - (s_x + content.getBounds().width);
    e_y = mk.height - (s_y + content.getBounds().height);
  }

  function distory() {
    content.removeAllEventListeners(EVENT_SCROLL_CHANGE);
    content.removeEventListener("mousedown", handleStart);
    content.removeEventListener("tick", onScorllTick);

    content.mask = null;

    if(that.removeAllEventListeners) {
      that.removeAllEventListeners("click");
    }
    ticking = false;
  }

  this.reset = reset;
  this.distory = distory;
  return this;
}

createjs.EventDispatcher.initialize(init_scroll.prototype);
