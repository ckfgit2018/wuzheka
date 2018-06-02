let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollY: true,
        workDetail: {},
        imgList: ['http://qiye.dejiplaza.com/we10/attachment/images/5/2018/04/AfchN4RJpPYrbt5rKSBpDa.png', ],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            workDetail: app.workfiy
        })
    },
    prevImg(e) {
        let that = this;
        let img = e.currentTarget.dataset.url;
        wx.previewImage({
            current: img, // 当前显示图片的http链接
            urls: this.data.imgList // 需要预览的图片http链接列表
        })
    },
    back() {
        wx.navigateBack({
            delta: 1
        })
    }
})