// 推荐列表

import { configParams } from './config'
import axios from 'axios'
// import jsonp from 'js/jsonp'

export default function getRecommendList () {
  const url = '/getRecommendList'
  const data = Object.assign({}, configParams, {
    picmid: 1,
    g_tk: 959197015,
    rnd: Math.random(),
    hostUin: 0,
    platform: 'yqq',
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    jsonpCallback: 'getPlaylist'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
