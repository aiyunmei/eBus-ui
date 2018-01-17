<template>
  <div>

    <ul class="help-list">
      <li class="help-list-item"
          v-for="(item, index) in helpList"
          :class="count === index ? 'open' : ''"
          @click="count === index ? count = null : count = index">
        <div class="question">
          <span>{{ item.question }}</span>
          <i class="fa fa-angle-right arrow"></i>
        </div>
        <CollapseTransition>
          <div class="answer"v-show="count === index ? true : false">
            <span>答：</span>
            <div class="answer-item" v-html="item.answer"></div>
          </div>
        </CollapseTransition>
      </li>
    </ul>

  </div>
</template>

<script>
  import CollapseTransition from '../../components/CollapseTransition/index'

  const { help } = global.threeConfig

  export default {
    components: { CollapseTransition },
    computed: {
      helpList () { return typeof help === 'string' ? JSON.parse(help) : help }
    },
    data () {
      return {
        count: null
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/flexCss/help.styl';
</style>
