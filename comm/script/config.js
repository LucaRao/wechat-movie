/*
备注
city: 城市（在程序载入时获取一次）
count: 返回结果数量
hotKeyword: 搜索页热门关键词关键词
hotTag: 搜索页热门类型
bannerList: 首页（热映页）轮播图列表列表
*/
// 静态资源地址
var staticUrl = 'https://static.sesine.com/wechat-weapp-movie'
// api地址
var apiUrl = 'https://sesine.com/mina/api'
module.exports = {
    city: '武汉',
    count: 20,
    hotKeyword: ['坠落的审判', '美国小说', '破墓', '周处除三害', '奇迹俱乐部', '留校联盟', '可怜的东西', '奇美拉', '法式火锅', '首尔之春', '新威龙杀阵'],
    hotTag: ['动作', '喜剧', '爱情', '悬疑','恐怖','剧情','奇幻','冒险','战争'],
    bannerList: [
        {type:'film', id: '35633650', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/16pic_4610785_b.jpg'},
        {type:'film', id: '35611467', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/b33338ccb83c3ca921a5c9d34773213.jpg'},
        {type:'film', id: '35902857', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/i-bn20180725-1-06.jpg'},
        {type:'film', id: '35490167', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/i-bn20180725-1-10.jpg?t=2024-04-08T08%3A24%3A24.864Z'},
        {type:'film', id: '35074609', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/i-bn20180725-1-10.jpg?t=2024-04-08T08%3A24%3A24.864Z'}
    ],
    skinList: [
        {title: '公路', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E5%85%AC%E8%B7%AF.jpg?t=2024-04-03T06%3A26%3A21.743Z'},
        {title: '黑夜森林', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E9%BB%91%E5%A4%9C%E6%A3%AE%E6%9E%97.jpg?t=2024-04-03T06%3A26%3A33.829Z'},
        {title: '鱼与水', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E9%B1%BC%E4%B8%8E%E6%B0%B4.jpg?t=2024-04-03T06%3A27%3A22.473Z'},
        {title: '火山', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E7%81%AB%E5%B1%B1.jpg?t=2024-04-03T06%3A27%3A36.439Z'},
        {title: '科技', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E7%A7%91%E6%8A%80.jpg?t=2024-04-03T06%3A27%3A43.988Z'},
        {title: '沙漠', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E6%B2%99%E6%BC%A0.jpg?t=2024-04-03T06%3A27%3A49.971Z'},
        {title: '叶子', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E5%8F%B6%E5%AD%90.jpg?t=2024-04-03T06%3A27%3A54.922Z'},
        {title: '早餐', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E6%97%A9%E9%A4%90.jpg?t=2024-04-03T06%3A28%3A05.354Z'},
        {title: '英伦骑车', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E8%8B%B1%E4%BC%A6%E9%AA%91%E8%BD%A6.jpg?t=2024-04-03T06%3A28%3A09.803Z'},
        {title: '草原', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E8%8D%89%E5%8E%9F.jpg?t=2024-04-03T06%3A28%3A14.467Z'},
        {title: '城市', imgUrl: 'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/avatar/%E5%9F%8E%E5%B8%82.jpg?t=2024-04-03T06%3A28%3A20.592Z'}
    ],
}
