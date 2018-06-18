import jsonp from 'js/jsonp'
import { configParams, options } from './config'

export default function getSliderList () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, configParams, {
    platform: 'h5',
    _: 1528994466401
  })
  return jsonp(url, data, options)
}
