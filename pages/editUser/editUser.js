let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      workfiy:{},
      selectType: [
      {name: '元/日', value: '元/日',checked:true},
      {name: '元/月', value: '元/月',checked:false},
      {name: '元/年', value: '元/年',checked:false},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        workfiy:app.workfiy
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
})