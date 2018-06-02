Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
/*    carousList: {
      type: Array,
      value: [],
    }*/
  },
  data: {
    carousList:[],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:500
    // 这里是一些组件内部数
  },
  methods: {
    fun(carous){
      this.setData({
        carousList:carous
      })
    }
  }
})