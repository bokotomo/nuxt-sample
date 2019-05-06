<script>
import AppDefault from '~/components/templates/app-default.vue'

export default {
  components: {
    AppDefault,
  },

  methods: {
    signin () {
      this.$store.dispatch('auth/signin')
    }
  }
}
</script>

<template>
  <AppDefault
    type="signin"
  >
    <template slot="app-main">
      <div class="login">

        <div class="head">
          <p class="head-text">
            Register and connect<br>
            with many game creators.
          </p>
          <div class="head-icon">
            <img :src="require('~/assets/images/game-creator-icon1.png')" />
          </div>
        </div>

        <form
          @submit.prevent="signin"
        >
          <div>
            <p>
              E-Mail
            </p>
            <input
              class="email"
              type="text"
              placeholder="email@com"
            >
          </div>
          <div>
            <p>
              Password
            </p>
            <input
              class="pass"
              type="password"
              placeholder="pass word"
            >
          </div>
          <nuxt-link
            to="/forget-password"
          >
            If you forget your password
          </nuxt-link>
          <button
            class="btn"
          >
            Sign In
          </button>
          <nuxt-link
            class="btn"
            to="/signup"
          >
            Sign Up
          </nuxt-link>
        </form>

      </div>
    </template>
  </AppDefault>
</template>

<style lang="scss" scoped>
.login {
  margin: auto;
  background: #000000b8;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 50%;

  .head {
    background: #000;
    padding: 40px;
    display: flex;
    justify-content: space-between;

    &-text {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 80px;
      }
    }
  }
  form {
    padding: 20px;

    input {
      width: 100%;
      margin-bottom: 20px;
    }
    .btn {
      display: block;
      width: 100%;
      cursor: pointer;
      background: #FE659E;
      border-radius: 100px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      width: 100%;
      margin-top: 10px;
      color: #fff;
      text-align: center;
      border: none;
    }
  }
}
</style>
