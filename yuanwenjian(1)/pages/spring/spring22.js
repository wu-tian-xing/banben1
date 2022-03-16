// pages/spring/spring22.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sg:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
        var asd=options.ID
        console.log(asd)
        this.getOne(asd)
    },
    getOne(asd){
     var  that = this
        wx.request({
          url: 'http://116.62.214.111:8001/FestivalActionController/selectFestivalWork',
          data:{
            
                Keyword:asd,
                page:1,
                limit:1
            },
            success:function(res){
                console.log(res.data)
                that.setData({
                    sg:res.data.data
                })
            },
            fail:(res)=>{
              console.log(res)
            }
        })
    },

    qwe:function(){
    var er=this.data.sg
        console.log(er)
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