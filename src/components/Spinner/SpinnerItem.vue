<template>
  <div class="spinner-item" :style="{ borderTopColor: borderColor, borderLeftColor: borderColor, borderBottomColor: borderColor }"></div>
</template>

<script>
  export default {
    props: {
      borderColor: {
        type: String,
        default: '#ccc'
      }
    }
  }
</script>

<style lang="css" scoped>
  .spinner-item{
    animation: spinner-item-rotate 0.8s infinite linear;
    border: 2px solid transparent;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  @keyframes spinner-item-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
