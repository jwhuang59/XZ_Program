// pages/article/list.js
const pic = require('../../config').pic
const article_list_url = require('../../config').article_list_url

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pic: pic,
    articles: [],

  },
  left_nav_btn: function (event) {
    this.setData({
      'head_data.left_nav_show': "show"
    })
  },
  left_nav_mask_btn: function (event) {
    this.setData({
      'head_data.left_nav_show': "hidden"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var that = this
    
    //文章
    wx.request({
      url: article_list_url,
      data: {
        type: options.type,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        that.setData({
          articles: res.data,
          is_type:options.type
        });
        
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