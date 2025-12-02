function Selecter(slr, group, name, energy, protein) {
    createjs.EventDispatcher.initialize(Selecter.prototype);
    this.target = slr;
    this.energy = energy;
    this.protein = protein;

    if(group!=null) {
        this.group = group;
        this.name = name;

        if(!Selecter.prototype[group]) {
            Selecter.prototype[group]=[];
        }
        Selecter.prototype[group].push({name:name, selecter:this, value:false});
    }

    slr.addEventListener('click', e=>{
        var currentLabel = slr.currentLabel;
        var event = new Event("change");
        if(currentLabel=="off") {
            slr.gotoAndStop("on");
            event.value = true;
            if(this.group!=null) {
                for(var i=0;i<Selecter.prototype[this.group].length;i++) {
                    if(Selecter.prototype[this.group][i].value&&Selecter.prototype[this.group][i].name!=this.name){
                        Selecter.prototype[this.group][i].value=false;
                        Selecter.prototype[this.group][i].selecter.target.gotoAndStop("off");
                    }
                    if(Selecter.prototype[this.group][i].name==this.name) {
                        Selecter.prototype[this.group][i].value=true;
                    }
                }
            }
        } else {
            slr.gotoAndStop("off");
            event.value = false;

            if(this.group!=null) {
                for(var i=0;i<Selecter.prototype[this.group].length;i++) {
                    if(Selecter.prototype[this.group][i].name==this.name) {
                        Selecter.prototype[this.group][i].value=false;
                    }
                }
            }
        }

        if(this.group!=null) {
            for(var i=0;i<Selecter.prototype[this.group].length;i++) {
                if (Selecter.prototype[this.group][i].value) {
                    event.group = Selecter.prototype[this.group][i];
                    break;
                }
            }
        }

        this.dispatchEvent(event);
    })

    return this;
}

function init_input_txt (id, txt, cls) {
    const bounds = txt.getBounds()
    const pt =  txt.parent.localToGlobal(txt.x, txt.y)
    const div_form = $('<div id="' + id + '" class="input-box" style="position: absolute">')
    const txt_form = $('<input type="text" >')

    if (cls != null) {
        txt_form.addClass(cls)
    }

    // if (id == "input_mail"){
    // 	div_form.addClass("mail")
    // }

    // $('#animation_container').append(txt_form)
    $('#animation_container').append(div_form)
    $('#'+id).append(txt_form)

    txt_form.css('top', '0px')
    txt_form.css('left', '0px')
    txt_form.css('position', 'absolute')
    txt_form.css('width', '100%')
    txt_form.css('height', '100%');
    // div_form.append(txt_form)

    div_form.css('top', pt.y/stage.scaleX/canvasScale+'px')
    div_form.css('left', pt.x/stage.scaleX/canvasScale+'px')
    div_form.css('width', bounds.width/canvasScale + 'px')
    div_form.css('height', bounds.height/canvasScale + 'px');

    ((tt, tf) => {
        tf.bind('input', e => {
            if (e.delegateTarget.value.length > 0) {
                if (tt.parent.placeholder) { tt.parent.placeholder.alpha = 0 }
            }

            if (e.delegateTarget.value.length <= 0) {
                if (tt.parent.placeholder) { tt.parent.placeholder.alpha = 1 }
            }
        })
        tf.bind('focus', e => {
            tt.parent.placeholder.alpha = 0
            focus_from = e.delegateTarget
        })
        tf.bind('blur', e => {
            if (e.delegateTarget.value.length > 0) {
                if (tt.parent.placeholder) { tt.parent.placeholder.alpha = 0 }
            }

            if (e.delegateTarget.value.length <= 0) {
                if (tt.parent.placeholder) { tt.parent.placeholder.alpha = 1 }
            }

            if (focus_from == e.delegateTarget) {
                focus_from = null
            }
        })
    })(txt, txt_form)
}

function numberMc(num, link) {
    var result = new createjs.MovieClip();

    var prev_n = null;
    for(var i =0;i<num.length;i++) {
        var mc_n = new lib[link]();
        if(i>0) {
            var bounds=prev_n.getBounds();
            mc_n.x=prev_n.x+bounds.width;
        } else {
            mc_n.x=0;
        }
        result.addChild(mc_n);
        mc_n.gotoAndStop(num[i])
        prev_n = mc_n;
    }

    return result;
}

const Toast = function (msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.id = "toast";
    m.style.cssText="max-width:80%;min-width: 180px;padding:10px 14px;color: rgb(255, 255, 255);text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;box-shadow: 0 0 10px rgba(0,0,0,0.5);";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

function isNumber(val){
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }
}

Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return null;
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

//去除首尾空格
function trim(string) {
    if(string.trim) {
        return string.trim();
    }else {
        let reg = /^\s+|\s+$/g;
        return string.replace(reg,"");
    }
}

// 实现数据排序
function sortData(data, key, type) {
    if(type == "asc") {
        data.sort(function(a, b) {
            return a[key] - b[key];
        });
    } else if(type == "desc") {
        data.sort(function(a, b) {
            return b[key] - a[key];
        });
    }
}

function loadJS( url, callback ){
    var script = document.createElement('script'),

        fn = callback || function(){};

    script.type = 'text/javascript';



    //IE

    if(script.readyState){

        script.onreadystatechange = function(){

            if( script.readyState == 'loaded' || script.readyState == 'complete' ){

                script.onreadystatechange = null;

                fn();

            }

        };

    }else{

        //其他浏览器

        script.onload = function(){

            fn();

        };

    }

    script.src = url;

    document.getElementsByTagName('head')[0].appendChild(script);
}

/*
 * 一般与服务端交互的这种文件类型一般采用表单提交--multipart/form-data的方式，这就要求我们熟悉传输form-data的数据交互，所以需要把刚才获取到的base64转为可post的二进制数据，JavaScript提供了原生的atob/btoa用来对base64进行编码和解码；
 */
function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');
    source.src = src;
    source.type = type;
    element.appendChild(source);
}

$(document).ready(function() {
    // $("video").each(function (itera, el) {
    //     addSourceToVideo(el, $(el).data("src"), "video/mp4");
    // });
});
