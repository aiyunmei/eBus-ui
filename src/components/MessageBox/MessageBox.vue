<template>
  <div class="z-message-box-info" ref="zMessageBox">

    <div class="z-message-hide" v-show="visible"></div>

    <transition name="z-message-box">
      <div class="z-message-box" v-show="visible" :style="{ top: top }">
        <img class="z-message-box-body-img" :src="imgUrl" v-if="imgUrl === '' ? false: true" />
        <div class="z-message-box-header">
          {{ title }}
        </div>
        <div class="z-message-box-body">
          <div class="z-message-box-body-content" v-html="content" v-if="content === '' ? false : true"></div>
        </div>
        <div class="z-message-box-footer">
          <i class="z-message-box-btn-line"></i>
          <button class="z-message-box-footer-btn" @click="btnBindClick('cancel')" v-if="type === 'alert' ? false : true">{{ cancelVal }}</button><button class="z-message-box-footer-btn" @click="btnBindClick('ok')" :class="type === 'alert' ? 'z-message-box-footer-alert-btn' : 'z-message-box-right-btn'">{{ okVal }}</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'z-message-box',
    props: {
      type: {
        type: String,
        require: true
      },
      top: {
        type: String,
        default: '25%'
      },
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: String,
        default: ''
      },
      imgUrl: {
        type: String,
        default: ''
      },
      okVal: {
        type: String,
        default: '确认'
      },
      cancelVal: {
        type: String,
        default: '取消'
      }
    },
    data () {
      return {
        visible: false,
        action: null
      }
    },
    methods: {
      btnBindClick (action) {
        this.visible = false
      }
    }
  }
</script>

<style lang="css" scoped>
  .z-message-box-enter {
    opacity: 0;
    transform: scale(0.7);
  }
  .z-message-box-leave-active {
    opacity: 0;
    transform: scale(0.9);
  }
  .z-message-hide{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2001;
  }
  .z-message-box{
    width: 80%;
    position: fixed;
    left: 50%;
    margin-left: -40%;
    background: #fff;
    z-index: 2005;
    transition: .3s;
    box-sizing: border-box;
    border-radius: 0.2rem;
    padding-top: 0.3rem;
  }
  .z-message-box .z-message-box-body-img{
    width: 80%;
    display: block;
    margin: 0 auto;
  }
  .z-message-box-header{
    width: 100%;
    text-align: center;
    font-size: 0.66rem;
  }
  .z-message-box-body{
    width: 100%;
    margin: 0 auto;
    padding: 0.1rem 0;
  }
  .z-message-box-body .z-message-box-body-content{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0.56rem;
    color: #aaa;
  }

  .z-message-box-footer{
    width: 100%;
    height: 1.6rem;
    border-top: 1px solid rgba(96, 96, 96, 0.3);
  }
  .z-message-box-footer .z-message-box-footer-btn{
    width: 50%;
    background: transparent;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 0.66rem;
    height: 100%;
  }
  .z-message-box-footer .z-message-box-right-btn{
    color: #409EFF;
  }
  .z-message-box-footer .z-message-box-footer-alert-btn{
    outline: none;
    background: transparent;
    border: 0;
    box-sizing: border-box;
    color: #409EFF;
  }

  .z-message-box-footer .z-message-box-btn-line{
    position: absolute;
    display: block;
    width: 1px;
    height: 1.6rem;
    background: rgba(96, 96, 96, 0.3);
    bottom: 0;
    left: 50%;
  }
</style>
