//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        endTime: 1527868799000, //2018-06-01 23:59:59
        hours: 0,
        minute: 0,
        second: 0,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        vertical: true,
        imgUrls: ['../../images/carous01.png'],
        messList: ['暂无通知', '好消息,某超市今天开业啦', '某女星今天嫁人啦!'],
        itemList: [{ icon: '../../images/icon03.png', text: '全场五折' },
            { icon: '../../images/icon01.png', text: '特价抢购' },
            { icon: '../../images/icon02.png', text: '同城活动' },
            { icon: '../../images/icon08.png', text: '城市114' },
            { icon: '../../images/icon07.png', text: '百姓爆料' },
            { icon: '../../images/icon06.png', text: '兑换商城' },
            { icon: '../../images/icon05.png', text: '开通vip' },
            { icon: '../../images/icon04.png', text: '每日签到' },
        ],
        timer: null
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onShow() {
        this.getTime();
    },
    getTime() {
        let that = this;
        this.data.timer = null;
        let endTime = new Date(this.data.endTime).getTime();
        let nowTime = new Date().getTime();
        let differDay = new Date(endTime - nowTime).getDate();
        let differHours = new Date(endTime - nowTime).getHours();
        let differMinutes = new Date(endTime - nowTime).getMinutes();
        let differSeconds = new Date(endTime - nowTime).getSeconds();
        let totalHours = differDay * 24 + differHours;
        clearInterval(this.data.timer)
        if (nowTime == endTime) {
            clearInterval(that.data.timer)
            that.data.timer = null
        } else {
            differMinutes = parseInt(differMinutes) >= 10 ? differMinutes : '0' + parseInt(differMinutes);
            differSeconds = parseInt(differSeconds) >= 10 ? differSeconds : '0' + parseInt(differSeconds);
            differHours = parseInt(differHours) >= 10 ? differHours : '0' + parseInt(differHours);
            that.data.timer = setInterval(function() {
                if (parseInt(differSeconds) == 0) {
                    differSeconds = 59;
                    differMinutes = parseInt(differMinutes) - 1;
                    if (differMinutes < 0) {
                        differMinutes = 59;
                        totalHours = parseInt(totalHours) - 1;
                    }
                    differMinutes = parseInt(differMinutes) >= 10 ? differMinutes : '0' + parseInt(differMinutes);
                } else {
                    differSeconds = parseInt(differSeconds) - 1;
                    differSeconds = parseInt(differSeconds) >= 10 ? differSeconds : '0' + parseInt(differSeconds);
                }
                that.setData({
                    hours: totalHours,
                    minute: differMinutes,
                    second: differSeconds
                })
            }, 1000)
        }
    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    toMore() {
        wx.navigateTo({
            url: '../../pages/index/more'
        })
    },
    findStore() {
        wx.navigateTo({
            url: '../../pages/store/store'
        })
    },
    toDetail() {
        wx.navigateTo({
            url: '../../pages/detail/detail'
        })
    },
    toWuZhe() {
        wx.navigateTo({
            url: '../../pages/wuShop/wuShop'
        })
    }
})