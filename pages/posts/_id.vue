<template>
  <AppDefault>
    <template slot="app-main">
      <div class="post">
        <!-- 最上部 -->
        <div class="post-info">
          <p>
            {{ post.name }}
          </p>
          <p>
            {{ post.good }}
          </p>
          <p>
            {{ post.comment }}
          </p>

          <div
            class="post-info-image"
            :style="{
              backgroundImage: 'url(' + post.image1 + ')'
            }"
          />
        </div>

        <!-- ユーザ説明 -->
        <div class="post-description">

          <nuxt-link
            :to="`/u/${post.userId}`"
          >
            <div
              class="image"
              :style="{
                backgroundImage: 'url(' + post.userThumbnail + ')'
              }"
            />
            <p>
              {{ post.userName }}
            </p>
          </nuxt-link>
          <p>
            {{ post.date }}
          </p>
          <p>
            {{ post.description }}
          </p>
        </div>

        <div class="post-comments">
          <p>
            comments
          </p>
          <div
            v-for="comment in post.comments"
            :key="comment.id"
          >

            <nuxt-link
              :to="`/u/${comment.userId}`"
            >
              <div
                class="image"
                :style="{
                  backgroundImage: 'url(' + comment.userThumbnail + ')'
                }"
              />
              <p>
                {{ comment.userName }}
              </p>
            </nuxt-link>

            {{ comment.date }}
            {{ comment.text }}
          </div>
        </div>
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
    ...mapState('post', [ 'post' ]),
  },

  mounted () {
    this.getPost ()
  },

  methods: {
    getPost () {
      this.$store.dispatch('post/getPost', {
        postId: this.id,
      })
    },
  },

  // 数値でなければこのページへ入れない。
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>

<style lang="scss" scoped>
.post {

  .image {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-size: cover;
    background-position: 50% 50%;
  }
  &-info {
    background: #3C3E41;
    border-radius: 5px;
    border: 1px solid #323437;
    padding: 20px 0;

    &-image {
      width: 600px;
      height: 350px;
      background-size: cover;
      background-position: 50% 50%;
      margin: auto;
    }
  }
  &-description {
    margin-top: 40px;
    padding: 10px;
    background: #3C3E41;
    border-radius: 5px;
    border: 1px solid #323437;
  }
  &-comments {
    margin-top: 40px;
  }
}
</style>
