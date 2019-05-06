<script>
import AppDefault from '~/components/templates/app-default.vue'

export default {
  components: {
    AppDefault,
  },

  methods: {
    signup () {
      alert("登録")
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
          @submit.prevent="signup"
        >
          <div>
            <p>
              Name
            </p>
            <input
              class="name"
              type="text"
              placeholder="your name"
            >
          </div>
          <div>
            <p>
              UserName
            </p>
            <p>
              https://oooo.me/user/username
            </p>
            <input
              class="user-name"
              type="text"
              placeholder="This is the name displayed in the URL."
            >
          </div>
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
          <button
            class="btn"
          >
            Sign Up
          </button>
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
