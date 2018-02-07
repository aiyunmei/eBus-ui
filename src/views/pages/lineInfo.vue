<template>
  <div class="line-info" v-if="visible">
    <!--无-->
    <div class="line-info-null" v-if="isNull">
      <div class="line-info-null-wrapper">
        <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/subway_card/travel.png" />
        <div class="line-info-null-tips">暂无此线路信息</div>
      </div>
    </div>
    <!--渲染-->
    <div class="line-info-wrapper" v-if="!isNull">
      <div class="line-info-wrapper-header">
        <div class="header-title">{{ lineShort }}</div>
        <div class="header-footer">
          <span>{{ lineData['via_stops'][0].name }}</span>
          <i class="fa fa-exchange"></i>
          <span>{{ lineData['via_stops'][lineData['via_stops'].length - 1].name }}</span>
        </div>
      </div>
      <div class="line-info-wrapper-body">
        <div class="line-info-wrapper-body-info">
          <ul class="list-info">
            <li v-for="(item, index) in lineData['via_stops']">
              <div class="line-list-wrapper">
                <div class="left"><em :class="setUnLineClassName(index)"></em><span class="icon" :class="setPointClassName(index)"></span></div>
                <div class="right" :style="{ border: `${index + 1 === lineData['via_stops'].length ? 0 : ''}` }">{{ item.name }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="line-info-wrapper-footer">
        <div class="line-info-wrapper-footer-list"
             v-for="(item, index) in footerList"
             :style="{ width: `${(100 / footerList.length).toFixed(2)}%` }" @click="bindSet(item)">
          <img class="footer-icon" :src="item.icon" />
          <span class="footer-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from '../../components/Spinner/index'
  const { cityName } = global.threeConfig.global

  export default {
    computed: {
      lineShort () { return this.$route.query.lineShort ? this.$route.query.lineShort : '' }
    },
    data () {
      return {
        visible: false,
        lineData: null,
        isNull: false,
        footerList: [
          { label: '换向', key: 'changeAspect', icon: `https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/changeAspect_icon.png` },
          { label: '刷新', key: 'update', icon: `https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/update_icon.png` }
        ]
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        this.lineSearch()
      },
      setUnLineClassName (index) {
        if (index === 0) {
          return `un-line-start`
        } else if (index + 1 === this.lineData['via_stops'].length) {
          return `un-line-end`
        } else {
          return `un-line-item`
        }
      },
      setPointClassName (index) {
        if (index === 0) {
          return `point-start`
        } else if (index + 1 === this.lineData['via_stops'].length) {
          return `point-end`
        } else {
          return `point-item`
        }
      },
      bindSet ({ key }) {
        this[key]()
      },
      changeAspect () {
        this.lineData['via_stops'].reverse()
      },
      update () {
        window.location.reload()
      },
      lineSearch () {
        Spinner.open()
        AMap.service(['AMap.LineSearch'], () => {
          const searchObj = new AMap.LineSearch({
            pageIndex :1,
            pageSize: 1,
            city: cityName,
            extensions: 'all'//返回全部信息
          })
          // TODO:调用search方法
          searchObj.search(this.lineShort, (status, result) => {
            Spinner.close()
            this.visible = true
            if (status === 'complete' && result.info === 'OK') {
              this.lineData = result.lineInfo[0]
            } else {
              this.isNull = true
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/flexCss/lineInfo.styl";
</style>

