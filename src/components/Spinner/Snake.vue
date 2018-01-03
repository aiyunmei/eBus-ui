<template>
  <div class="snake" v-show="visible">

    <div class="snake-info">
      <spinner-item :borderColor="borderColor"></spinner-item>
      <div class="snake-info-val" v-if="val">{{ val }}</div>
    </div>

  </div>
</template>


<script>
  import SpinnerItem from './SpinnerItem'

  export default {
    components: { SpinnerItem },
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
</style>
