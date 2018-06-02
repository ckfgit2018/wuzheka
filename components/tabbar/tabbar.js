Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        /*    carousList: {
              type: Array,
              value: [],
            }*/
    },
    data: {
      selectType:0,
        tabbarList: [{ imgUrl: '../../images/home.png', type: 0, toUrl: '../../pages/index/index', activeUrl: '../../images/home_active.png', text: '首页', isActive: true },
            { imgUrl: '../../images/store.png', type: 1, toUrl: '../../pages/store/store', activeUrl: '../../images/store_active.png', text: '商家', isActive: false },
            { imgUrl: '../../images/ruzu.png', type: 2, toUrl: '../../pages/admission/admission', activeUrl: '../../images/ruzu_active.png', text: '入驻', isActive: false },
            { imgUrl: '../../images/user.png', type: 3, toUrl: '../../pages/user/user', activeUrl: '../../images/user_active.png', text: '我的', isActive: false }
        ]
        // 这里是一些组件内部数
    },
    methods: {
        changStatus(e) {
            let type = e.currentTarget.dataset.type;
            let tabbarList = this.data.tabbarList;
            let index = e.currentTarget.dataset.index;
            let toUrl = e.currentTarget.dataset.tourl;
            for (var i in tabbarList) {
                tabbarList[i].isActive = false
            }
            tabbarList[index].isActive = !tabbarList[index].isActive;
            this.setData({
                tabbarList: tabbarList
            })
            wx.redirectTo({
                url: toUrl + '?type=' + type
            })
        },
        setType(type){
          let tabbarList=this.data.tabbarList;
          if(!type==0){
              tabbarList[0].isActive=false
          }
          this.setData({
            selectType:type,
            tabbarList:tabbarList
          })
        }
    }
})