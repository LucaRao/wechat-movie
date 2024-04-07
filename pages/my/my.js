var config = require('../../comm/script/config')
var app = getApp();
import { DownloadImage } from '../../util/commonApi'
import {
  supabase
} from '../../lib/supabase'
Page({
  data:{
    gridList: [
      {enName:'favorite', zhName:'收藏'},
      {enName:'history', zhName:'浏览记录'},
      {enName:'setting', zhName:'设置'}
    ],
    skin: ''
  },
  onLoad:function(cb){
    var that = this
    console.log(app.globalData.userInfo)
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
          userInfo: app.globalData.userInfo
      })
    } else {
      app.getUserInfo()
    }
    typeof cb == 'function' && cb()
  },
  onShow:function(){
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function(res){
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function() {
    this.onLoad(function(){
      wx.stopPullDownRefresh()
    })
  },
   // 更新头像
   async onChooseAvatar(e) {
    let { avatarUrl } = e.detail;
    let that = this;
    wx.getImageInfo({
      src: avatarUrl, // 图片路径，必须是本地路径，可以相对路径或绝对路径
      success: async function (res) {
        const file = { fileType: "image", width: res.width, height: res.height, tempFilePath: avatarUrl }
        const fileExt = avatarUrl.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`
        app.globalData.userInfo.user_metadata.avatar = await DownloadImage(filePath)
        let { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, file)
        if (uploadError) {
          throw uploadError
        }
        const { data, error } = await supabase.auth.updateUser({
          data: { avatar: app.globalData.userInfo.user_metadata.avatar }
        })
        if (error) {
          wx.showToast({
            title: error.message || error.error_description,
            duration: 1500,
            icon:'none'
          });
        } else {
          wx.showToast({
            title: '修改成功',
            duration: 1500
          });
        }
      }
    })
  },
  viewGridDetail: function(e) {
    var data = e.currentTarget.dataset
		wx.navigateTo({
			url: "../" + data.url + '/' + data.url
		})
  },
  viewSkin: function() {
		wx.navigateTo({
			url: "../skin/skin"
		})
  }
})