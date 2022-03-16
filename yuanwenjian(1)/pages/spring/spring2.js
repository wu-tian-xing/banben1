// pages/spring/spring2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        sgzz:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this
        wx.request({
          url: 'http://116.62.214.111:8001/FestivalActionController/selectFestivalAction',
          
          data:{
            festival_id:1,
            actions:'手工',
              page:1,
              limit:10
          },
          success:function(res){
              console.log(res.data)
              that.setData({
                  sgzz:res.data
              })
          },
          fail:(res)=>{
            console.log(res)
          }
        })
      

    },
    gotospring22:function()
    {   wx.navigateTo({
        url:'/pages/spring/spring22',
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

    },
    gotosgzzxq:function(e)
    {  
        let ID=e.currentTarget.dataset.id
        console.log(ID);
        wx.navigateTo({
        url:'/pages/spring/spring22?ID='+ID 
    })
  
    },
  


    
})
