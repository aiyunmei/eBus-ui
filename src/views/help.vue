<template>
  <div>

    <ul class="help-list">
      <li class="help-list-item" v-for="(item, index) in helpList" @click="helpItemVisible(item, index)" :class="count === index ? 'open' : ''">
        <div class="question">
          <em>{{ index + 1 }}、</em>
          <span>{{ item.question }}</span>
          <i class="fa fa-chevron-down arrow"></i>
        </div>
        <CollapseTransition>
          <div class="answer" v-html="item.answer" v-show="count === index ? true : false"></div>
        </CollapseTransition>
      </li>
    </ul>

  </div>
</template>

<script>
  import CollapseTransition from '../components/CollapseTransition/index'

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
    },
    methods: {
      helpItemVisible (item, index) { this.count = index }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/help.styl';
</style>
