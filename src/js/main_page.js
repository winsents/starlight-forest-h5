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

            App.page1.orderList.width = page.mc_order_list_rt.getBounds().width / canvasScale;
            App.page1.orderList.height = page.mc_order_list_rt.getBounds().height / canvasScale;
            
            let pt = page.localToGlobal(page.mc_order_list_rt.x, page.mc_order_list_rt.y);
            App.page1.orderList.left = pt.x / canvasScale;
            App.page1.orderList.top = (pt.y - page.mc_order_list_rt.getBounds().height) / canvasScale;
            
            App.page1.orderList.closeY = App.page1.orderList.top;

            page.tools_bar.y = (pt.y - page.mc_order_list_rt.getBounds().height - 50);
            page.mc_tree.y = page.tools_bar.y - 180;

            page.kettle.visible = false;
            page.kettle.state = "off";
            page.tools_bar.kettle.visible = false;

            page.mc_tree.tree.stop();
            page.mc_tree.tree.mc.stop();

            // page.mc_tree.progress_bar.visible = false;
            // page.mc_tree.mc_progress_val.visible = false;

            page.tools_bar.stop();

            // page.mc_tree.mc_s1.gotoAndPlay(1);
            // page.mc_tree.mc_s2.gotoAndPlay(1);

            let rectKettle = page.kettle.getTransformedBounds();
            page.rect_test.scaleY = rectKettle.height * 1.5 / page.rect_test.getBounds().height;
            page.rect_test.scaleX = rectKettle.width * 1.5 / page.rect_test.getBounds().width;

            let setKettleState = function (state) {
                if(page.kettle.state == state) {
                    return;
                }

                page.kettle.state = state;

                switch(state) {
                    case "on": {
                        page.kettle.gotoAndPlay("on");
                        page.mc_tree.tree.mc.play();
                        break;
                    }
                    case "off": {
                        page.kettle.gotoAndPlay("off");
                        page.mc_tree.tree.mc.stop();
                        break;
                    }
                }
            }

            let setProgerss = function (value, digital, animation = true) {
                if(value<0) value = 0;
                if(value>1) value = 1;

                if (animation) {
                    createjs.Tween.get(page.mc_tree.progress_bar.progress, { override: true }).to({ scaleX: value }, 500).addEventListener("change", (event) => { });
                } else { 
                    page.mc_tree.progress_bar.progress.scaleX = value;
                }

                if (digital != undefined) { 

                    digital = String(digital);

                    let _cx = page.mc_tree.mc_progress_val.mc_prefix.x + page.mc_tree.mc_progress_val.mc_prefix.getBounds().width + 3;

                    for (let i = 0; i < digital.length; i++) {
                        console.log(digital.charAt(i));

                        let numMc = null;
                        
                        numMc = page.mc_tree.mc_progress_val.getChildByName("num_" + i);

                        if (numMc) {
                            numMc.gotoAndStop(Number(digital.charAt(i)));
                            continue;
                        } else { 
                            numMc = new lib.digital();
                            numMc.name = "num_" + i;
                            numMc.x = _cx;
                            numMc.y = 1;
                            _cx += numMc.getBounds().width;

                            numMc.gotoAndStop(Number(digital.charAt(i)));
                        }
                        
                        page.mc_tree.mc_progress_val.addChild(numMc);
                    }

                    let _i = digital.length - 1;
                    let numMc = page.mc_tree.mc_progress_val.getChildByName("num_" + _i);

                    page.mc_tree.mc_progress_val.mc_suffix.x = numMc.x+numMc.getBounds().width + 5;
                    page.mc_tree.mc_progress_val.x = page.mc_tree.progress_bar.x + (page.mc_tree.progress_bar.getTransformedBounds().width - page.mc_tree.mc_progress_val.getTransformedBounds().width) / 2;

                    _i = digital.length

                    while (true) { 
                        numMc = page.mc_tree.mc_progress_val.getChildByName("num_" + _i);
                        if (numMc) {
                            page.mc_tree.mc_progress_val.removeChild(numMc);
                            _i++;
                        } else {
                            break;
                        }
                    }
                }
            }

            page.setProgerss = setProgerss;

            let onPressmove = function (evt) { 
                let pt = page.globalToLocal(evt.stageX, evt.stageY);
                
                createjs.Tween.get(page.kettle, { override: true }).to({ x: (pt.x-30), y: (pt.y-50), scaleX: 1.5, scaleY: 1.5 }, 200).addEventListener("change", (event) => { });
                
                let rectTree = page.mc_tree.rect_tree.getTransformedBounds();
                pt =  page.mc_tree.localToLocal(rectTree.x, rectTree.y, page);
                rectTree.x = pt.x;
                rectTree.y = pt.y;

                page.rect_test.x = page.kettle.x - rectKettle.width/2;
                page.rect_test.y = page.kettle.y - rectKettle.height/2;
                
                rectKettle = page.rect_test.getTransformedBounds();
                
                if (rectKettle.x > rectTree.x && rectKettle.x < rectTree.x + rectTree.width &&
                    rectKettle.y > rectTree.y && rectKettle.y + rectKettle.height/2 < rectTree.y + rectTree.height) {
                    // console.log("在范围内");
                    setKettleState("on");
                } else {
                    // console.log("不在范围内");
                    setKettleState("off");
                }

                evt.stopPropagation();
            }

            let addNutrients = function (num) {
                // 添加养料
                let max_x = lib.properties.width-100/2;
                let min_x = 100;

                let max_y = -300;
                let min_y = -400;

                for (let i = 0; i < num; i++) { 
                    let nutrients = new lib.nutrients_mc();

                    let x = randomNum(min_x + nutrients.getBounds().width / 2, max_x - nutrients.getBounds().width / 2);
                    let y = randomNum(min_y + nutrients.getBounds().height / 2, max_y - nutrients.getBounds().height / 2);

                    nutrients.y = 0;
                    nutrients.x = x;
                    nutrients.alpha = 0;
                    
                    page.mc_tree.addChild(nutrients);
                    nutrients.addEventListener("click", e => {
                        let ptMc = page.mc_tree.mc_pt;
                        createjs.Tween.get(nutrients, { override: true }).to({ x: ptMc.x, y: ptMc.y, alpha: 0 }, 300);
                        e.remove();

                        App.mainView.nutrientsNum = Math.max(0, App.mainView.nutrientsNum - 1);
                        App.mainView.useNutrientsNum++
                    })

                    createjs.Tween.get(nutrients, { override: true }).to({ y: y, alpha: 1 }, 500);
                }
            }

            page.addNutrients = addNutrients;

            setProgerss(0, 0);

            // page.mc_tree.mc_s1.mc.addEventListener("click", e => { 
            //     page.mc_tree.mc_s1.gotoAndPlay("used");
            //     App.mainView.nutrientsNum = Math.max(0, App.mainView.nutrientsNum - 1);
            //     App.mainView.useNutrientsNum++
            //     // setProgerss(0.5, 1);
            //     e.remove();
            // });

            // page.mc_tree.mc_s2.mc.addEventListener("click", e => { 
            //     page.mc_tree.mc_s2.gotoAndPlay("used");
            //     App.mainView.nutrientsNum = Math.max(0, App.mainView.nutrientsNum - 1);
            //     App.mainView.useNutrientsNum++
            //     e.remove();
            //     // setProgerss(1, 0);
            //     // page.mc_tree.tree.gotoAndPlay(1);
            // });

            page.tools_bar.kettle.addEventListener("mousedown", e => {
                page.tools_bar.kettle.kettle.mc.alpha = 0;

                console.log("mousedown kettle", page.tools_bar.kettle.kettle);

                let pt = page.tools_bar.kettle.kettle.localToLocal(page.tools_bar.kettle.kettle.mc.x, page.tools_bar.kettle.kettle.mc.y, page);
                page.kettle.x = pt.x;
                page.kettle.y = pt.y;
                page.kettle.gotoAndStop(0);
                page.kettle.visible = true;

                page.addEventListener("pressmove", onPressmove);
                e.stopPropagation();
            });
            
            e.page.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            e.page.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            e.page.addEventListener("pressup", e => {
                page.tools_bar.kettle.kettle.mc.alpha = 1;
                page.kettle.visible = false;

                page.kettle.scaleX = 1;
                page.kettle.scaleY = 1;

                page.mc_tree.tree.mc.stop();

                page.removeEventListener("pressmove", onPressmove);
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
