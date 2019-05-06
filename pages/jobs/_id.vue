<template>
  <AppDefault>
    <template slot="app-main">
      2
    </template>
  </AppDefault>
</template>

<script>
import AppDefault from '~/components/templates/app-default.vue'

export default {
  components: {
    AppDefault
  },

  // 数値でなければこのページへ入れない。
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>

<style lang="scss" scoped>
</style>
