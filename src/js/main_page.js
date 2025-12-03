var lib = null;
var PAGE_CHANGE_MODEL=VERTICAL; // HORIZONTAL, VERTICAL

// 获取下一页
const PAGE_EVENT_GETPAGENUM = "page_event_getpagenum";
const pageData = {
    page_2: {
        resourceImgs: [
            {src:"images/schedule.png?v3", id:"schedule", mc_path:["mc_schedule/mc/mc"]}
        ]
    },
    page_3: {
        resourceImgs: [
            {src:"images/content.png?v2", id:"icon1", mc_path:["mc/content"]}
        ]
    }
}

// const fontFamily = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif';
const fontFamily = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif';

let that = {
    create_text: null
};

function onPageInited(e) {
    var page = e.page.page;
    page.data = pageData["page_"+e.pageId];

    that.create_text = createjs.Text;
    let question_text = QuestionText();
    createjs.Text = question_text.Text;

    page.bg.mouseEnabled = true;

    switch (e.pageId) {
        case 1: {
            page.tools_bar.y = lib.properties.height - (1334 - page.tools_bar.y);
            page.mc_order_list_rt.y = lib.properties.height;

            page.mc_tree.y = page.tools_bar.y - 180;

            App.page1.orderList.width = page.mc_order_list_rt.getBounds().width/canvasScale;
            App.page1.orderList.height = page.mc_order_list_rt.getBounds().height / canvasScale;
            
            let pt = page.localToGlobal(page.mc_order_list_rt.x, page.mc_order_list_rt.y);
            App.page1.orderList.left = pt.x / canvasScale;
            
            e.page.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            e.page.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            e.page.addEventListener("pressup", e => {
                e.stopPropagation();
            });
            break;
        }
    }
}

function pageUpdated(e) {
    let page = e.page.page;

    switch (e.pageId) {
        case 1: {
            break;
        }
    }
}

function loadPageResources(page) {
    if(page.loader==null) {
        page.data.resourceMap = new Map();
        page.loader = new createjs.LoadQueue(false);
        page.loader.addEventListener("fileload", function(evt) {
            evt.item.state = 2;
            for (let i = 0; i < evt.item.mc_path.length; i++) {
                var path = evt.item.mc_path[i].split("/");
                var mv = page;

                for (let i = 0; i < path.length; i++) {
                    mv = mv[path[i]];
                }

                var resourceImg = page.data.resourceMap.get(evt.item.id);

                if(!resourceImg["asset_"+i]) {
                    let img = page.loader.getResult(evt.item.id);
                    resourceImg["asset_"+i] = new createjs.Bitmap(img);
                } else {
                    resourceImg["asset_"+i].parent.removeChild(resourceImg["asset_"+i]);
                }

                mv.addChild(resourceImg["asset_"+i]);
            }
        });

        page.parent.addEventListener("removed", e=>{
            e.remove();
            for (let i = 0; i < page.data.resourceImgs.length; i++) {
                for (let j = 0; j < 100; j++) {
                    if(page.data.resourceImgs[i]["asset_"+j]) {
                        page.data.resourceImgs[i]["asset_"+j].parent.removeChild(page.data.resourceImgs[i]["asset_"+j]);
                        page.data.resourceImgs[i]["asset_"+j].image = null;
                        delete page.data.resourceImgs[i]["asset_"+j];
                    } else {
                        break;
                    }
                }

                page.data.resourceImgs[i].state = 0;
            }

            page.loader.removeAll();
            delete page.loader;
        })
    }

    var load_count = 0;

    for (let i = 0; i < page.data.resourceImgs.length; i++) {
        let resourceImg = page.data.resourceImgs[i];

        if(!page.data.resourceMap.has(resourceImg.id)) {
            page.data.resourceMap.set(resourceImg.id, resourceImg)
        }

        if(!resourceImg.state||resourceImg.state==0) {
            resourceImg.state = 1;
            page.loader.loadFile(resourceImg);
            load_count++;
        } else {
            var event = new Event("fileload");
            event.item = resourceImg;
            page.loader.dispatchEvent(event);
        }
    }

    if(load_count<=0) {
        setTimeout(()=>{
            page.loader.dispatchEvent("complete");
        }, 300);
    } else {
        page.loader.loadManifest(page.data.resourceImgs);
    }

    return page.loader;
}

const maxStarSize = 30;

function getStar(bg) {
    if(!bg.getChildByName("star_0")) {
        var starSize = randomNum(10, maxStarSize);
        for (let i = 0; i < starSize; i++) {
            var x = randomNum(0, bg.getBounds().width);
            var y = randomNum(0, bg.getBounds().height);
            var type = randomNum(0, 10);
            var star;

            if(type<2) {
                star = new lib.star_2();
            } else {
                star = new lib.star();
                var alpha = randomNum(0, 1);
                star.alpha = alpha==0?0.37:1;
            }
            star.x = x;
            star.y = y;
            star.name = "star_"+i;
            bg.addChild(star);

            star.gotoAndPlay(randomNum(0, star.totalFrames-1))
        }
    }
}

function pageOrientationChange(e) {
    // 屏幕宽度
    let iw = window.innerWidth;
    // 屏幕高度
    let ih = window.innerHeight;

    var ratio = ih/iw;

    var w = lib.properties.width;
    var h = w*ratio;
    lib.properties.height = h;

    // console.log(mainPage.currPage.page.bg.getBounds());
    // console.log(mainPage.currPage.page.getBounds());
    // console.log(innerWidth, innerHeight)
    // console.log(lib.properties.width, lib.properties.height)
    // if(mainPage.currPage.page.bg.getBounds())

    switch (e.orientation) {
        case VERTICAL:{
            console.log("竖屏")
            // Toast("竖屏")

            if(mainPage.currPage) {
                console.log(lib.properties.width, lib.properties.height)

                let containerMask = new createjs.Shape();
                containerMask.width = lib.properties.width;
                containerMask.height = lib.properties.height;
                containerMask.graphics.beginFill("#ffffff").drawRect(0, 0, lib.properties.width, lib.properties.height);
                mainPage.currPage.page.mask = containerMask;

                mainPage.currPage.page.shadow = new createjs.Shape();

                mainPage.currPage.page.shadow.width = lib.properties.width;
                mainPage.currPage.page.shadow.height = lib.properties.height;
                mainPage.currPage.page.shadow.graphics.beginFill("#ffffff").drawRect(0, 0, lib.properties.width, lib.properties.height);
                mainPage.currPage.page.shadow.shadow = new createjs.Shadow("#303030", 0, 0, 50);

                let bounds_bg = mainPage.currPage.page.bg.getBounds();
                let scale = lib.properties.height/bounds_bg.height;

                if(scale*bounds_bg.width<lib.properties.width) {
                    scale = lib.properties.width/bounds_bg.width;
                }

                mainPage.currPage.page.bg.scaleY = mainPage.currPage.page.bg.scaleX = scale;

                mainPage.currPage.page.bg.y = lib.properties.height/2;
                mainPage.currPage.page.bg.x = lib.properties.width/2;

                mainPage.currPage.scale = 1;
                mainPage.currPage.rotation = 0;
                mainPage.currPage.y = 0;
                mainPage.currPage.x = 0;
            }
            break;
        }
        case HORIZONTAL:{
            console.log("横屏")
            // Toast("横屏")

            if(mainPage.currPage) {
                console.log(mainPage.currPage.getBounds());
                console.log(lib.properties.width, lib.properties.height)

                let scale = lib.properties.height/lib.properties.width
                mainPage.currPage.scale = scale;

                // 旋转mc
                mainPage.currPage.rotation = -90;
                mainPage.currPage.y = lib.properties.height;
                mainPage.currPage.x = 0;

                // leftMargin/mainPage.currPage.page.bg.getTransformedBounds().height*lib.properties.width;

                let lib_properties_width = lib.properties.width;
                let lib_properties_height =  lib.properties.width*lib.properties.width/lib.properties.height;

                let containerMask = new createjs.Shape();
                containerMask.width = lib.properties.width;
                containerMask.height = lib.properties.height;
                containerMask.graphics.beginFill("#ffffff").drawRect(0, 0, lib_properties_width, lib_properties_height);
                mainPage.currPage.page.mask = containerMask;

                mainPage.currPage.page.shadow = new createjs.Shape();

                mainPage.currPage.page.shadow.width = lib_properties_width;
                mainPage.currPage.page.shadow.height = lib_properties_height;
                mainPage.currPage.page.shadow.graphics.beginFill("#ffffff").drawRect(0, 0, lib_properties_width, lib_properties_height);
                mainPage.currPage.page.shadow.shadow = new createjs.Shadow("#303030", 0, 0, 50);
            }
            break;
        }

    }
}

function pageDestroy(e) {
    var page = e.page.page;
    page.destoried = true;

    createjs.Text = that.create_text;

    switch (e.pageId) {
        case 4:{

            break;
        }
        case 8:
        case 7:{

            break;
        }
        case 3:
        case 15:
        case 16: {

            break;
        }
    }
    delete e.page.page;
    delete e.page;
}

function main_page(evt, comp, pageId) {
    lib = comp.getLibrary();
    this.currPage = null;
    this.currPageNum = pageId;
    this.nextPage = null;
    this.nextPageNum = null;

    pageUtil.addEventListener("pageInited", onPageInited);
    pageUtil.addEventListener("pageUpdated", pageUpdated);
    pageUtil.addEventListener("pageDestroy", pageDestroy);
    pageUtil.addEventListener("orientationChange", pageOrientationChange);

    this.onInited = ()=>{
        var page = pageUtil.getPage(this.currPageNum);
        exportRoot.main.addChild(page);
        this.currPage = page;
        page.onUpdate();
    }

    return this;
}

let nextPageId;
let prevPageNum=0;

function openPage(pageId, { prev, params }={}) {
    if(nextPageId==pageId) {
        return;
    }

    nextPageId = pageId;
    var page = pageUtil.getPage(pageId, {params: params});
    // page.onUpdate();
    page.alpha = 0;

    if(prev) {
        prevPageNum = 0;
    } else {
        prevPageNum = mainPage.currPageNum;
    }

    switch (PAGE_CHANGE_MODEL) {
        case HORIZONTAL:{
            // 水平
            page.x = lib.properties.width;
            page.y = 0;

            if(prev) {
                page.x = -lib.properties.width;
            }
            break
        }
        case VERTICAL: {
            // 垂直
            page.x = 0;
            page.y = lib.properties.height;

            if(prev) {
                page.y = -lib.properties.height;
            }
            break
        }
    }
    exportRoot.main.addChild(page);

    // mainPage.currPage.visible = false;

    createjs.Tween.get(mainPage.currPage, {override:true}).to({scaleX:0, scaleY:0, alpha:0}, 400).call(e=>{
        var page = e.target;
        exportRoot.main.removeChild(page);
        page.onDestroy();
    }).addEventListener("change", (event)=>{
        event.target.target.x = (lib.properties.width-lib.properties.width*event.target.target.scaleX)/2;
        event.target.target.y = (lib.properties.height-lib.properties.height*event.target.target.scaleY)/2;
    })

    createjs.Tween.get(page, {override:true}).to({scaleX:1, scaleY:1, alpha:1, x:0, y:0}, 400).call(e=>{
        var page = e.target;
        mainPage.currPage = page;
        mainPage.currPageNum = pageId;
        nextPageId = null;
        page.onUpdate();
    })
}
