// pages/recharge/recharge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShowMask: false,
        isOtherType: false,
        moneyType: [{ goldCoin: 1, money: 0.01, type: 10 },
            { goldCoin: 100, money: 1, type: 11 },
            { goldCoin: 500, money: 5, type: 12 },
            { goldCoin: 1000, money: 10.00, type: 13 },
            { goldCoin: 2000, money: 20.00, type: 14 },
            { goldCoin: 5000, money: 50.00, type: 15 }
        ],
        spliceType: [{ goldCoin: 10000, money: 100.00, type: 20 },
            { goldCoin: 50000, money: 500.00, type: 21 },
            { goldCoin: 100000, money: 1000.00, type: 22 },
        ],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
/*        this.otherBar = this.selectComponent("#otherBar");
        this.otherBar.setType(options.type);*/
    },
    isOtherType() {
        this.setData({
            isShowMask: true,
        })
    },
    closeMask() {
        this.setData({
            isShowMask: false,
        })
    },
    addMoney(e) {
        let moneyType = this.data.moneyType;
        let type = e.currentTarget.dataset.type;
        let spliceType = this.data.spliceType;
        let typeClass = moneyType.find((item) => { return item.type == type }) || spliceType.find((item) => { return item.type == type });
        wx.showToast({
            title: `支付${typeClass.money}元`,
            icon: 'success',
            duration: 2000
        })
    }
})