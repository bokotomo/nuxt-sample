<template>
  <AppDefault>
    <template slot="app-main">

      <!-- 最上部 -->
      <div class="user-info">
        <div class="user-info-left">
          <nuxt-link
            :to="`/u/${id}`"
            class="names"
          >
            <div
              class="image"
              :style="{
                backgroundImage: 'url(' + user.thumbnail + ')'
              }"
            />
            <p class="name">
              {{ user.name }}
            </p>
          </nuxt-link>
        </div>
      </div>

      <!-- ユーザ作品 -->
      <div class="user-creations">
        作品
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

  data () {
    return {
      id: this.$route.params.id,
    }
  },

  computed: {
    ...mapState('user', [ 'user' ]),
  },

  mounted () {
    this.getUser ()
  },

  methods: {
    getUser () {
      this.$store.dispatch('user/getUser', {
        userId: this.id,
      })
    },
  },

  // 「記号なしの半角英数字」でなければこのページへ入れない。
  validate ({ params }) {
    return /^[a-zA-Z0-9]+$/.test(params.id)
  }
}
</script>

<style lang="scss" scoped>

.user {
  &-info {
    display: flex;
    justify-content: space-between;

    &-left {
      .names {
        display: flex;
        color: #fff;

        .name {
          line-height: 80px;
          padding-left: 10px;
          font-size: 22px;
        }
        .image {
          width: 80px;
          height: 80px;
          border-radius: 80px;
          background-size: cover;
          background-position: 50% 50%;
        }
      }
    }
  }
  &creations {
    margin-top: 40px;
    padding: 10px;
    background: #3C3E41;
    border-radius: 5px;
    border: 1px solid #323437;
  }
}
</style>
