// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: '南京',
        scrollY:true,
        vertical:true,
        indicatorDots: false,
        autoplay: true,
        interval: 4000,
        duration: 500,
        carousList: [{ url: '../../images/header01.jpg' }, { url: '../../images/header02.jpg' }],
        addressList: [{ address: '上海', type: 10 },
            { address: '江西', type: 11 },
            { address: '北京', type: 12 },
            { address: '深圳', type: 13 },
            { address: '南京', type: 14 },
            { address: '广州', type: 15 },
            { address: '中山', type: 16 },
        ],
        swiperList:[{name:'餐饮',imgUrl:'../../images/food.png'},
            {name:'娱乐',imgUrl:'../../images/yule.png'},
            {name:'招聘',imgUrl:'../../images/zhaopin.png'},
            {name:'租贷',imgUrl:'../../images/zudai.png'},

        ],
        noticeList:[{text:'微城商圈近期管理规矩',text1:'【必看】微城圈规则申明(总版规)'},
        {text:'微城商圈近期管理规矩',text1:'【必看】微城圈规则申明(总版规)'},
        {text:'微城商圈近期管理规矩',text1:'【必看】微城圈规则申明(总版规)'}
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.otherBar = this.selectComponent("#otherBar");
        this.carous = this.selectComponent("#carous");
        this.otherBar.setType(0);
   /*     this.carous.fun(this.data.carousList)*/
        this.setData({
            address: options.address || this.data.address
        })
    },
    switch (e) {
        let type = e.currentTarget.dataset.type;
        let address = this.data.addressList;
        let selectAddress = address.find((item) => {
            return item.type == type
        })
        wx.navigateTo({
            url: `../../pages/detail/detail?address=${selectAddress.address}`
        })
    }
})