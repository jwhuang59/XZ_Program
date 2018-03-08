// pages/article/show.js
var WxParse = require('../../wxParse/wxParse.js')
const article_detail_url = require('../../config').article_detail_url
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })   
    var that = this;
    that.id = options.id;
    that.requestInfo(that.id);
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    
  },
  requestInfo:function(id){
      var that=this;
      wx.request({
        url: article_detail_url,
        data: {
          id: id
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            detail: res.data           
          });
          var article = res.data.text;
          WxParse.wxParse('article', 'html', article, that, 5);
        }
      })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
    wx.showShareMenu({
      withShareTicket: true
    })
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