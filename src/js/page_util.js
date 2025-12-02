const VERTICAL = 0;
const HORIZONTAL = 1;

function PageUtil(evt, comp) {
    createjs.EventDispatcher.initialize(PageUtil.prototype);
    var lib = comp.getLibrary();
    var orientation = null;

    function onCreatPage(page) {
        let shadow = new createjs.Shape();
        let mv = new createjs.MovieClip();
        let page_mv = new lib["page_"+page]();
        let containerMask = new createjs.Shape();

        page_mv.gotoAndStop(0);

        let lib_properties_width = lib.properties.width;
        let lib_properties_height = lib.properties.height;

        switch (App.orientation) {
            case VERTICAL:{
                // 竖屏

                break;
            }
            case HORIZONTAL:{
                // 横屏
                lib_properties_height = lib.properties.width*lib.properties.width/lib.properties.height;
                break;
            }
        }

        shadow.width = lib_properties_width;
        shadow.height = lib_properties_height;
        shadow.graphics.beginFill("#ffffff").drawRect(0, 0, lib_properties_width, lib_properties_height);

        containerMask.width = lib_properties_width;
        containerMask.height = lib_properties_height;
        containerMask.graphics.beginFill("#ffffff").drawRect(0, 0, lib_properties_width, lib_properties_height);

        shadow.shadow = new createjs.Shadow("#303030", 0, 0, 50);

        let bounds_bg = page_mv.bg.getBounds();
        let scale = lib_properties_height/bounds_bg.height;

        if(scale*bounds_bg.width<lib_properties_width) {
            scale = lib_properties_width/bounds_bg.width;
        }

        page_mv.bg.scaleY = page_mv.bg.scaleX = scale;

        page_mv.bg.y = lib_properties_height/2;
        page_mv.bg.x = lib_properties_width/2;

        mv.addChild(shadow);
        mv.addChild(page_mv);

        page_mv.mask = containerMask;
        mv.shadow = shadow;
        mv.page = page_mv;
        mv.name = "page_"+page;
        mv._scale = 1

        mv.__defineGetter__("scale", function () {
            return this._scale;
        })

        mv.__defineSetter__("scale", function (value) {
            this._scale = value;
            this.scaleY = this.scaleX = value;
        })

        switch (App.orientation) {
            case VERTICAL:{
                // 竖屏

                break;
            }
            case HORIZONTAL:{
                // 横屏
                let scale = lib.properties.height/lib.properties.width

                mv.scale = scale;
                mv.rotation = -90;
                mv.y = lib.properties.height;
                mv.x = 0;
                break;
            }
        }

        console.log("### orientation:", orientation);
        return mv;
    }

    this.getPage = (pageid, {params}={})=>{
        var page = onCreatPage(pageid);
        page.pageid = pageid;

        page.onInited = ()=>{
            var event = new createjs.Event("pageInited");
            event.pageId = page.pageid;
            event.page = page;
            event.params = params;
            this.dispatchEvent(event);

            var event_page = new createjs.Event("pageInited."+event.pageId);
            event.pageId = page.pageid;
            event_page.page = page;
            event.params = params;
            this.dispatchEvent(event_page);
        }

        page.onUpdate = ()=>{
            var event = new createjs.Event("pageUpdated");
            event.pageId = page.pageid;
            event.page = page;
            this.dispatchEvent(event);

            var event_page = new createjs.Event("pageUpdated."+event.pageId);
            event.pageId = page.pageid;
            event_page.page = page;
            this.dispatchEvent(event_page);
        }

        page.onDrag = ()=>{
            var scale = page.scale;
            createjs.Tween.get(page, {override:true}).to({scaleX:scale-0.05, scaleY:scale-0.05}, 400).addEventListener("change", (event)=>{

                let lib_properties_width = lib.properties.width;
                let lib_properties_height = lib.properties.height;

                switch (App.orientation) {
                    case VERTICAL:{
                        // 竖屏
                        event.target.target.x = (lib_properties_width-lib_properties_width*event.target.target.scaleX)/2;
                        event.target.target.y = (lib_properties_height-lib_properties_height*event.target.target.scaleY)/2;
                        break;
                    }
                    case HORIZONTAL:{
                        // 横屏
                        lib_properties_height = lib.properties.width*lib.properties.width/lib.properties.height;

                        lib_properties_height = lib.properties.width*lib.properties.width/lib.properties.height;

                        let scale = (lib_properties_width*event.target.target.scaleY)/(lib_properties_width*event.target.target.scale);

                        let x = (lib_properties_height-scale*lib_properties_height)/2;
                        let y = (lib_properties_width-scale*lib_properties_width)/2;

                        event.target.target.x = x*event.target.target.scale;
                        event.target.target.y = lib.properties.height-y*event.target.target.scale;
                        break;
                    }
                }
            });
        }
        //
        page.onDragFinish = (change)=>{
            var scale = page.scale;
            var alpha = 1;

            if(change) {
                scale = 0;
                alpha = 0;
            }

            createjs.Tween.get(page, {override:true}).to({scaleX:scale, scaleY:scale, alpha:alpha}, 400).call((event)=>{

            }).addEventListener("change", (event)=>{

                let lib_properties_width = lib.properties.width;
                let lib_properties_height = lib.properties.height;

                switch (App.orientation) {
                    case VERTICAL:{
                        // 竖屏
                        event.target.target.x = (lib_properties_width-lib_properties_width*event.target.target.scaleX)/2;
                        event.target.target.y = (lib_properties_height-lib_properties_height*event.target.target.scaleY)/2;
                        break;
                    }
                    case HORIZONTAL:{
                        // 横屏
                        lib_properties_height = lib.properties.width*lib.properties.width/lib.properties.height;

                        let scale = (lib_properties_width*event.target.target.scaleY)/(lib_properties_width*event.target.target.scale);

                        let x = (lib_properties_height-scale*lib_properties_height)/2;
                        let y = (lib_properties_width-scale*lib_properties_width)/2;

                        event.target.target.x = x*event.target.target.scale;
                        event.target.target.y = lib.properties.height-y*event.target.target.scale;
                        break;
                    }
                }
            });
        }

        // page.onOrientationChange = ()=>{
        //     console.log("============== ## ", orientation)
        //     var event = new createjs.Event("orientationChange");
        //     event.pageId = page.pageid;
        //     event.page = page;
        //     event.orientation = orientation;
        //     page.dispatchEvent("orientationChange");
        // }

        page.onDestroy = ()=>{
            var event = new createjs.Event("pageDestroy");
            event.pageId = page.pageid;
            event.page = page;
            this.dispatchEvent(event);
            page.dispatchEvent(event);

            var event_page = new createjs.Event("pageDestroy."+event.pageId);
            event.pageId = page.pageid;
            event_page.page = page;
            this.dispatchEvent(event_page);
        }

        // this.addEventListener("orientationChange", page.onOrientationChange);

        page.onInited();
        return page;
    }

    this.onOrientationChange = (ori)=>{
        orientation = ori;
        console.log("==============", orientation)
        var event_page = new createjs.Event("orientationChange");
        event_page.orientation = orientation;
        this.dispatchEvent(event_page);
    }

    // stage.addEventListener("onOrientationChange", ()=>{
    //     switch (ORIENTATION) {
    //         case VERTICAL:{
    //             console.log("### 垂直", ORIENTATION);
    //             exportRoot.main.rotation = 0;
    //             exportRoot.main.x = 0;
    //             exportRoot.main.y = 0;
    //             break;
    //         }
    //         case HORIZONTAL: {
    //             console.log("### 水平", ORIENTATION);
    //             exportRoot.main.rotation = -90;
    //             exportRoot.main.x = 0;
    //             exportRoot.main.y = lib.properties.height;
    //             break;
    //         }
    //     }
    //
    //     exportRoot.dispatchEvent("onOrientationChange");
    // })

    return this;
}
