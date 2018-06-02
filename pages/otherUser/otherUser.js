// pages/otherUser/otherUser.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemList: [{ name: '我的话题', imgUrl: '../../images/edit.png', toUrl: '../../pages/huaTi/huaTi' },
            { name: '我的信息', imgUrl: '../../images/message.png', toUrl: '../../pages/message/message' },
            { name: '充值金币', imgUrl: '../../images/chongzi.png', toUrl: '../../pages/recharge/recharge' },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.otherBar = this.selectComponent("#otherBar");
        this.otherBar.setType(options.type);
    },
    towhere(e) {
        let index = e.currentTarget.dataset.index;
        let itemList = this.data.itemList;
        wx.navigateTo({
            url: itemList[index].toUrl
        })
    }
})