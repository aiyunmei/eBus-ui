<template>
  <button
    class="button"
    @click="bindClick" :class="[ `button-${type}`, `button-${size}`, hollow ? `button-${type}-hollow` : '' ]">
    {{ btnVal }}
  </button>
</template>

<script>
  export default {
    props: {
      btnVal: {
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
      },
      hollow: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      bindClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
