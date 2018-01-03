<template>
  <div class="card">
    <img v-lazy="cardImage" class="card-img" :class="[ shadow ? 'shadow' : '' ]">
    <img v-lazy="tipsImage" v-if="tipsImage" class="tips" />
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
