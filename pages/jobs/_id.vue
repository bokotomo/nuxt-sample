<template>
  <AppDefault
    type="white"
  >
    <template slot="app-main">
      仕事
      {{ job.name}}
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

  data () {
    return {
      id: +this.$route.params.id,
    }
  },

  computed: {
    ...mapState('job', [ 'job' ]),
  },

  // 数値でなければこのページへ入れない。
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  mounted () {
    this.getPost ()
  },

  methods: {
    getPost () {
      this.$store.dispatch('job/getJob', {
        jobId: this.id,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
