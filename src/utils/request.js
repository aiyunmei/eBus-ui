import request from 'axios'
import qs from 'qs'
import { netWorkError } from './helper'
import Spinner from '../components/Spinner/index'
import io from 'socket.io-client'

const async_timestamp = new Date().getTime()
const { appId } = global.threeConfig.alipayCardInfo


class Axios {
  constructor() {
    this.logId = new Date().getTime() + '用户'
    this.isLogin = false
    this.socket = null
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
    request.interceptors.request.eject(request.interceptors.request.use())
    // 赋予内部
    this.instance = request
  }

  initLog() {
    if (!this.isLogin) {
      this.socket = io.connect('http://www.i-xiaoma.com.cn:8091')
      this.socket.emit('join', { logId: this.logId })
      this.isLogin = true
    }
  }

  setLogInfo(msg) {
    this.socket.emit('msg', msg)
  }

  apiGet (url, params) {
    this.initLog()
    return new Promise((resolve, reject) => {
      this.instance.get(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, { params }).then(res => {
        Spinner.close()
        resolve(res.data)

        this.setLogInfo(res)
      }).catch(error => {
        Spinner.close()
        netWorkError()
        reject(error)

        this.setLogInfo({ url, params, error })
      })
    })
  }

  apiPost (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.post(`${url}?async_timestamp=${async_timestamp}&APPID=${appId}`, qs.stringify(params)).then(res => {
        Spinner.close()
        resolve(res.data)

        this.setLogInfo(res)
      }).catch(error => {
        Spinner.close()
        netWorkError()
        reject(error)

        this.setLogInfo({ url, params, error })
      })
    })
  }
}

export default new Axios()


