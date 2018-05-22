//index.js

const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    circular: true,
    indicatorDots: true,
    indicatorcolor: "#000",
    autoplay: true,
    interval: 2500,
    duration: 1000,
    imgheights: [],
    imgwidth: 750,
    current: 0  
  }, 
  imageLoad: function (e) {
    var imgwidth = e.detail.width,
        imgheight = e.detail.height,
        ratio = imgwidth / imgheight;
    
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  }
})
