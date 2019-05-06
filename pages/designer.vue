<template>
  <AppDefault>
    <template slot="app-main">

      <p>
        デザイナー一覧
      </p>
      <nuxt-link
        to="/u/boko1234"
      >
        boko1234
      </nuxt-link>

    </template>
  </AppDefault>
</template>

<script>
import AppDefault from '~/components/templates/app-default.vue'

export default {
  components: {
    AppDefault,
  },
}
</script>

<style lang="scss" scoped>
</style>
