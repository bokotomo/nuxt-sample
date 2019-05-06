<template>
  <AppDefault
    type="white"
  >
    <template slot="app-main">

      <div
        v-for="job in jobs"
        :key="job.id"
      >
        <nuxt-link
          :to="`jobs/${job.id}`"
        >
          {{ job.name }}
        </nuxt-link>
      </div>

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
    ...mapState('job', [ 'jobs' ]),
  },
}
</script>

<style lang="scss" scoped>

</style>
