var config = require('./config.js')
var message = require('../../component/message/message')
import {
  supabase
} from '../../lib/supabase'
// 获取电影列表
async function fetchFilms( type,start, count, cb, fail_cb) {
  var that = this
  message.hide.call(that)
  if (that.data.hasMore) {

    try {

      let {
        data: popularMovies,
        error
      } = await supabase
        .from('moviesList')
        .select('*').eq('type',type).range(start, start+10)
        .limit(10);
      if (popularMovies.length > 0) {
        popularMovies.forEach(item =>{
          item.directors = JSON.parse(item.directors);
          item.casts = JSON.parse(item.casts);
          item.genres = JSON.parse(item.genres);
        })
        that.setData({
          films: that.data.films.concat(popularMovies),
          start: that.data.start + popularMovies.length,
          showLoading: false
        })
      } else if (popularMovies.length === 0) {
        that.setData({
          hasMore: false,
        })
      }
    } catch (error) {
      that.setData({
        showLoading: false
      })
      message.show.call(that, {
        content: '网络开小差了',
        icon: 'offline',
        duration: 3000
      })
      wx.stopPullDownRefresh()
      typeof fail_cb == 'function' && fail_cb()
    }

  }
}

// 获取电影详情
async function fetchFilmDetail(id, cb) {
  var that = this;
  message.hide.call(that);
  try {
    let { data: moviesList, error } = await supabase
      .from('moviesList')
      .select("*").eq('id', id);
    if (moviesList) {
      moviesList.forEach(item =>{
        item.directors = JSON.parse(item.directors);
        item.casts = JSON.parse(item.casts);
        item.genres = JSON.parse(item.genres);
      })
      that.setData({
        filmDetail: moviesList[0],
        showLoading: false,
        showContent: true
      })
      wx.setNavigationBarTitle({
        title: moviesList[0].name
      })
      wx.stopPullDownRefresh()
      typeof cb == 'function' && cb(moviesList[0])
    }
  } catch (error) {
    that.setData({
      showLoading: false
    })
    message.show.call(that, {
      content: '网络开小差了',
      icon: 'offline',
      duration: 3000
    })
  }
}

// 获取人物详情
async function fetchPersonDetail(id, cb) {
  var that = this;
  message.hide.call(that)
try {
  let { data: movie_person_detail, error } = await supabase
  .from('movie_person_detail')
  .select('*').eq("id",id)

  if(movie_person_detail){
    movie_person_detail.forEach(item =>{
      item.works = JSON.parse(item.works)
    })
  }
  console.log(movie_person_detail,'movie_person_detail')
  that.setData({
    personDetail: movie_person_detail[0],
    showLoading: false,
    showContent: true
  })
  wx.setNavigationBarTitle({
    title: movie_person_detail[0].name
  })
  wx.stopPullDownRefresh()
  typeof cb == 'function' && cb(movie_person_detail[0])
} catch (error) {
  that.setData({
    showLoading: false
  })
  message.show.call(that, {
    content: '网络开小差了',
    icon: 'offline',
    duration: 3000
  })
}
}

// 搜索（关键词或者类型）
async function search(url, type,keyword, start, count, cb) {
  var that = this
  message.hide.call(that)
  var url = decodeURIComponent(url)
  if (that.data.hasMore) {
    try {
      if(type === 'tag'){
        var {
          data: popularMovies,
          error
        } = await supabase
          .from('moviesList')
          .select('*').ilike('genres', `%${keyword ? keyword :''}%`).range(start, start+10)
          .limit(10);
      }else if(type === 'keyword'){
        var {
          data: popularMovies,
          error
        } = await supabase
          .from('moviesList')
          .select('*').filter('name', 'ilike', `%${keyword ? keyword : ''}%`).range(start, start+10)
          .limit(10);
      }
      
      if (popularMovies.length > 0) {
        popularMovies.forEach(item =>{
          item.directors = JSON.parse(item.directors);
          item.casts = JSON.parse(item.casts);
          item.genres = JSON.parse(item.genres);
        })
        that.setData({
          films: that.data.films.concat(popularMovies),
          start: that.data.start + popularMovies.length,
          showLoading: false
        })
        wx.setNavigationBarTitle({
          title: keyword
        })
        wx.stopPullDownRefresh()
        typeof cb == 'function' && cb(res.data)
      } else if (popularMovies.length === 0) {
        that.setData({
          hasMore: false,
          showLoading: false
        })
      }
    } catch (error) {
      that.setData({
        showLoading: false
      })
      message.show.call(that, {
        content: '网络开小差了',
        icon: 'offline',
        duration: 3000
      })
      wx.stopPullDownRefresh()
      typeof fail_cb == 'function' && fail_cb()
    }
  }
}
module.exports = {
  fetchFilms: fetchFilms,
  fetchFilmDetail: fetchFilmDetail,
  fetchPersonDetail: fetchPersonDetail,
  search: search
}
 