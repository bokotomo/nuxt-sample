<template>
  <AppDefault>
    <template slot="app-main">
      <p class="title">
        Pickup
      </p>
      <div>
        <nuxt-link
          to="/posts/2"
        >
          制作物2
        </nuxt-link>
      </div>
      <p class="title">
        Trend
      </p>
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
.title {
  color: #fff;
  font-size: 24px;
  padding: 20px 0;
}
</style>
