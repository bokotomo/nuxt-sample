<template>
  <AppDefault>
    <template slot="app-main">

      <p>
        開発者一覧
      </p>
      <nuxt-link
        to="/u/tomo"
      >
        tomo1
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
