var app=getApp()
Page({



  data: {
    
    hdxq:{},
    opid:'',
    hdxqid:[],
    sty:0,
    score: '#96B8F3', 
  },


 score: function (e) {
   //点击按钮，样式改变
   
   let that = this;
   this.setData({
     sty: 1,
     score: '#94D79D'
   });
  // var opidd=app.globalData.op

   var hdxqid=e.currentTarget.dataset.id
   var opidd=app.globalData.op
  // console.log(opidd)
   wx.request({
     url: 'http://116.62.214.111:8001/ActionController/addUser_id',
     data:{
      u_id:opidd,
       a_id:hdxqid,
     },
     success:function(){
       console.log("参加成功")
     },
     fail:function(){
      console.log("添加失败")
     }
    

   })


  },

  score1: function (e) {
    //点击按钮，样式改变
    let that = this;
    that.setData({
      sty: 0,
      score: '#96B8F3'
    });

    var hdxqid=e.currentTarget.dataset.id
    var opidd=app.globalData.op
   // console.log(opidd)
    wx.request({
      url: 'http://116.62.214.111:8001/ActionController/outAction',
      data:{
        u_id:opidd,
        a_id:hdxqid,
      },
      success:function(){
        console.log("退出成功")
      },
      fail:function(){
       console.log("退出失败")
      }
     
 
    })

   },

   

   


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that=this
      var hdxqid=options.xqID
      console.log(hdxqid)
      
      wx.request({
        url: 'http://116.62.214.111:8001/ActionController/selectOneAction',
        data:{
          
          a_id:hdxqid,
          
        },
        success:function(res){
          console.log(res.data)
          that.setData({
              hdxq:res.data
          })
      },
      fail:(res)=>{
        console.log(res)
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
      this.setData({
        opid:app.globalData.i
      })

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