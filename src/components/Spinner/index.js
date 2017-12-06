import Vue from 'vue'
import SpinnerTemplate from './Snake.vue'

const constructorSpinner = Vue.extend(SpinnerTemplate)

let instance

const defaultOptions = {
  borderColor: '#ccc',
  val: ''
}

export default {
  open (options) {
    if (!instance) {
      instance = new constructorSpinner({
        el: document.createElement('div'),
      })
      document.body.appendChild(instance.$el)
    }
    typeof options === 'undefined' ? options = defaultOptions : options
    // 写入配置
    Vue.nextTick(() => {
      instance.visible = !instance.visible
      instance.borderColor = options.borderColor
      instance.val = options.val
    })
  },
  close () {
    if (instance) {
      instance.visible = false
    }
  }
}
