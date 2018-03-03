import Vue from 'vue'
import TemplateMessageBox from './MessageBox.vue'

const constructorMessageBox = Vue.extend(TemplateMessageBox)

let instance

if (!instance) { // 插入组件默认创建一个
  instance = new constructorMessageBox({
    el: document.createElement('div'),
  })
  document.body.appendChild(instance.$el)
}

const MessageBox = (options) => {
  Vue.nextTick(() => {
    if (options.type !== undefined) instance.type = options.type
    if (options.okVal !== undefined) instance.okVal = options.okVal
    if (options.cancelVal !== undefined) instance.cancelVal = options.cancelVal

    instance.visible = true
    instance.top = options.top !== undefined ? options.top : '25%'
    instance.imgUrl = options.imgUrl !== undefined ? options.imgUrl : ''
    instance.content = options.content !== undefined ? options.content : ''

    if (options.callback !== undefined) {
      instance.btnBindClick = (action) => {
        options.callback(action)
        instance.title = '提示'
        instance.okVal = '确认'
        instance.cancelVal = '取消'
        instance.visible = false
      }
    }
  })
}

export default MessageBox
