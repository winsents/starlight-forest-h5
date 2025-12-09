function init(callback) {


    // 初始化
    let init = () => {
        if (callback) callback()

        // getUserInfo(()=>{
        //     user = store.get('user');
        //     if (callback) callback(user)
        //     console.log(user);
        // });

        // let user = store.get('user');
        // if (user) {
        //     if (callback) callback(user)
        // } else {
        // }

        reqInstance.post('user/wx_info', {url: window.location.href}).then(result => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: result.data.appid, // 必填，公众号的唯一标识
                timestamp: result.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: result.data.nonceStr, // 必填，生成签名的随机串
                signature: result.data.signature,// 必填，签名
                jsApiList:['getLocalImgData','chooseImage','updateAppMessageShareData','updateTimelineShareData']
            });

            wx.ready(function() {
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                wx.updateAppMessageShareData({
                    title: '世界同频 诠愈先机', // 分享标题
                    desc: '诺中华｜2025年神经免疫高峰论坛', // 分享描述
                    link: 'https://online.jup360.com/omega/user/authorize?projectId=22&havas=true&name=letterofinvitationh520250310', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://www.havas-items.com/letterofinvitationh520250310/images/share_icon.png', // 分享图标
                    success: function () {
                        // 设置成功
                        // alert('set finish')
                    }
                });

                wx.updateTimelineShareData({
                    title: '世界同频 诠愈先机', // 分享标题
                    desc: '诺中华｜2025年神经免疫高峰论坛', // 分享描述
                    link: 'https://online.jup360.com/omega/user/authorize?projectId=22&havas=true&name=letterofinvitationh520250310', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://www.havas-items.com/letterofinvitationh520250310/images/share_icon.png', // 分享图标
                    success: function () {
                        // 设置成功
                    }
                });

                // var audioEle = document.getElementById("Jaudio");
                // audioEle.src="images/bg.mp3";
                // audioAutoPlay('Jaudio');
            })
        }).catch(err => {
            console.log(err)
        });
    }
}
