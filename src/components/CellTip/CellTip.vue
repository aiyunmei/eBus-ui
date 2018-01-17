<template>
  <transition name="fadeIn">
    <div class="cell-tip" :class="[`cell-tip-${type}`]">
      {{ content }}
      <i class="fa fa-caret-down cell-icon" aria-hidden="true"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      content: {
        type: [Number, String],
        default: ''
      },
      type: {
        type: String,
        default: 'normal'
      }
    }
  }
</script>

<style lang="css" scoped>
  .cell-tip{
    width: 100%;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
  }

  /* type */
  .cell-tip-normal{
    color: #fff;
    background: #108ee9;
  }

  /* 三角 */
  .cell-tip .cell-icon{
    font-size: 12px;
  }

  .cell-tip-normal .cell-icon{
    color: #108ee9;
    position: absolute;
    font-size: 12px;
    bottom: -7px;
    left: 4px;
  }

  /* 动画 */
  .fadeIn-enter-active, .fadeIn-leave-active{
    transition: opacity .3s;
  }
  .fadeIn-enter, .fadeIn-leave-active{
    opacity: 0;
  }
</style>
