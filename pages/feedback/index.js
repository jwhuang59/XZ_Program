// pages/feedback/index.js

const feedback_list_url = require('../../config').feedback_list_url;
const feedback_add_url = require('../../config').feedback_add_url;
const head_pic_url = require('../../config').head_pic_url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbacks:[],
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
  formSubmit: function (e) {
    var that = this
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    if (e.detail.value.content == null || e.detail.value.content == ""){
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '内容不能为空！',
        success: function (res) {
        }
      })
      return false;
    }

    wx.request({
      url: feedback_add_url, //仅为示例，并非真实的接口地址
      data: {
        head_pic: head_pic_url,
        nickname:'游客登录',
        content: e.detail.value.content
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
                       
        wx.redirectTo({
          url: '/pages/feedback/index'
        })
        
      }
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
   
    //留言列表
    wx.request({
      url: feedback_list_url,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        function sort(a, b) {
          return b.mid - a.mid;
        }
        res.data.sort(sort);
        that.setData({
          feedbacks: res.data
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