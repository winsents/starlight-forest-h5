(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_atlas_P_1", frames: [[0,0,750,1623],[752,0,672,529],[0,1625,681,222],[539,1922,63,59],[334,2009,59,28],[353,1892,83,83],[438,1892,62,84],[257,2009,75,24],[539,2010,50,25],[502,1849,53,71],[469,1978,68,70],[254,1892,97,75],[0,1849,160,193],[162,1892,90,90],[591,2010,50,25],[162,2009,93,36],[395,2009,51,25],[539,1983,51,25],[162,1984,305,23],[162,1849,338,41]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap211111111111111111 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shop = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.养料 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.养料2 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.加养料 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.加养料1 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.商城1 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.图层36 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.图层37 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.图层40 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.树苗 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.椭圆3 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.浇水 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.矩形4 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.答题1 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.背包 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.距离下一阶段还需要XX个养料 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.进度条 = function() {
	this.initialize(ss["main_atlas_P_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件177 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_3
	this.instance = new lib.bg();
	this.instance.setTransform(-375,-813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件177, new cjs.Rectangle(-375,-813,750,1623), null);


(lib.元件170 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.元件10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.树苗();
	this.instance.setTransform(-80,-193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-80,-193,160,193), null);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.alpha=0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,-529);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,-529,672,529), null);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.养料();
	this.instance.setTransform(13,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.养料2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,83,83), null);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.背包();
	this.instance.setTransform(19,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.矩形4();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_3
	this.instance_2 = new lib.图层37();
	this.instance_2.setTransform(14,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_1
	this.instance_3 = new lib.椭圆3();
	this.instance_3.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,93,112), null);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.答题1();
	this.instance.setTransform(20,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.矩形4();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_3
	this.instance_2 = new lib.图层36();
	this.instance_2.setTransform(20,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_1
	this.instance_3 = new lib.椭圆3();
	this.instance_3.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,93,112), null);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.商城1();
	this.instance.setTransform(22,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.矩形4();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_3
	this.instance_2 = new lib.shop();
	this.instance_2.setTransform(16,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_1
	this.instance_3 = new lib.椭圆3();
	this.instance_3.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,93,112), null);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.加养料1();
	this.instance.setTransform(10,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.矩形4();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_3
	this.instance_2 = new lib.加养料();
	this.instance_2.setTransform(16,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_1
	this.instance_3 = new lib.椭圆3();
	this.instance_3.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,-1,93,113), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.浇水();
	this.instance.setTransform(23,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.矩形4();
	this.instance_1.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_3
	this.instance_2 = new lib.图层40();
	this.instance_2.setTransform(-1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_1
	this.instance_3 = new lib.椭圆3();
	this.instance_3.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-1,0,97,112), null);


(lib.元件9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_4
	this.instance = new lib.距离下一阶段还需要XX个养料();
	this.instance.setTransform(186,17);

	this.instance_1 = new lib.进度条();
	this.instance_1.setTransform(169,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_3
	this.instance_2 = new lib.元件6();
	this.instance_2.setTransform(407.5,-392.6,1,1,0,0,0,41.5,41.5);

	this.instance_3 = new lib.元件6();
	this.instance_3.setTransform(176.75,-309.6,1,1,0,0,0,41.5,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// 图层_2
	this.mc = new lib.元件10();
	this.mc.name = "mc";
	this.mc.setTransform(326,-127);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// 图层_1
	this.instance_4 = new lib.Bitmap211111111111111111();
	this.instance_4.setTransform(0,-222);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,-434.1,681,474.1), null);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.元件1();
	this.instance.setTransform(654.5,-241.05,1,1,0,0,0,46.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_5
	this.instance_1 = new lib.元件2();
	this.instance_1.setTransform(651.5,-56,1,1,0,0,0,46.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_4
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(285,-56,1,1,0,0,0,46.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_3
	this.instance_3 = new lib.元件4();
	this.instance_3.setTransform(164.5,-58,1,1,0,0,0,46.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层_1
	this.instance_4 = new lib.元件5();
	this.instance_4.setTransform(46.5,-58,1,1,0,0,0,46.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,-297,704,297), null);


(lib.page_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_7
	this.mc_order_list_rt = new lib.元件8();
	this.mc_order_list_rt.name = "mc_order_list_rt";
	this.mc_order_list_rt.setTransform(40,1334);

	this.timeline.addTween(cjs.Tween.get(this.mc_order_list_rt).wait(2));

	// 图层_6
	this.tools_bar = new lib.元件7();
	this.tools_bar.name = "tools_bar";
	this.tools_bar.setTransform(18,769);

	this.timeline.addTween(cjs.Tween.get(this.tools_bar).wait(2));

	// 图层_8
	this.mc_tree = new lib.元件9();
	this.mc_tree.name = "mc_tree";
	this.mc_tree.setTransform(37,692.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_tree).wait(2));

	// bg
	this.bg = new lib.元件177();
	this.bg.name = "bg";
	this.bg.setTransform(375,667);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-146,750,1623);


// stage content:
(lib.main = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.main = new lib.元件170();
	this.main.name = "main";

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'D0A85E88F37248D8BAB0E6AD7AE2ADD8',
	width: 750,
	height: 1334,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/main_atlas_P_1.png?1764778071205", id:"main_atlas_P_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D0A85E88F37248D8BAB0E6AD7AE2ADD8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;