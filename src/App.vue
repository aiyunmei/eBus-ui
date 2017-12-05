<template>
  <div id="app">

    <router-view class="wrapper"></router-view>

  </div>
</template>

<script>
  import { alipayHideOptionMenu } from './utils/alipayJsApi'
  import { setTitle } from './utils/public'

  const { showUrl } = global.threeConfig.global

  export default {
    name: 'app',
    mounted () {
      sessionStorage.setItem('userId', '2088302427608644')
      this.onReady()
      this.routerChange()
    },
    methods: {
      onReady () {
        setTitle(this.$route.path.replace('/', ''))
        if (showUrl) alipayHideOptionMenu()
      },
      routerChange () {
        this.$router.beforeEach((to, from, next) => {
          setTitle(to.path.replace('/', ''))
          if (showUrl) alipayHideOptionMenu()
          next()
        })
      }
    }
  }
</script>

<style>
  .wrapper {
    width: 100%;
  }
</style>

