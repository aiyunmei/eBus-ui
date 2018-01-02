<template>
  <div>

    <div class="open-line-search">
      <div class="item l">
        <i class="fa fa-map-marker"></i>
        {{ cityName }}
      </div>
      <input class="item r" type="text" :placeholder="openLine.searchConfig.placeholder" v-model="searchData" @input="bindSearchDataChange" />
    </div>

    <div class="open-line-body">
      <!--all-->
      <ul class="list">
        <li v-for="(item, index) in searchData ? searchLineData : openLine.openLineOptions" :key="index">
          <div class="item name">
            {{ item.txt }}
          </div>
          <div class="item station">
            <span>{{ item.start }}</span>
            <i class="fa fa-exchange"></i>
            <span>{{ item.end }}</span>
          </div>
        </li>
      </ul>

      <!--null-->
      <div class="open-line-null" v-show="isValue">
        <img :src="openLine.searchConfig.nullImage" v-if="openLine.searchConfig.nullImage" />
        <div class="tips" v-html="openLine.searchConfig.nullTips" v-if="openLine.searchConfig.nullTips"></div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    computed: {
      cityName () { return global.threeConfig.global.cityName },
      openLine () { return global.threeConfig.openLine }
    },
    data () {
      return {
        searchData: '',
        searchLineData: [],
        isValue: false
      }
    },
    methods: {
      bindSearchDataChange () {
        this.searchLineData = []
        this.openLine.openLineOptions.map((item) => {
          if (item.txt.indexOf(this.searchData) === 0) this.searchLineData.push(item)
        })
        this.searchLineData.length === 0 ? this.isValue = true : this.isValue = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/openLine.styl';
</style>
