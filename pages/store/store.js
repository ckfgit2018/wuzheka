// pages/store/store.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        meunWrapperType: 1,
        isShow: false,
        isShowList: false,
        animationData: {},
        meunWrapper: [{ name: '全部分类', isActive: true, type: 1 },
            { name: '今日折扣', isActive: false, type: 2 },
            { name: '附近优选', isActive: false, type: 3 }
        ],
        showList: [{ title: '测试酒吧', desc: '今日尊享5.00折', peopleNum: 122, address: '中山市', distance: '2km' },
            { title: '时间历史', desc: '非折扣日享受6.00折', peopleNum: 140, address: '上海市', distance: '4km' },
            { title: '金话筒口才', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' },
            { title: '南昌炒粉', desc: '今日尊享5.00折', peopleNum: 140, address: '上饶市', distance: '500m' },
        ],
        twoList: [{ type: 1, list: [{ name: '全部', type: 10, isActive: false }, { name: '政府机关', type: 11, isActive: false }, { name: '美食天地', type: 12, isActive: false }] },
            { type: 2, list: [{ name: '今日折扣', type: 13, }, { name: '其他折扣', type: 14, }] },
            { type: 3, list: [{ name: '1km', type: 20 }, { name: '20km', type: 21 }, { name: '50km', type: 23 }, { name: '100km', type: 24 }] },
        ],
        list: [{ name: '全部', type: 10 }, { name: '政府机关', type: 11 }, { name: '美食天地', type: 12 }],
        threeList: [{ type: 10, list: [{ name: '快餐外卖', type: 30 }, { name: '夜宵天地', type: 31 }, { name: '火锅香锅', type: 32 }] },
            { type: 11, list: [{ name: '乡政府', type: 40 }, { name: '财政局', type: 41 }] },
            { type: 12, list: [{ name: '快餐外卖', type: 30 }, { name: '夜宵天地', type: 31 }, { name: '火锅香锅', type: 32 }] },
        ],
        selectedList: [{ name: '快餐外卖', type: 30 }, { name: '夜宵天地', type: 31 }, { name: '火锅香锅', type: 32 }],
        typeList: [{ type: 30, showList: [{ title: '南昌炒粉', desc: '今日尊享5.00折', peopleNum: 140, address: '上饶市', distance: '500m' }] },
            { type: 31, showList: [{ title: '金话筒口才', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }] },
            { type: 32, showList: [{ title: '火锅料理', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }, ] },
            { type: 40, showList: [{ title: '广东乡镇', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }, ] },
            { type: 41, showList: [{ title: '婚姻介绍所', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }, ] },
            { type: 13, showList: [{ title: '火锅料理', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }, ] },
            { type: 14, showList: [{ title: '金话筒口才', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '120km' }, ] },
            { type: 20, showList: [{ title: '婚姻介绍所', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '0.5km' }, ] },
            { type: 21, showList: [{ title: '火锅料理', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '20km' }, ] },
            { type: 23, showList: [{ title: '金话筒口才', desc: '非折扣日享受5.00折', peopleNum: 138, address: '上海市', distance: '45km' }, ] },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.tabbar = this.selectComponent("#tabbar");
        this.tabbar.setType(1);
    },
    changClassfiy(e) {
        let list = null;
        let meunWrapper = this.data.meunWrapper;
        let index = e.currentTarget.dataset.index;
        let type = e.currentTarget.dataset.type;
        let twoList = this.data.twoList;
        for (var i in meunWrapper) {
            meunWrapper[i].isActive = false
        }
        meunWrapper[index].isActive = !meunWrapper[index].isActive;
        for (var i in twoList) {
            if (twoList[i].type == type) {
                list = twoList[i].list;
                break;
            }
        }
        this.setData({
            list: list,
            isShow: !this.data.isShow,
            meunWrapperType: type,
            meunWrapper: meunWrapper
        })
    },
    selecteThreeList(e) {
        if (this.data.meunWrapperType == 1) {
            let selectedThreeList = null;
            let selectList = this.data.list;
            let twoList = this.data.twoList;
            let threeList = this.data.threeList;
            let index = e.currentTarget.dataset.index;
            let type = e.currentTarget.dataset.type;
            for (var i in threeList) {
                if (threeList[i].type == type) {
                    selectedThreeList = threeList[i].list;
                }
            }
            for (var i = 0; i <= twoList.length - 1; i++) {
                let twolist = twoList[i].list
                for (var j = 0; j <= twolist.length - 1; j++) {
                    twolist[j].isActive = false
                    if (twolist[j].type == type) {
                        twolist[j].isActive = true;
                        selectList = twolist
                    }
                }
            }
            var animation = wx.createAnimation({
                duration: 1000,
                timingFunction: 'linear',
            })

            this.animation = animation

            animation.right('251px').step()
            this.setData({
                list: selectList,
                isShowList: true,
                selectedList: selectedThreeList,
                animationData: animation.export()
            })
        } else {
            let index = e.currentTarget.dataset.index;
            let type = e.currentTarget.dataset.type;
            let showList = this.data.showList;
            let typeList = this.data.typeList;
            for (var i = 0; i <= typeList.length - 1; i++) {
                if (typeList[i].type == type) {
                    showList = typeList[i].showList
                }
            }
            this.setData({
                isShow: false,
                isShowList: false,
                showList: showList,
            })
        }
    },
    showList(e) {
        let index = e.currentTarget.dataset.index;
        let type = e.currentTarget.dataset.type;
        let showList = this.data.showList;
        let typeList = this.data.typeList;
        for (var i = 0; i <= typeList.length - 1; i++) {
            if (typeList[i].type == type) {
                showList = typeList[i].showList
            }
        }
        this.setData({
            isShow: false,
            isShowList: false,
            showList: showList
        })
    }
})