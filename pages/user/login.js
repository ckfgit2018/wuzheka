// pages/user/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: true,
        passWorld: '',
        value: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '用户登录'
        })
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#e34f63',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.setData({
            isShow: true,
        })
    },
    bindblur(e) {
        this.setData({
            isShow: !this.data.isShow
        })
    },
    bindfocus(e) {
        this.setData({
            isShow: true,
        })
    },
    formSubmit(e) {
        console.log(e.detail.value)
        console.log(this.data.passWorld)
    },
    bindinput(e) {
        let passWorld = this.data.passWorld;
        let value = '';
        let inputValue = e.detail.value;
        passWorld += inputValue[inputValue.length - 1];
        for (var i = 0; i <= inputValue.length - 1; i++) {
            value += '*'
        }
        this.setData({
            passWorld: passWorld,
            value: value
        })
    }
})