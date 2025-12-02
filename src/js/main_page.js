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
            let pageInfo = {
                screen1: {
                    name: "screen1",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 49,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen2: {
                    name: "screen2",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 40,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen3: {
                    name: "screen3",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 60,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen4: {
                    name: "screen4",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 38,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen5: {
                    name: "screen5",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 33,
                    mc6_text_1_frame: 0,
                    mc6_text_2_frame: 0,
                    screen_6_mc_1_frame: 0,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen6: {
                    name: "screen6",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 35,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                screen7: {
                    name: "screen7",
                    complated: false,
                    screenFrame: null,
                    totalFrame: 23,
                    drag: {
                        y: 0,
                        startY: 0,
                        draging: false,
                        startFrame: 0,
                        currentFrame: 0
                    }
                },
                currScreen: null
            }

            page.btn_skip.addEventListener("click", e=>{
                // if(_start&&music_state) {
                //     createjs.Sound.play("sound3");
                //     // _start = false;
                // }
                switch (pageInfo.currScreen.name) {
                    case "screen1": {
                        page.play();
                        break;
                    }
                    case "screen2": {
                        page.play();
                        break;
                    }
                    case "screen3": {
                        page.play();
                        break;
                    }
                    case "screen4": {
                        page.play();
                        break;
                    }
                    case "screen5": {
                        page.play();
                        break;
                    }
                    case "screen6": {
                        page.play();
                        createjs.Tween.get(page.screen_6_mc_21, {override:true}).to({y:pageInfo.screen6.screen_6_mcY, alpha: 0}, 400)
                        break;
                    }
                }
                e.stopPropagation();
            });

            page.btn_skip.addEventListener("mousedown", e=>{
                e.stopPropagation();
            });
            page.btn_skip.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.btn_skip.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            let screen1Complated = false;

            page.bottom_pt_btn.addEventListener("added", ()=>{
                page.bottom_pt_btn.y = lib.properties.height-60;
                screen1Complated = true;
            });

            page.mc_text.addEventListener("added", ()=>{
                page.mc_text.y = lib.properties.height - 200;
            });

            page.mc_mcode.addEventListener("added", ()=>{
                page.mc_mcode.y = lib.properties.height - 50;
            })

            page.bottom_btn.addEventListener("added", ()=>{
                page.bottom_btn.y = lib.properties.height - 50;
            })

            page.screen_2_mc.addEventListener("added", ()=>{
                page.screen_2_mc.mc.gotoAndStop(0);
            })

            page.mc4_text_2.addEventListener("added", e=>{
                e.remove();
                // page.mc4_text_2.gotoAndStop(0);
            })

            page.mc4_text_1.addEventListener("added", e=>{
                e.remove();
                // page.mc4_text_1.gotoAndStop(0);
                page.mc4_text_1.y = lib.properties.height - 200;
            })

            page.screen_5_mc.addEventListener("added", e=>{
                e.remove();
                page.screen_5_mc.gotoAndStop(0);
                // page.screen_5_mc.y = lib.properties.height - 200;
            })

            page.mc5_text.addEventListener("added", e=>{
                e.remove();
                page.mc5_text.gotoAndStop(0);
                // page.mc4_text_1.y = lib.properties.height - 200;
            })

            page.mc6_text_1.addEventListener("added", e=>{
                // e.remove();
                pageInfo.screen5.mc6_text_1_frame = page.currentFrame;

                // if(!pageInfo.currScreen.drag.draging) {
                //     page.mc6_text_1.play();
                // }
            })

            page.mc6_text_2.addEventListener("added", e=>{
                e.remove();
                pageInfo.screen5.mc6_text_2_frame = page.currentFrame;
            })

            page.screen_6_mc_1.addEventListener("added", e=>{
                e.remove();
                pageInfo.screen5.screen_6_mc_1_frame = page.currentFrame;
            })

            page.screen_6_mc_21.addEventListener("added", e=>{
                e.remove();
                pageInfo.screen6.screen_6_mcY = page.screen_6_mc_21.y;
            })

            page.screen_6_mc_21.addEventListener("playLoop", e=>{
                if(pageInfo.currScreen.drag.draging) {
                    page.screen_6_mc_21.gotoAndPlay("loop");
                }
            })

            page.mc_ribbon_2.addEventListener("added", e=>{
                e.remove();
                page.mc_ribbon_2.gotoAndStop(0);
                page.mc_ribbon_2.visible = false;
            })

            page.screen_3_mc.addEventListener("added", ()=>{
                //page.screen_3_mc.gotoAndStop(0);
                page.screen_3_mc.y=lib.properties.height;
            });

            page.screen_4_mc.addEventListener("added", ()=>{
                page.screen_4_mc.gotoAndStop(1);
            });

            page.mc_menu.btn_1.addEventListener("click", e=>{
                openPage(2);
            })
            page.mc_menu.btn_2.addEventListener("click", e=>{
                openPage(3);
            })
            page.mc_menu.btn_3.addEventListener("click", e=>{
                openPage(4);
            })

            page.mc_menu.btn_1.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_1.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_1.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            page.mc_menu.btn_2.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_2.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_2.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            page.mc_menu.btn_3.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_3.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.mc_menu.btn_3.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            page.addEventListener("page_1_complate", ()=>{
                pageInfo.screen1.complated = true;
                pageInfo.screen1.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen1;
            })

            page.addEventListener("screen_2_complate", ()=>{
                pageInfo.screen2.complated = true;
                pageInfo.screen2.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen2;
                page.screen_2_mc.mc.play();
                page.bottom_btn.gotoAndPlay(1);
            })

            page.addEventListener("screen_3_complate", ()=>{
                pageInfo.screen3.complated = true;
                pageInfo.screen3.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen3;
                // page.screen_2_mc.mc.play();
                page.bottom_btn.gotoAndPlay(1);
            })

            page.addEventListener("screen_4_complate", ()=>{
                pageInfo.screen4.complated = true;
                pageInfo.screen4.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen4;
                page.screen_4_mc.play();
                page.bottom_btn.gotoAndPlay(1);
            })

            page.addEventListener("screen_5_complate", ()=>{
                pageInfo.screen5.complated = true;
                pageInfo.screen5.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen5;
                page.screen_5_mc.play();
                page.bottom_btn.gotoAndPlay(1);

                console.log("### screen_5_complate");
            })

            page.addEventListener("screen_6_complate", ()=>{
                pageInfo.screen6.complated = true;
                pageInfo.screen6.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen6;
                // page.screen_5_mc.play();
                page.bottom_btn.gotoAndPlay(1);

                console.log("### screen_6_complate");
            })

            page.addEventListener("screen_7_complate", e=>{
                e.remove();
                pageInfo.screen7.complated = true;
                pageInfo.screen7.screenFrame = page.currentFrame;
                pageInfo.currScreen = pageInfo.screen7;
                // page.screen_5_mc.play();
                //page.bottom_btn.gotoAndPlay(1);

                console.log("### screen_7_complate");
                page.gotoAndPlay("finished");
                page.removeEventListener("mousedown", handleStart);
                page.removeEventListener("pressup", handleEnd);
                page.removeEventListener("pressmove", handleMove);

                var audioEle = document.getElementById("Jaudio");
                audioEle.pause();

                audioEle.src="./images/bg.mp3";
                audioEle.play();
            })

            page.addEventListener("dargScrollTouchStart", e=>{
                if(!pageInfo.currScreen||!pageInfo.currScreen.complated) return;
                pageInfo.currScreen.drag.y = e.stageY;
                pageInfo.currScreen.drag.draging = true;
                pageInfo.currScreen.drag.startY = e.stageY;
                pageInfo.currScreen.drag.startFrame = page.currentFrame;
            });

            function updatePageView() {
                switch (pageInfo.currScreen.name) {
                    case "screen1": {
                        break;
                    }
                    case "screen2": {
                        page.mc_text.gotoAndStop(page.currentFrame-pageInfo.currScreen.screenFrame);

                        let totalFrame = pageInfo.currScreen.screenFrame+pageInfo.currScreen.totalFrame;

                        if(page.currentFrame>=(totalFrame-page.screen_3_mc.totalFrames/2+2)) {
                            page.screen_3_mc.gotoAndStop(page.currentFrame-(totalFrame-page.screen_3_mc.totalFrames/2+2));
                        }
                        break;
                    }
                    case "screen3": {
                        let frame = page.currentFrame - pageInfo.currScreen.screenFrame;

                        frame = (page.screen_3_mc.totalFrames/2-1)+frame;
                        if(frame>page.screen_3_mc.totalFrames-1) {
                            frame = page.screen_3_mc.totalFrames-1;
                        }

                        page.screen_3_mc.gotoAndStop(frame);

                        let totalFrame = pageInfo.currScreen.screenFrame+pageInfo.currScreen.totalFrame;

                        if(page.currentFrame>=(totalFrame-page.mc4_text_2.totalFrames-2)) {
                            page.mc4_text_2.gotoAndStop(page.currentFrame-(totalFrame-page.mc4_text_2.totalFrames-2))
                        }

                        if(page.currentFrame>=(totalFrame - page.mc4_text_1.totalFrames/2)) {
                            page.mc4_text_1.gotoAndStop(page.currentFrame-(totalFrame - page.mc4_text_1.totalFrames/2))
                        }

                        break;
                    }
                    case "screen4": {
                        let frame = page.currentFrame - pageInfo.currScreen.screenFrame;
                        frame = page.mc4_text_1.totalFrames/2+frame;

                        if(frame>page.mc4_text_1.totalFrames-1) {
                            frame = page.mc4_text_1.totalFrames-1;
                        }

                        page.mc4_text_1.gotoAndStop(frame);

                        let totalFrame = pageInfo.currScreen.screenFrame+pageInfo.currScreen.totalFrame;

                        if(page.currentFrame>=(totalFrame-15)) {
                            page.mc5_text.gotoAndStop(page.currentFrame-(totalFrame-15))
                        }

                        page.screen_5_mc.stop();
                        break;
                    }
                    case "screen5": {
                        page.screen_5_mc.stop();

                        let frame = page.currentFrame - pageInfo.currScreen.screenFrame;
                        frame = page.mc4_text_1.totalFrames/2+frame;

                        if(frame>page.mc4_text_1.totalFrames-1) {
                            frame = page.mc4_text_1.totalFrames-1;
                        }

                        // if(page.currentFrame>=pageInfo.screen5.mc6_text_1_frame) {
                        //     page.mc6_text_1.gotoAndStop(page.currentFrame-pageInfo.screen5.mc6_text_1_frame)
                        // }
                        //
                        // if(page.currentFrame>=pageInfo.screen5.mc6_text_2_frame) {
                        //     page.mc6_text_2.gotoAndStop(page.currentFrame-pageInfo.screen5.mc6_text_2_frame)
                        // }
                        //
                        // if(page.currentFrame>=pageInfo.screen5.screen_6_mc_1_frame) {
                        //     page.screen_6_mc_1.gotoAndStop(page.currentFrame-pageInfo.screen5.screen_6_mc_1_frame)
                        // }

                        //mc6_text_1
                        // page.mc4_text_1.gotoAndStop(frame);
                        break;
                    }
                }
            };

            // 拖动翻页完毕，定格场景画面
            function complatePageView() {
                switch (pageInfo.currScreen.name) {
                    case "screen1": {
                        break;
                    }
                    case "screen2": {
                        page.mc_ribbon_1.addEventListener("tick", e=>{
                            if(page.mc_ribbon_1.mc.currentFrame>=page.mc_ribbon_1.mc.totalFrames-1) {
                                e.remove();
                                if(pageInfo.currScreen.name=="screen3") {
                                    page.mc_ribbon_1.mc.visible = false;
                                    page.mc_ribbon_2.visible = true;
                                    page.mc_ribbon_2.gotoAndPlay(0);
                                }
                            }
                        });

                        page.screen_3_mc.play();
                        break;
                    }
                    case "screen3": {
                        if(page.screen_3_mc.currentFrame<page.screen_3_mc.totalFrames-1) {
                            page.screen_3_mc.play();
                        }

                        if(page.mc4_text_1.currentFrame<page.mc4_text_1.totalFrames-1) {
                            page.mc4_text_1.play();
                        }

                        if(page.mc4_text_2.currentFrame<page.mc4_text_2.totalFrames-1) {
                            page.mc4_text_2.play();
                        }
                        break;
                    }
                    case "screen4": {
                        if(page.mc5_text.currentFrame<page.mc5_text.totalFrames-1) {
                            page.mc5_text.play();
                        }

                        if(page.mc4_text_2.currentFrame<page.mc4_text_2.totalFrames-1) {
                            page.mc4_text_2.play();
                        }

                        page.screen_5_mc.play();
                        break;
                    }
                    case "screen5": {
                        console.log("### screen5");
                        // if(page.mc6_text_1.currentFrame<page.mc6_text_1.totalFrames-1) {
                        //     page.mc6_text_1.play();
                        // }
                        //
                        // if(page.mc6_text_2.currentFrame<page.mc6_text_2.totalFrames-1) {
                        //     page.mc6_text_2.play();
                        // }
                        //
                        // if(page.screen_6_mc_1.currentFrame<page.screen_6_mc_1.totalFrames-1) {
                        //     page.screen_6_mc_1.play();
                        // }

                        break;
                    }
                }
            }

            // 到退回到指定帧
            function pageGobackFrame(e) {
                if(!pageInfo.currScreen.backing) {
                    page.removeEventListener("tick", pageGobackFrame);
                    return;
                }

                let frame = page.currentFrame;
                frame--;

                if(frame<pageInfo.currScreen.screenFrame) {
                    page.removeEventListener("tick", e);
                    frame = pageInfo.currScreen.screenFrame;
                    pageInfo.currScreen.backing = false;
                    complatePageView();
                }

                page.gotoAndStop(frame);
                updatePageView();
            }

            page.addEventListener("dargScrollTouchStart", e=>{
                console.log("dargScrollTouchStart");
                if(!pageInfo.currScreen) return;
                pageInfo.currScreen.backing = false;
                pageInfo.currScreen.drag.timeStamp = null;
            });

            page.addEventListener("dargScroll", e=>{
                if(!pageInfo.currScreen||!pageInfo.currScreen.complated||!pageInfo.currScreen.drag.draging) return;

                pageInfo.currScreen.drag.speedY = e.speedY;

                let currFrame = page.currentFrame;

                switch(pageInfo.currScreen.name) {
                    case "screen6": {
                        let timeStamp = new Date();

                        if(pageInfo.currScreen.drag.timeStamp==null) {
                            pageInfo.currScreen.drag.timeStamp = timeStamp;
                        }

                        let deltaTime = timeStamp-pageInfo.currScreen.drag.timeStamp.getTime();
                        pageInfo.currScreen.drag.timeStamp = timeStamp;

                        let offsetY = Math.abs(drag.speedY)*deltaTime/stage.scaleY;
                        let frame = offsetY/lib.properties.height*pageInfo.currScreen.totalFrame;
                        currFrame = page.currentFrame+frame;

                        if(currFrame>=304) {
                            createjs.Tween.get(page.screen_6_mc_21, {override:true}).to({y:pageInfo.screen6.screen_6_mcY, alpha: 0}, 400)
                            page.dispatchEvent("screen_7_complate");
                            return;
                        } else {
                            let pt_mc = page.getChildByName("pt_mc");
                            page.screen_6_mc_21.y+=(pt_mc.y-page.screen_6_mc_21.y)/10;
                       }
                        break;
                    }
                    case "screen7": {

                        break;
                    }
                    default: {
                        if((e.stageY-pageInfo.currScreen.drag.startY)<0) {
                            // 向上拖动
                            let progress = Math.abs(e.stageY-pageInfo.currScreen.drag.startY)/pageInfo.currScreen.drag.startY;
                            let frame = (pageInfo.currScreen.totalFrame)*progress;

                            if(pageInfo.currScreen.drag.startFrame+frame>(pageInfo.currScreen.screenFrame+pageInfo.currScreen.totalFrame)) {
                                frame = (pageInfo.currScreen.screenFrame+pageInfo.currScreen.totalFrame)-pageInfo.currScreen.drag.startFrame;
                            }

                            currFrame = pageInfo.currScreen.drag.startFrame+frame;
                        } else {
                            // 向下拖动
                            let progress = Math.abs(e.stageY-pageInfo.currScreen.drag.startY)/(lib.properties.height-pageInfo.currScreen.drag.startY);
                            let frame = (pageInfo.currScreen.drag.startFrame-pageInfo.currScreen.screenFrame)*progress;

                            currFrame = pageInfo.currScreen.drag.startFrame-frame;
                        }
                    }
                }

                page.gotoAndStop(currFrame);
                pageInfo.currScreen.drag.currentFrame = page.currentFrame;

                updatePageView();
            });
            page.addEventListener("dargScrollComplete", e=>{
                if(!pageInfo.currScreen||!pageInfo.currScreen.complated) return;
                console.log("dargScrollComplete");
            });
            page.addEventListener("dargScrollTouchEnd", e=>{
                if(!pageInfo.currScreen||!pageInfo.currScreen.complated) return;
                pageInfo.currScreen.drag.draging = false;
                console.log("dargScrollTouchEnd", e.speedY);

                switch (pageInfo.currScreen.name) {
                    case "screen6": {
                        createjs.Tween.get(page.screen_6_mc_21, {override:true}).to({y:pageInfo.screen6.screen_6_mcY, alpha: 0}, 400)
                        page.play();

                        page.addEventListener("tick", e=>{
                            if(page.currentFrame>=304) {
                                e.remove();
                                page.dispatchEvent("screen_7_complate");
                            }
                        })
                        // page.screen_6_mc_21.addEventListener("tick", e=>{
                        //     if(pageInfo.currScreen.drag.draging||pageInfo.currScreen.name!="screen6") {
                        //         e.remove();
                        //         return;
                        //     }
                        //     page.screen_6_mc_21.y+=(pageInfo.screen6.screen_6_mcY-page.screen_6_mc_21.y)/10;
                        // });
                        break;
                    }
                    case "screen7": {
                        // page.gotoAndPlay("finished");
                        break;
                    }
                    default: {
                        let nextPage = false;

                        if(e.speedY<=0) {
                            if(Math.abs(e.speedY)>0.7) {
                                nextPage = true;
                            }

                            if((page.currentFrame-pageInfo.currScreen.screenFrame)>=pageInfo.currScreen.totalFrame/3) {
                                nextPage = true;
                            }
                        }

                        if(!nextPage) {
                            pageInfo.currScreen.backing = true;
                            page.addEventListener("tick", pageGobackFrame);
                        } else {
                            page.gotoAndPlay(page.currentFrame+1);
                            page.bottom_btn.gotoAndPlay("off");
                            complatePageView();
                        }
                        break;
                    }
                }
            });

            // ######################## PAGE DRAGING ############################
            let drag = {
                touched: false,
                timeStamp: 0,
                speedX: 0,
                speedY: 0,
                startX: 0,
                startY: 0,
                stageX: 0,
                stageY: 0,
                tick: {
                    playing: false
                }
            }

            // let _start = false;

            function clearDrag() {
                drag.timeStamp = 0;
                drag.touched = false;
                drag.speedX = 0;
                drag.speedY = 0;
                drag.startX = 0;
                drag.startY = 0;
                drag.stageX = 0;
                drag.stageY = 0;
                drag.tick.playing = false;
            }

            function handleStart (e) {
                clearDrag();
                page.addEventListener("pressup", handleEnd);
                page.addEventListener("pressmove", handleMove);

                drag.timeStamp = e.timeStamp;
                drag.startX = drag.stageX = e.stageX/stage.scaleX;
                drag.startY = drag.stageY = e.stageY/stage.scaleY;

                if(drag.startX>page.btn_skip.x&&drag.startX<(page.btn_skip.x+page.btn_skip.getBounds().width)&&drag.startY>page.btn_skip.y&&drag.startY<(page.btn_skip.y+page.btn_skip.getBounds().height)) {
                    return;
                }

                drag.touched = true;

                let pt_mc = page.getChildByName("pt_mc");

                if(!pt_mc) {
                    pt_mc = new lib.pt();
                    pt_mc.name = "pt_mc";
                    pt_mc.mouseEnabled = false;
                    pt_mc.alpha = 0;
                    page.addChild(pt_mc);
                }

                pt_mc.x = drag.startX;
                pt_mc.y = drag.startY;

                if(!drag.tick.playing) {
                    drag.tick.playing = true;
                    page.addEventListener("tick", onScorllTick);
                }

                let event = new createjs.Event("dargScrollTouchStart");
                event.stageX = drag.stageX;
                event.stageY = drag.stageY;

                event.speedX = drag.speedX;
                event.speedY = drag.speedY;

                page.dispatchEvent(event);

                // if(_start&&music_state) {
                //     createjs.Sound.play("sound1");
                //     // Toast("touch start");
                //     // _start = false;
                // }

                e.stopPropagation();
            }

            function handleEnd (e){
                console.log("### handleEnd");
                page.removeEventListener("pressup", handleEnd);
                page.removeEventListener("pressmove", handleMove);
                drag.touched = false;

                let event = new createjs.Event("dargScrollTouchEnd");
                event.stageX = drag.stageX;
                event.stageY = drag.stageY;

                event.speedX = drag.speedX;
                event.speedY = drag.speedY;

                // _start = false;

                page.dispatchEvent(event);
            }

            function handleMove (e) {
                let t = e.timeStamp-drag.timeStamp;

                drag.timeStamp = e.timeStamp;

                let pt = { x: e.stageX/stage.scaleX, y: e.stageY/stage.scaleY };

                let offsetX = pt.x - drag.stageX;
                let offsetY = pt.y - drag.stageY;

                drag.stageX = pt.x;
                drag.stageY = pt.y;

                drag.speedX = offsetX/t;
                drag.speedY = offsetY/t;

                let pt_mc = page.getChildByName("pt_mc");

                pt_mc.x += offsetX;
                pt_mc.y += offsetY;
                console.log("### handleMove");
            }

            function onScorllTick(e) {
                if(!drag.touched) {
                    if(Math.abs(drag.speedY)>0) {
                        drag.speedY += -drag.speedY/10;
                        if(Math.abs(drag.speedY)<=0.01) {
                            drag.speedY = 0;
                        }
                    }

                    if(Math.abs(drag.speedX)>0) {
                        drag.speedX += -drag.speedX/10;
                        if(Math.abs(drag.speedX)<=0.01) {
                            drag.speedX = 0;
                        }
                    }

                    let offsetY = drag.speedY*e.delta/stage.scaleY;
                    let offsetX = drag.speedX*e.delta/stage.scaleX;

                    let pt_mc = page.getChildByName("pt_mc");
                    pt_mc.x += offsetX;
                    pt_mc.y += offsetY;

                    drag.stageX += offsetX;
                    drag.stageY += offsetY;

                    if(drag.speedX==0&&drag.speedY==0) {
                        drag.tick.playing = false;
                    }
                }

                let event = new createjs.Event("dargScroll");
                event.stageX = drag.stageX;
                event.stageY = drag.stageY;

                event.speedX = drag.speedX;
                event.speedY = drag.speedY;

                page.dispatchEvent(event);

                if(!drag.tick.playing) {
                    page.removeEventListener("tick", onScorllTick);
                    page.removeChild(page.getChildByName("pt_mc"));

                    let event = new createjs.Event("dargScrollComplete");

                    event.stageX = drag.stageX;
                    event.stageY = drag.stageY;

                    event.speedX = drag.speedX;
                    event.speedY = drag.speedY;

                    page.dispatchEvent(event);
                }
            }

            page.addEventListener("mousedown", handleStart);

            e.page.addEventListener("mousedown", e => {
                if(screen1Complated) return;
                e.stopPropagation();
            });
            e.page.addEventListener("pressmove", e => {
                if(screen1Complated) return;
                e.stopPropagation();
            });
            e.page.addEventListener("pressup", e => {
                if(screen1Complated) return;
                e.stopPropagation();
            });
            break;
        }
        case 2: {
            page.mc1.y = lib.properties.height-60;
            page.mc2.y = lib.properties.height;
            page.bottom_pt_btn.y = lib.properties.height-60;
            // e.page.addEventListener("mousedown", e => {
            //     e.stopPropagation();
            // });
            //
            // e.page.addEventListener("pressmove", e => {
            //     e.stopPropagation();
            // });
            //
            // e.page.addEventListener("pressup", e => {
            //     e.stopPropagation();
            // });

            break;
        }
        case 3:{

            page.bottom_pt_btn.y = lib.properties.height-60;

            let drag = {
                touched: false,
                timeStamp: 0,
                speedX: 0,
                speedY: 0,
                startX: 0,
                startY: 0,
                stageX: 0,
                stageY: 0,
                nextPage: false,
                tick: {
                    playing: false
                }
            }

            // let _start = false;

            function clearDrag() {
                drag.timeStamp = 0;
                drag.touched = false;
                drag.speedX = 0;
                drag.speedY = 0;
                drag.startX = 0;
                drag.startY = 0;
                drag.stageX = 0;
                drag.stageY = 0;
                drag.nextPage = false;
                drag.tick.playing = false;
            }

            function handleStart (e) {
                clearDrag();
                page.addEventListener("pressup", handleEnd);
                page.addEventListener("pressmove", handleMove);

                drag.timeStamp = e.timeStamp;
                drag.startX = drag.stageX = e.stageX/stage.scaleX;
                drag.startY = drag.stageY = e.stageY/stage.scaleY;

                drag.touched = true;

                let pt_mc = page.getChildByName("pt_mc");

                if(!pt_mc) {
                    pt_mc = new lib.pt();
                    pt_mc.name = "pt_mc";
                    pt_mc.mouseEnabled = false;
                    pt_mc.alpha = 0;
                    page.addChild(pt_mc);
                }

                pt_mc.x = drag.startX;
                pt_mc.y = drag.startY;

                if(!drag.tick.playing) {
                    drag.tick.playing = true;
                    page.addEventListener("tick", onScorllTick);
                }

                let event = new createjs.Event("dargScrollTouchStart");
                event.stageX = drag.stageX;
                event.stageY = drag.stageY;

                event.speedX = drag.speedX;
                event.speedY = drag.speedY;

                page.dispatchEvent(event);

                e.stopPropagation();
            }

            function handleEnd (e){
                console.log("### handleEnd");
                page.removeEventListener("pressup", handleEnd);
                page.removeEventListener("pressmove", handleMove);
                drag.touched = false;
                drag.nextPage = false;



                // let event = new createjs.Event("dargScrollTouchEnd");
                // event.stageX = drag.stageX;
                // event.stageY = drag.stageY;
                //
                // event.speedX = drag.speedX;
                // event.speedY = drag.speedY;
                //
                // page.dispatchEvent(event);
            }

            function handleMove (e) {
                let t = e.timeStamp-drag.timeStamp;

                drag.timeStamp = e.timeStamp;

                let pt = { x: e.stageX/stage.scaleX, y: e.stageY/stage.scaleY };

                let offsetX = pt.x - drag.stageX;
                let offsetY = pt.y - drag.stageY;

                drag.stageX = pt.x;
                drag.stageY = pt.y;

                drag.speedX = offsetX/t;
                drag.speedY = offsetY/t;

                if(page.mc.y+offsetY>0) {
                    offsetY = -page.mc.y;

                    if(!drag.nextPage) {
                        drag.nextPage = true;

                        let event = new createjs.Event("mousedown");
                        event.stageX = e.stageX;
                        event.stageY = e.stageY;

                        exportRoot.main.dispatchEvent(event);
                    }
                }

                if(page.mc.y+offsetY<-(page.mc.getBounds().height-lib.properties.height)) {
                    offsetY = -(page.mc.getBounds().height-lib.properties.height)-page.mc.y;

                    if(!drag.nextPage) {
                        drag.nextPage = true;

                        let event = new createjs.Event("mousedown");
                        event.stageX = e.stageX;
                        event.stageY = e.stageY;

                        exportRoot.main.dispatchEvent(event);
                    }
                }

                let pt_mc = page.getChildByName("pt_mc");

                pt_mc.x += offsetX;
                pt_mc.y += offsetY;
                page.mc.y += offsetY;

                if(isNaN(page.mc.y)) {
                    page.mc.y = 0;
                }

                console.log("### handleMove");
            }

            function onScorllTick(e) {
                if(!drag.touched) {
                    if(Math.abs(drag.speedY)>0) {
                        drag.speedY += -drag.speedY/10;
                        if(Math.abs(drag.speedY)<=0.01) {
                            drag.speedY = 0;
                        }
                    }

                    if(Math.abs(drag.speedX)>0) {
                        drag.speedX += -drag.speedX/10;
                        if(Math.abs(drag.speedX)<=0.01) {
                            drag.speedX = 0;
                        }
                    }

                    let offsetY = drag.speedY*e.delta/stage.scaleY;
                    let offsetX = drag.speedX*e.delta/stage.scaleX;

                    if(page.mc.y+offsetY>0) {
                        offsetY = -page.mc.y;
                        drag.speedY = 0;
                    }

                    if(page.mc.y+offsetY<-(page.mc.getBounds().height-lib.properties.height)) {
                        offsetY = -(page.mc.getBounds().height-lib.properties.height)-page.mc.y;
                        drag.speedY = 0;
                    }

                    let pt_mc = page.getChildByName("pt_mc");
                    pt_mc.x += offsetX;
                    pt_mc.y += offsetY;

                    page.mc.y += offsetY;

                    if(isNaN(page.mc.y)) {
                        page.mc.y = 0;
                    }

                    drag.stageX += offsetX;
                    drag.stageY += offsetY;

                    if(drag.speedX==0&&drag.speedY==0) {
                        drag.tick.playing = false;
                    }
                }

                // let event = new createjs.Event("dargScroll");
                // event.stageX = drag.stageX;
                // event.stageY = drag.stageY;
                //
                // event.speedX = drag.speedX;
                // event.speedY = drag.speedY;
                //
                // page.dispatchEvent(event);

                if(!drag.tick.playing) {
                    page.removeEventListener("tick", onScorllTick);
                    page.removeChild(page.getChildByName("pt_mc"));

                    // let event = new createjs.Event("dargScrollComplete");
                    //
                    // event.stageX = drag.stageX;
                    // event.stageY = drag.stageY;
                    //
                    // event.speedX = drag.speedX;
                    // event.speedY = drag.speedY;
                    //
                    // page.dispatchEvent(event);
                }
            }

            page.addEventListener("mousedown", handleStart);

            // e.page.addEventListener("mousedown", e => {
            //     e.stopPropagation();
            // });
            // e.page.addEventListener("pressmove", e => {
            //     e.stopPropagation();
            // });
            // e.page.addEventListener("pressup", e => {
            //     e.stopPropagation();
            // });
            break;
        }
        case 4: {
            page.bottom_mc.y = lib.properties.height;
            page.bottom_pt_btn.y = lib.properties.height-60;

            page.map_mc.addEventListener("click", e=>{
                wx.openLocation({
                    latitude: 39.95996054243789, // 纬度，浮点数，范围为90 ~ -90
                    longitude: 116.46744473699644, // 经度，浮点数，范围为180 ~ -180。
                    name: "北京海航大厦万豪酒店", // 位置名
                    address: '北京市朝阳区霄云路甲26号', // 地址详情说明
                    scale: 15, // 地图缩放级别,整型值,范围从1~28。默认为最大
                })
            });

            // page.map_mc.addEventListener("mousedown", e => {
            //     e.stopPropagation();
            // });
            // page.map_mc.addEventListener("pressmove", e => {
            //     e.stopPropagation();
            // });
            // page.map_mc.addEventListener("pressup", e => {
            //     e.stopPropagation();
            // });
            break;
        }
        case 5: {

            page.bottom_pt_btn.y = lib.properties.height-60;

            page.btn_1.addEventListener("click", e=>{
                openPage(2);
            })
            page.btn_2.addEventListener("click", e=>{
                openPage(3);
            })
            page.btn_3.addEventListener("click", e=>{
                openPage(4);
            })

            page.btn_1.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.btn_1.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.btn_1.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            page.btn_2.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.btn_2.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.btn_2.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            page.btn_3.addEventListener("mousedown", e => {
                e.stopPropagation();
            });
            page.btn_3.addEventListener("pressmove", e => {
                e.stopPropagation();
            });
            page.btn_3.addEventListener("pressup", e => {
                e.stopPropagation();
            });

            // e.page.addEventListener("mousedown", e => {
            //     e.stopPropagation();
            // });
            // e.page.addEventListener("pressmove", e => {
            //     e.stopPropagation();
            // });
            // e.page.addEventListener("pressup", e => {
            //     e.stopPropagation();
            // });
            break;
        }
    }
}

function pageUpdated(e) {
    let page = e.page.page;

    switch (e.pageId) {
        case 1: {
            setTimeout(() => {
                $("#loading").css("display", "none");
                page.gotoAndPlay(1);
            }, 3000);
            break;
        }
        case 2:{
            loadPageResources(page).addEventListener("complete", function(e) {
                page.gotoAndPlay(1);
            });
            break;
        }
        case 3:{
            loadPageResources(page).addEventListener("complete", function(e) {
                page.gotoAndPlay(1);
            });
            break;
        }
        case 4:{
            page.gotoAndPlay(1);
            break;
        }
        case 5:{
            page.gotoAndPlay(1);
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
