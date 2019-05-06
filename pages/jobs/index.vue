<template>
  <AppDefault>
    <template slot="app-main">
      <p class="title">
        Pickup
      </p>
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

  computed: {
    ...mapState('user', [ 'name' ]),

    value  () {
      return this.$store.state.name
    }
  },

  methods: {
    inc () {
      alert()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #fff;
  font-size: 24px;
  padding: 20px 0;
}
</style>
