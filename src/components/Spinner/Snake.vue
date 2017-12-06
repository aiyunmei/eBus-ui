<template>
  <div class="snake" v-show="visible">

    <div class="snake-info">
      <div class="snake-info-main" :style="{ borderTopColor: borderColor, borderLeftColor: borderColor, borderBottomColor: borderColor }"></div>
      <div class="snake-info-val" v-if="val">{{ val }}</div>
    </div>

  </div>
</template>


<script>
  export default {
    props: {
      borderColor: {
        type: String
      },
      val: {
        type: String
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="css" scoped>
  .snake {
    width: 100%;
    position: fixed;
    z-index: 5000;
    background: transparent;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .snake .snake-info {
    position: fixed;
    z-index: 5001;
    left: 50%;
    top: 50%;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%,-50%);
    padding: 0.2rem;
  }
  .snake .snake-info .snake-info-main{
    animation: snake-rotate 0.8s infinite linear;
    border: 0.1rem solid transparent;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  @keyframes snake-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
