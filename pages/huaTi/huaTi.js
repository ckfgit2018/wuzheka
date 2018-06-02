// pages/huaTi/huaTi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectType: 45,
        btnWrapper: [{ text: 'Ta的话题', isActive: true, type: 45 }, { text: 'Ta的回复', isActive: false, type: 46 }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.tabbar = this.selectComponent("#tabbar");
        this.tabbar.setType(-1);
    },
    switchContent(e) {
        let type = e.currentTarget.dataset.type;
        let index = e.currentTarget.dataset.index;
        let btnWrapper = this.data.btnWrapper;
        for (var i in btnWrapper) {
            btnWrapper[i].isActive = false
        }
        btnWrapper[index].isActive = !btnWrapper[index].isActive
        this.setData({
            btnWrapper: btnWrapper,
            selectType: type
        })
    }
})