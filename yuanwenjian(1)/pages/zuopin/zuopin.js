
Page({

    /**
     * 页面的初始数据
     */
    data: {
        zp:[],
        sty:0,
        score: '#96B8F3', 
      },
     
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this;

        wx.request({
          url: 'http://116.62.214.111:8001/ActionController/selectAction',
          data:{
           page:1,
           limit:10,
          },
          success:function(res){
            console.log(res.data)
            that.setData({
                zp:res.data.data
            })
        },
        fail:(res)=>{
            console.log(res)

        }

        })
        
        

    },
    
    


    gotome1:function()
    {   wx.navigateTo({
        url:'/pages/me1/me1',
    })
  
    },
    gotoxiangqing:function(e)
    
    {  
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
        url:'/pages/zuopin/xiangqing?xqID='+e.currentTarget.dataset.id,
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