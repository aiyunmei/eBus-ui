<template>
  <div>

    <div class="open-line-search">
      <div class="item l">
        <i class="fa fa-map-marker"></i>
        {{ cityName }}
      </div>
      <div class="item r">
        <input class="input" type="text" :placeholder="openLine.searchConfig.placeholder" v-model="searchData" @input="bindSearchDataChange" />
      </div>
    </div>

    <div class="open-line-body">
      <!--all-->
      <ul class="list" v-show="!searchData">
        <li v-for="(item, index) in openLine.openLineOptions">
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

      <!--searchResult-->
      <ul class="list" v-show="searchData">
        <li v-for="(item, index) in searchLineData">
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
      bindSearchDataChange (e) {
        const searchData = this.searchData
        const openLineData = this.openLine.openLineOptions
        this.searchLineData = []
        for (let i = 0; i < openLineData.length; i++) {
          if (openLineData[i].txt.indexOf(searchData) === 0) {
            this.searchLineData.push(openLineData[i])
          }
        }
        this.searchLineData.length === 0 ? this.isValue = true : this.isValue = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/openLine.styl';
</style>
