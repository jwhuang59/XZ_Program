//index.js
const pic = require('../../config').pic
const all_article_url = require('../../config').all_article_url

Page({
  data: {
    pic:pic,
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

  onLoad: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
     var that = this

    //文章
    wx.request({
      url: all_article_url,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        that.setData({
          articles: res.data
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
