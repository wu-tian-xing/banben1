var app = getApp()
// pages/zuopin/zuopin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      uesr:[],
      na:[],
      ph:[],
      
       

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {

      
    
      },



      getWxInfo:function(){
        var that=this;
         wx.getUserProfile({
           desc: '完善用户信息',
         
           success(res){
               console.log(res.userInfo)
               that.setData({
                 user:res.userInfo,
                //  na:res.userInfo.nickName,
                //  ph:res.userInfo.avatarUrl
               })
               
               app.globalData.name=res.userInfo.nickName
               app.globalData.headph=res.userInfo.avatarUrl

              that.get()
           }

         })
 
         wx.login({
           
           success(res){
          
             console.log("code:"+res.code)
             wx.request({
               url: 'https://api.weixin.qq.com/sns/jscode2session',
               data:{
                 appid:'wx88142ca519028d06',
                 secret:'6fbdde48105ca6b1d8502e89d5c802c0',
                 js_code:res.code,
                 grant_type:'authorization_code'
               },
               methed:"GET",
               success:function(res){
                 console.log("openid:"+ res.data.openid)
                 that.setData({
                   opid:res.data.openid
                 })

                 var op=that.data.opid
               app.globalData.op=op

               }
             })
           }
         })
     },
     get(){
       var na=app.globalData.name
       var head=app.globalData.headph
       var opid=app.globalData.op
      wx.request({
        url: 'http://116.62.214.111:8001/UserController/addUser',
        data:{
          u_id:opid,
          u_name:na,
          headphoto:head
        },
        success(){
          console.log("添加用户成")
        }
        


      })
     },


     
 

    loginOut(){
        this.setData({
            user:null
        })

    },



    gotozuopin:function()
    {   wx.navigateTo({
        url:'/pages/me/zuopin',
    })
  
    },
    gotohuodong:function()
    {   wx.navigateTo({
        url:'/pages/me/huodong',
    })
  
    },
    gotokefu:function()
    {   wx.navigateTo({
        url:'/pages/me/kefu',
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