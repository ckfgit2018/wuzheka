// pages/wuZhe/wuZhe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      selectType:1,
      focus:true,
      buyWays:[{name: '直接购买',type:1,isClick:true},{name: '使用激活码',type:2,isClick:false}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changStatus(e){
    let index=e.currentTarget.dataset.index;
    let type=e.currentTarget.dataset.type;
    let buyWays=this.data.buyWays;
    for(var i in buyWays){
      buyWays[i].isClick=false
    }
    buyWays[index].isClick=!buyWays[index].isClick
    this.setData({
      buyWays:buyWays,
      selectType:type
    })
  }
})