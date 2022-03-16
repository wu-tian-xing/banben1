
const app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  currentInput:'',
    imgList: [], 
    IMG:""   ,      // 上传列表
    src: "",        // 上传视频
  },
  gotoTabbar:function()
{   wx.switchTab({
    url:'/pages/luntan/luntan',
})

},
  getInput:function(e)
  {   
      this.setData({
          currentInput:e.detail.value
      })
      var qwe=this.data.currentInput
      console.log(qwe)
  },


  // 点击添加选择
  chooseSource: function () {
    var _this = this;
    wx.showActionSheet({
      itemList: ["拍照", "从相册中选择"],
      itemColor: "#000000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.imgWShow("camera")        //拍照
          } else if (res.tapIndex == 1) {
            _this.imgWShow("album")      //相册
          }
        }
      }
    })
  },
  // 点击调用手机相册/拍照
  imgWShow: function (type) {
    var _this = this;
    let len = 0;
    if (_this.data.imgList != null) {
      len = _this.data.imgList.length
    }   //获取当前已有的图片
    wx.chooseImage({
      count: 6 - len,     //最多还能上传的图片数,这里最多可以上传5张
      sizeType: ['original', 'compressed'],        //可以指定是原图还是压缩图,默认二者都有
      sourceType: [type],             //可以指定来源是相册还是相机, 默认二者都有
      success: function (res) {
        wx.showToast({
          title: '正在上传...',
          icon: "loading",
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表,tempFilePaths可以作为img标签的scr属性显示图片
        var imgList = res.tempFilePaths
        let tempFilePathsImg = _this.data.imgList
    
        // 获取当前已上传的图片的数组
        var tempFilePathsImgs = tempFilePathsImg.concat(imgList)
        console.log(tempFilePathsImgs)
        _this.setData({
          imgList : tempFilePathsImgs,
         // IMG : tempFilePathsImgs
        })
        var im=_this.data.imgList
        console.log(im)
      },
      fail: function () {
        wx.showToast({
          title: '图片上传失败',
          icon: 'none'
        })
        return;
      }
    })
  },
  // 预览图片
  previewImg: function (e) {
    let index = e.target.dataset.index;
    let _this = this;
    wx.previewImage({
      current: _this.data.imgList[index],
      urls: _this.data.imgList
    })
  },
  /**
   * 点击删除图片
   */
  deleteImg: function (e) {
    var _this = this;
    var imgList = _this.data.imgList;
    var index = e.currentTarget.dataset.index;      //获取当前点击图片下标
    wx.showModal({
      title: '提示',
      content: '确认要删除该图片吗?',
      success: function (res) {
        if (res.confirm) {
          console.log("点击确定了")
          imgList.splice(index, 1);
        } else if (res.cancel) {
          console.log("点击取消了");
          return false
        }
        _this.setData({
          imgList,
        })
      }
    })
  },

  gotoTabbar: function() {
    var that=this
    var iid = app.globalData.op
    console.log(iid)
    var nr=that.data.currentInput
    var im = that.data.imgList
    console.log(im)
    wx.request({
      url: 'http://116.62.214.111:8001/DynamicController/addDynamic',
      data:{
     
         details:nr,
          picture:im,
          user_id:iid,
        // // num_review:0,
        //  d_id:34
      },
      method:'GET',
      success: function() {
        console.log('添加成功')
        wx.showToast({
          icon: 'none',//提示图标
          title:'添加成功',
          duration: 2000//提示的时间毫秒
        })
  
          var pages = getCurrentPages();   //获取小程序页面栈
          var beforePage = pages[pages.length -2];  //获取上个页面的实例对象
          beforePage.setData({      //直接修改上个页面的数据（可通过这种方式直接传递参数）
            txt:'修改数据了'
          })
          beforePage.go_update();   //触发上个页面自定义的go_update方法
          wx.navigateBack({         //返回上一页  
            delta:1
          })
 
      
      },
      fail: function() {
        console.log('接口调用失败')
      }
    })
  },
  

   




})

