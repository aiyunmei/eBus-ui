<template>
  <div class="card">
    <img :src="cardImage" class="card-img" :class="[ shadow ? 'shadow' : '' ]">
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
