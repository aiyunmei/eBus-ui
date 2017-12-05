/*
* 公共返回通知
* */
import { showToast } from './public'

export function codeError () {
  showToast('系统异常,请重新试试')
}

export function netWorkError () {
  showToast('网路异常')
}
