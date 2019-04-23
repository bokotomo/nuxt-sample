<template>
  <AppDefault>
    <template slot="app-main">
      <button @click='inc'>{{value}}</button>
      {{name}}
    </template>
  </AppDefault>
</template>

<script>
import { mapState } from 'vuex'
import AppDefault from '~/components/templates/app-default.vue'

export default {
  components: {
    AppDefault
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
</style>
