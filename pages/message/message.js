let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollY: true,
        messageWrapper: [{ name: '全部', type: 10, isActive: true },
            { name: '显示中', type: 11, isActive: false },
            { name: '未审核', type: 12, isActive: false },
            { name: '未显示', type: 13, isActive: false },
        ],
        typeClass: [{
                type: 10,
                list: [
                    { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '200元/日', num: 3, workfiy: '电器工', endTime: '2018-04-12', telephone: '18219015944', startTime: '2018-04-10 16:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] },
                    { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '220元/日', num: 10, workfiy: '搬砖', endTime: '2018-04-20', telephone: '18219015944', startTime: '2018-04-09 14:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] }
                ]
            },
            { type: 11, list: [] },
            { type: 12, list: [] },
            {
                type: 13,
                list: [
                    { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '200元/日', num: 3, workfiy: '电器工', endTime: '2018-04-12', telephone: '18219015944', startTime: '2018-04-10 16:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] },
                    { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '220元/日', num: 10, workfiy: '搬砖', endTime: '2018-04-20', telephone: '18219015944', startTime: '2018-04-09 14:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] },
                    { title: '急招', saddress: '中山市火炬开发区102号3楼', alary: '280元/日', num: 1, workfiy: '搬水泥', endTime: '2018-05-20', telephone: '18219015944', startTime: '2018-05-09 14:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] }
                ]
            },
        ],
        selectList: [
            { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '200元/日', num: 3, workfiy: '电器工', endTime: '2018-04-12', telephone: '18219015944', startTime: '2018-04-10 16:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] },
            { title: '急聘招聘', address: '中山市火炬开发区102号3楼', salary: '220元/日', num: 10, workfiy: '搬砖', endTime: '2018-04-20', telephone: '18219015944', startTime: '2018-04-09 14:40', company: '广东福悦智能科技有限公司', treat: ['五险一金', '住宿补贴', '年终奖', '交通方便'] },

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},
    switch (e) {
        let messageWrapper = this.data.messageWrapper;
        let index = e.currentTarget.dataset.index;
        let type = e.currentTarget.dataset.type;
        for (var i in messageWrapper) {
            messageWrapper[i].isActive = false
        }
        messageWrapper[index].isActive = !messageWrapper[i].isActive
        let selectList = this.data.typeClass.find((item) => { return item.type == type }).list
        this.setData({
            messageWrapper: messageWrapper,
            selectList: selectList
        })
    },
    toWorkDetail(e) {
        let item = e.currentTarget.dataset.item;
        wx.navigateTo({
            url: '../../pages/workDetail/workDetail'
        })
        app.workfiy = item

    },
    editUser() {
        wx.navigateTo({
            url: '../../pages/editUser/editUser'
        })
    }
})