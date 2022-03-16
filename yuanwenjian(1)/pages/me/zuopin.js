var app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //点赞的相关数据
        zjzp:[],
        
},
      
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that=this
       that.setData({
         na:app.globalData.name,
         ph:app.globalData.headph,
       })
     var openid= app.globalData.op
      wx.request({
        url: 'http://116.62.214.111:8001/DynamicController/qureyUserDynamic',
        data:{
          user_id:openid,
          page:1,
          limit:50
        },
        success:function(res){
          console.log(res)
          that.setData({
            zjzp:res.data.data
          })
        }
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