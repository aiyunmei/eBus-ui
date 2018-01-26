<template>
  <div class="card">
    <img :src="cardImage" class="card-img clearfix" :class="[ shadow ? 'shadow' : '' ]">
    <img :src="tipsImage" v-if="tipsImage" class="tips" />
  </div>
</template>

<script>
  export default {
    props: {
      cardImage: {
        type: String,
        required: true
      },
      shadow: {
        type: Boolean,
        default: true
      },
      tipsImage: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
