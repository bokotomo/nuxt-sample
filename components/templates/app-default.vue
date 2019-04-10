<script>
import Header from '~/components/organisms/header.vue'

export default {
  name: 'AppDefault',

  components: {
    Header
  }
}
</script>

<template lang="html">
  <div class="app">
    <Header />

    <div class="app-main">
      <slot name="app-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
