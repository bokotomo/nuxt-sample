<template>
  <AppDefault>
    <template slot="app-main">

      <nuxt-link
        to="/users/2"
      >
        tomo2
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
