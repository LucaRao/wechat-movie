var util = require('../../util/util')
import {
  supabase
} from '../../lib/supabase'
var app = getApp();
Page({
  data:{
    name: '',
    username: '',
    gender: 0,
    genderArray: ['男', '女'],
    genderIndex: 0,
    age: 0,
    birthday: '',
    constellation: '',
    constellationArray: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    constellationIndex: 0,
    company: '',
    school: '',
    tel: '',
    email:'',
    introduction: '',
    birthdayEndDate: ''
  },
  onLoad:function(options){
    var birthdayEndDate = util.getDate()
    var that = this
    wx.getStorage({
      key: 'person_info',
      success: function(res){
        var data = res.data
        that.setData({
          name: data.name,
          username: data.username,
          gender: data.gender,
          age: data.age,
          birthday: data.birthday,
          constellation: data.constellation,
          company: data.company,
          school: data.school,
          tel: data.tel,
          email: data.email,
          introduction: data.introduction,
          birthdayEndDate: birthdayEndDate
        })
      }
    })
  },
  savePersonInfo: async function(e) {
    var data = e.detail.value
    console.log(data);
    const { data:{user}, error } = await supabase.auth.updateUser({
        name: data.name,
        username: data.username,
        gender: data.gender,
        age: data.age,
        birthday: data.birthday,
        constellation: data.constellation,
        company: data.company,
        school: data.school,
        tel: data.tel,
        email:data.email,
        introduction: data.introduction})
        if (error) {
          wx.showToast({
            title: error.message || error.error_description,
            duration: 1500,
            icon:'none'
          });
        } else {
          app.globalData.userInfo.user_metadata.username = data.username
          wx.setStorage({
            key: 'person_info',
            data: {
              name: data.name,
              username: data.username,
              gender: data.gender,
              age: data.age,
              birthday: data.birthday,
              constellation: data.constellation,
              company: data.company,
              school: data.school,
              tel: data.tel,
              email:data.email,
              introduction: data.introduction
            },
            
            success: function(res){
              wx.showToast({
                title: '资料修改成功',
                icon: 'success',
                duration: 2000
              })
              setTimeout(function(){
                wx.navigateTo({
                  url: '../personInfo/personInfo'
                })
              },2000)
            }
          })
        }
 
  },
  changeGender: function(e) {
    console.log(e)
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
      this.setData({
        genderIndex: genderIndex,
        gender: this.data.genderArray[this.data.genderIndex]
      })
    }
  },
  changeBirthday: function(e) {
    var birthday = e.detail.value
    if (birthday != "null") {
      this.setData(
        {birthday: birthday}
      )
    }
  },
  changeConstellation: function(e) {
    var constellationIndex = e.detail.value
    if (constellationIndex != "null") {
      this.setData({
        constellationIndex: constellationIndex,
        constellation: this.data.constellationArray[this.data.constellationIndex]
      })
    }
  }
})