<template>

  <span class="tag" :class="[ `tag-${type}`, `tag-${size}` ]" v-if="val ? true : false">
    {{ val }}
  </span>

</template>

<script>
  export default {
    props: {
      val: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
