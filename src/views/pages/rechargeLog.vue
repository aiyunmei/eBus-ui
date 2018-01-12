<template>
  <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
    <li v-for="(item, index) in list">
      {{ item }}
    </li>
    <li class="loading" v-show="loading">
      <spinner-item class="loading-item" borderColor="#108ee9"></spinner-item>
      <div class="loading-txt">加载中...</div>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue'
  import InfiniteScroll from '../../components/InfiniteScroll'
  import SpinnerItem from '../../components/Spinner/SpinnerItem'

  Vue.use(InfiniteScroll)

  export default {
    components: { SpinnerItem },
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        loading: false
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list[this.list.length - 1] + 1)
          }
          this.loading = false
        }, 2500)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/rechargeLog.styl';
  ul li {
    text-align: center;
  }
  .loading {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
