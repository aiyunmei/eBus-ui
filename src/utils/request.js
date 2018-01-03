import axios from 'axios'
import qs from 'qs'
import { netWorkError } from './helper'
import Spinner from '../components/Spinner/index'

const async_timestamp = new Date().getTime()
const { appId } = global.threeConfig.alipayCardInfo

class Axios {
  constructor() {
    // 公共参数
    axios.defaults.params = {
      isStressTest: false
    }
    // 请求前
    axios.interceptors.request.use((config) => {
      Spinner.open()
      return config
    }, (error) => { // 请求出错
      Spinner.close()
      netWorkError()
      return Promise.reject(error)
    })
    // 请求响应
    axios.defaults.transformResponse = [data => {
      Spinner.close()
      if (typeof data === 'string') try { data = JSON.parse(data) } catch (e) { throw e }
      return data
    }]
    // 赋予内部
    this.instance = axios
  }

  apiGet (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.get(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, { params: params }).then(res => {
        resolve(res.data)
      })
    })
  }

  apiPost (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.post(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, qs.stringify(params)).then(res => {
        resolve(res.data)
      })
    })
  }
}

export default new Axios()


