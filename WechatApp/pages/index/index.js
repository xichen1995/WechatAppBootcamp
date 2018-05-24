//index.js

const app = getApp()

Page({
  data: {
    //swiper
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    circular: true,
    indicatorDots: true,
    indicatorcolor: "#000",
    autoplay: true,
    interval: 2500,
    duration: 1000
  },

  redirect_school: function(e){
    wx.navigateTo({
      url: '../category/school/school',
    })
  },

  redirect_electronic: function (e) {
    wx.navigateTo({
      url: '../category/electronic/electronic',
    })
  },

  redirect_furniture: function (e) {
    wx.navigateTo({
      url: '../category/furniture/furniture',
    })
  },

  redirect_car: function (e) {
    wx.navigateTo({
      url: '../category/car/car',
    })
  },

  redirect_game: function (e) {
    wx.navigateTo({
      url: '../category/game/game',
    })
  }
})
