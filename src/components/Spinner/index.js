import Vue from 'vue'
import SpinnerTemplate from './Snake.vue'

const constructorSpinner = Vue.extend(SpinnerTemplate)

let instance

const Spinner = (options) => {
  if (!instance) {
    instance = new constructorSpinner({
      el: document.createElement('div'),
    })
    document.body.appendChild(instance.$el)
  }
  // 写入配置
  Vue.nextTick(() => {
    instance.visible = !instance.visible
    instance.borderColor = options ? options.borderColor : '#ccc'
    instance.val = options ? options.val : ''
  })

  return instance
}

export default Spinner
