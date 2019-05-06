<template>
  <AppDefault>
    <template slot="app-main">

      <p class="title">
        Pickup
      </p>

      <div>
        <nuxt-link
          to="/posts/1"
        >
          制作物1
        </nuxt-link>
      </div>

      <p class="title">
        Trend
      </p>

    </template>
  </AppDefault>
</template>

<script>
import { mapState } from 'vuex'
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
