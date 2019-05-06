<template>
  <AppDefault>
    <template slot="app-main">

      <!-- 最上部 -->
      <div class="user-info">
        <div class="user-info-left">
          <div class="names">
            <div
              class="image"
              :style="{
                backgroundImage: 'url(' + user.thumbnail + ')'
              }"
            />
            <p class="name">
              {{ user.name }}
            </p>
          </div>
          <div class="tags">
            {{ userTags }}
          </div>
        </div>
        <div class="user-info-right">
          <p class="title">
            Total good number
          </p>
          <p class="good">
            {{ user.totalGood }}
          </p>
        </div>
      </div>

      <!-- ユーザ説明 -->
      <div class="user-description">
        {{ user.description }}
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
      id: +this.$route.params.id,
    }
  },

  computed: {
    ...mapState('user', [ 'user' ]),

    userTags () {
      if(!this.user.tags) return ''
      return this.user.tags.join(', ')
    }
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

  // 数値でなければこのページへ入れない。
  validate ({ params }) {
    return /^\d+$/.test(params.id)
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
      .tags {
        padding-top: 10px;
      }
    }
    &-right {
      background: #fff;
      width: 240px;
      border-radius: 5px;
      text-align: center;
      color: #0A192C;

      .title {
        margin-top: 40px;
      }
      .good {
        color: #D55555;
      }
    }
  }
  &-description {
    margin-top: 40px;
    padding: 10px;
    background: #3C3E41;
    border-radius: 5px;
    border: 1px solid #323437;
  }
}
</style>
