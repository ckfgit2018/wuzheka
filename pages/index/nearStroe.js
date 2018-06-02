// pages/index/nearStroe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      meunWrapper:[{name:'全部分类',isActive: true,type: 1},
      {name:'今日折扣',isActive: false,type: 2},
      {name:'附近优选',isActive: false,type: 3}],
      showList:[{title:'测试酒吧',desc:'今日尊享5.00折',peopleNum:122,address:'中山市',distance:'2km'},
      {title:'时间历史',desc:'非折扣日享受6.00折',peopleNum:140,address:'上海市',distance:'4km'},
      {title:'金话筒口才',desc:'非折扣日享受5.00折',peopleNum:138,address:'上海市',distance:'120km'},
      {title:'南昌炒粉',desc:'今日尊享5.00折',peopleNum:140,address:'上饶市',distance:'500m'},
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})