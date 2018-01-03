<template>
  <div class="notice-bar" v-show="visible">

    <div class="icon left">
      <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/notice_laba.png" />
    </div>

    <div class="info">
      <div class="info-main" :style="{ width: width ? width : '100%' }">{{ content }}</div>
    </div>

    <div class="icon right" @click="bindClose">
      <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/notice_close.png" />
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String
      },
      width: {
        type: String
      }
    },
    data () {
      return {
        visible: true
      }
    },
    methods: {
      bindClose () {
        this.visible = false
        this.$emit('handleClose')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
