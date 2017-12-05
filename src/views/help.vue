<template>
  <div>

    <ul class="help-list">
      <li v-for="(item, index) in help">
        <div class="item question">
          <em>{{ `${index + 1}、` }}</em>
          <span v-html="item.question"></span>
        </div>
        <div class="item answer">
          <em>答：</em>
          <span v-html="item.answer"></span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    computed: {
      help () { return typeof global.threeConfig.help === 'object' ? global.threeConfig.help : JSON.parse(global.threeConfig.help) }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/help.styl';
</style>
