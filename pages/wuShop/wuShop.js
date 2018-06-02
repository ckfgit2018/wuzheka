// pages/wuShop/wuShop.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        circular: true,
        listItem: [{ week: '周五', day: '今天', type: 1 },
            { week: '周六', day: '02', type: 2 },
            { week: '周日', day: '03', type: 3 },
            { week: '周一', day: '04', type: 4 },
            { week: '周二', day: '05', type: 5 },
            { week: '周三', day: '06', type: 6 },
            { week: '周四', day: '07', type: 7 },
            { week: '周五', day: '08', type: 8 },
            { week: '周六', day: '09', type: 9 },
            { week: '周日', day: '10', type: 10 },
            { week: '周一', day: '11', type: 11 },
            { week: '周二', day: '12', type: 12 },
            { week: '周三', day: '13', type: 13 },
            { week: '周四', day: '14', type: 14 },
            { week: '周五', day: '15', type: 15 },
            { week: '周六', day: '16', type: 16 },
            { week: '周日', day: '17', type: 17 },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.tabbar = this.selectComponent("#tabbar");
        this.tabbar.setType(0);
    },
    show() {
        wx.showLoading({
            title: '加载中',
        })
        setTimeout(function() {
            wx.hideLoading()
        }, 2000)
    },
    toOpen() {
        wx.navigateTo({
            url: '../../pages/wuZhe/wuZhe'
        })
    }
})