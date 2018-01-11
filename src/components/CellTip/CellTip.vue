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
    height: 100%;
    position: relative;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }

  /* type */
  .cell-tip-normal{
    color: #fff;
    background: #108ee9;
    padding: 0.2rem 0.6rem
  }

  /* 三角 */
  .cell-tip .cell-icon{
    font-size: 0.56rem;
  }

  .cell-tip-normal .cell-icon{
    color: #108ee9;
    position: absolute;
    bottom: -0.3rem;
    left: 0.36rem;
    font-size: 0.46rem;
  }

  /* 动画 */
  .fadeIn-enter-active, .fadeIn-leave-active{
    transition: opacity .3s;
  }
  .fadeIn-enter, .fadeIn-leave-active{
    opacity: 0;
  }
</style>
