import axios from 'axios'
import qs from 'qs'
import { checkNull, enCodeString } from './public'
import { netWorkError } from './helper'
import Spinner from '../components/Spinner/index'

const async_timestamp = new Date().getTime()
const { appId } = global.threeConfig.alipayCardInfo

/*
* @apiGet 公共get请求
* @apiPost 公共post请求
* @apiFile 公共上传
* @url 必填
* @params 传递参数 必填
* @isEncode 是否进行编码 选填 不填则为false 不进行字符串编码
* @axios 基本配置不用可行注释
* @timeout 默认20秒超时
* @baseUrl 请求的公共url
* @params 需要传递的公共参数
* @validateStatus 返回的http 状态码用于做错误判断
* */
class Axios {
  constructor() {
    this.instance = axios.create({
      timeout: 20 * 1000,
      params: {
        isStressTest: false
      },
      validateStatus: (status) => {
        return status
      }
    })
  }

  apiGet (url, params, isEncode) {
    return new Promise((resolve, reject) => {
      checkNull(isEncode) === 0 ? isEncode = false : isEncode
      Spinner.open()
      this.instance.get(`${url}?async_timestamp=${async_timestamp}&app_id=${appId}`, { params: isEncode === false ? params : enCodeString(params) }).then(res => {
        Spinner.close()
        resolve(res.data)
      }).catch(err => {
        Spinner.close()
        reject(err)
        netWorkError()
      })
    })
  }

  apiPost (url, params, isEncode) {
    return new Promise((resolve, reject) => {
      checkNull(isEncode) === 0 ? isEncode = false : isEncode
      Spinner.open()
      this.instance.post(`${url}?async_timestamp=${async_timestamp}&app_id=${appId}`, qs.stringify(isEncode === false ? params : enCodeString(params))).then(res => {
        Spinner.close()
        resolve(res.data)
      }).catch(err => {
        Spinner.close()
        reject(err)
        netWorkError()
      })
    })
  }
}

export default new Axios()


