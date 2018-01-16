import request from 'axios'
import qs from 'qs'
import { netWorkError } from './helper'
import Spinner from '../components/Spinner/index'

const async_timestamp = new Date().getTime()
const { appId } = global.threeConfig.alipayCardInfo

class Axios {
  constructor() {
    // 公共参数
    request.defaults.params = {
      isStressTest: false
    }
    // 设置请求最大时间
    request.defaults.timeout = 30 * 1000
    // 返回的状态值
    request.defaults.validateStatus = status => {
      return status >= 200 && status < 300
    }
    // 赋予内部
    this.instance = request
  }

  apiGet (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.get(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, { params }).then(res => {
        Spinner.close()
        resolve(res.data)
      }).catch(error => {
        Spinner.close()
        netWorkError()
        reject(error)
      })
    })
  }

  apiPost (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.post(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, qs.stringify(params)).then(res => {
        Spinner.close()
        resolve(res.data)
      }).catch(error => {
        Spinner.close()
        netWorkError()
        reject(error)
      })
    })
  }
}

export default new Axios()


