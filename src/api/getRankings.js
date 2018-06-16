// 排行版

import { configParams } from './config'
import axios from 'axios'

export default function getRankings () {
  const url = '/getRankings'
  const data = Object.assign({}, configParams, {
    platform: 'h5',
    _: 1529138661465,
    g_tk: 879812850
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
