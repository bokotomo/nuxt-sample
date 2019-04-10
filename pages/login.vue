<script>

export default {
  name: "Login",

  methods: {
    login () {
      alert("OK")
    }
  }
}
</script>

<template>
  <div class="login">
    <div class="title">
      Login
    </div>

    <form
      @submit.prevent="login"
    >
      <div>
        <input
          class="email"
          type="text"
        >
      </div>
      <div>
        <input
          class="pass"
          type="password"
        >
      </div>
      <button>
        ログイン
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  margin: 40px auto;
  background: #0f1d2b;
  width: 50%;
  height: 200px;
  padding: 20px;

  .title {
    color: #fff;
    text-align: center;
  }
  form {
    padding: 20px;

    input {
      width: 100%;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
