//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 发送异步请求获取轮播图数据 */
	wx.request({
		url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
		success:(result)=>{
			this.setData({
				swiperList:result.data.message
			})
		}
	})
  }
  
})