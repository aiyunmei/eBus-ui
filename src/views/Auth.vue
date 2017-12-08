<template>
  <div>
  </div>
</template>

<script>
  import { jsLink } from '../utils/public'
  import { alipayExitApp } from '../utils/alipayJsApi'
  import { getUser } from '../utils/http'

  const { alipayAuthBaseUrl } = global.threeConfig.api
  const { appId, scope } = global.threeConfig.alipayCardInfo

  export default {
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        const { auth_code, redirectUrl, insPassBack } = this.$route.query

        // 有app跳转参数保存
        if (insPassBack) localStorage.setItem('insPassBack', insPassBack)

        if (auth_code === undefined) this.noAuthCode(redirectUrl)
        else this.inAuthCode(auth_code, redirectUrl)
      },
      noAuthCode () {
        // 进入支付宝授权获取auth_code
        jsLink('replace', `${alipayAuthBaseUrl}?app_id=${appId}&scope=${scope}&redirect_uri=${encodeURIComponent(window.location.href)}`)
      },
      inAuthCode (auth_code, redirectUrl) {
        if (sessionStorage.getItem('isClose') === 'yes') alipayExitApp()  // 解决用户无限返回bug
        getUser({
          auth_code: auth_code,
          cb: data => {
            sessionStorage.setItem('userId', data.userId || '')

            if (redirectUrl === 'buscode') this.$router.replace('/cardDetail?buscode=true')
            else this.$router.replace(`/${redirectUrl}`)
          }
        })
      }
    }
  }
</script>
