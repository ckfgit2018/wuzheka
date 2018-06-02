Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    /*    carousList: {
          type: Array,
          value: [],
        }*/
  },
  data: {
    infoList: [{ type: 1, list: ['石歧区', '东区', '小榄', '西区'] },
      { type: 2, list: ['石歧大信', '太阳城'] },
      { type: 3, list: ['最近距离', '1km', '2km', '3km'] },
      { type: 4, list: ['人均消费价格排序', '商家星级排序', '默认排序'] }
    ],
    titleList: [{ name: '区域', isShow: false }, { name: '商圈', isShow: false }, { name: '附近', isShow: false }, { name: '智能排序', isShow: false }, ],
    list: [],
    // 这里是一些组件内部数
  },
  methods: {
    changClass(e) {
      let titleList = this.data.titleList;
      let index = e.currentTarget.dataset.index;
      if (!titleList[index].isShow) {
        for (var i in titleList) {
          titleList[i].isShow = false
        }
        titleList[index].isShow = true
      } else {
        titleList[index].isShow = !titleList[index].isShow;
      }
      let list = this.data.infoList[index].list;
      this.setData({
        activeIndex: index,
        list: list,
        titleList: titleList
      })
    },
    toget(e) {
      let index = e.currentTarget.dataset.index;
    }
  }
})