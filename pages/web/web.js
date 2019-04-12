// pages/web/web.js
var app = getApp(),
  $ = app.requirejs("core"),
  s = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pageObj = this;
    wx.login({
      success: function (res) {
        console.log(res);
        var data = { code: res.code };
        console.log(data);
        wx.request({
          url: 'https://sales.epai.biz/wap/wx_app.php',
          data : data,
          // method : "POST",
          header : {'content-type': 'application/json'},
          success : function(res){
            console.log(res);
            console.log(res.data.openid);
            pageObj.setData({
              openid : res.data.openid
            })
          },
          fail : function(res){
            console.log(res);
          }
        })
        
        // console.log(data);
        // $.post('wx_app.php', data, function (res) {
        //   console.log(res);
        //   // $.alert(res);
        //   // pageObj.setData({
        //   //   openid: res.msg.openid
        //   // })
        // });
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