var config = require('../../comm/script/config')
Page({
  data:{
    latitude: '',
    longitude: '',
    markers: [{
      latitude: 0,
      longitude: 0,
      name: '我的位置',  
      desc: ''
    }],
    covers: [{
      latitude: 0,
      longitude: 0,
      iconPath: '../../dist/images/green_tri.png',
    }, {
      latitude: 0,
      longitude: 0,
      iconPath: '../../dist/images/green_tri.png',
      rotate: 180
    }],
    formatted_address: '',
    loading: false
  },
  onLoad:function(options){
  },
  
  refreshLocation: function(){
  }
})