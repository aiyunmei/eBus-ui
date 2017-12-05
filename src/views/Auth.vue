<template>
  <div>
  </div>
</template>

<script>
  import { jsLink } from '../utils/public'
  import { alipayExitApp } from '../utils/alipayJsApi'
  import { getUser } from '../utils/http'

  const { alipayAuthBaseUrl } = global.threeConfig.api
  const { appId, sign, scope } = global.threeConfig.alipayCardInfo

  export default {
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        const { auth_code, redirectUrl } = this.$route.query

        if (auth_code === undefined) this.noAuthCode()
        else this.inAuthCode(auth_code, redirectUrl)
      },
      noAuthCode () {
        // 进入支付宝授权获取auth_code
        jsLink('replace', `${alipayAuthBaseUrl}?app_id=${appId}&scope=${scope}&redirect_url=${encodeURIComponent(window.location.href)}`)
      },
      inAuthCode (auth_code, redirectUrl) {
        if (sessionStorage.getItem('isClose') === 'yes') alipayExitApp()  // 解决用户无限返回bug
        getUser({
          params: { appId: appId, sign: sign, auth_code: auth_code },
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
