<template>

  <span class="tag" :class="[ `tag-${type}`, `tag-${size}` ]">
    {{ val }}
  </span>

</template>

<script>
  export default {
    props: {
      val: {
        type: String,
        required: true
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
