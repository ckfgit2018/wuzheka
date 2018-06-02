// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        systemInfo: '',
        signNum: 3,
        status: false,
        befroeTimp: 1527166185023, //今天1527177600000，昨天1527166185023
        totalSign: 3,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onReady() {
        console.log(1)
    },
    onLoad: function(options) {
        let that = this;
        this.tabbar = this.selectComponent("#tabbar");
        this.tabbar.setType(options.type);
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    systemInfo: res.platform
                })
            }
        })
        this.isStatus();
    },
    onShow() {
        console.log(2)
        let that = this;
        that.setData({
            signNum: that.data.signNum,
            befroeTimp: that.data.befroeTimp,
            status: that.data.status,
            totalSign: that.data.totalSign,
        })
    },
    signIn() {
        let that = this;
        let status = this.data.status;
        let signNum = this.data.signNum;
        let totalSign = this.data.totalSign;
        let timestamp = Date.parse(new Date('2018-06-02'));
        let day = new Date(timestamp).getDate();
        let signTimp = this.getTimp(timestamp);
        let befroeTimp = this.getTimp(this.data.befroeTimp);
        if (signTimp == befroeTimp) {
            if (!status) {
                status = !status
                totalSign++;
                signNum++;
                that.setData({
                    status: status,
                    befroeTimp: timestamp,
                    totalSign:totalSign,
                    signNum:signNum
                })
                wx.showToast({
                    title: '签到成功',
                    icon: 'success',
                    duration: 2000
                })
            } else {
                that.setData({
                    status: status,
                    befroeTimp: timestamp
                })
                wx.showToast({
                    title: '已签到',
                    icon: 'none',
                    duration: 2000
                })
            }
        } else {
            totalSign++;
            signNum++;
            if (!status) {
                status = !status
            }
            this.setData({
                signNum: signNum,
                status: status,
                befroeTimp: timestamp,
                totalSign: totalSign,
            })
            wx.showToast({
                title: '签到成功',
                icon: 'success',
                duration: 2000
            })
        }

    },
    getTimp(time) {
        let Time = new Date(time);
        let Year = Time.getFullYear();
        let Month = Time.getMonth() + 1;
        let Day = Time.getDate();
        if (this.data.systemInfo == 'ios') {
            return new Date(Year + '/' + Month + '/' + Day).getTime();
        } else {
            return new Date(Year + '-' + Month + '-' + Day).getTime();
        }
    },
    isStatus() {
        let that = this;
        let signNum = this.data.signNum;
        let status = this.data.status;
        let timestamp = Date.parse(new Date('2018-06-01'));
        let day = new Date(timestamp).getDate();
        let starttime = this.getTimp(timestamp);
        let befroeTimp = this.getTimp(this.data.befroeTimp);
        if (day == 1) {
            this.setData({
                signNum: 0
            })
        }
        if (starttime == befroeTimp) {
            that.setData({
                status: status,
                befroeTimp: timestamp
            })
        } else {
            that.setData({
                status: false,
                befroeTimp: timestamp
            })
        }
    },
    toOpen() {
        wx.navigateTo({
            url: '../../pages/wuZhe/wuZhe'
        })
    }
})