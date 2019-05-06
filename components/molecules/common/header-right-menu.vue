<script>
export default {
  name: 'HeaderRightMenu',

  props: {
    isSignin: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    signout () {
      this.$store.dispatch('auth/signout')
    },
  },
}
</script>

<template>
  <div class="menu">
    <div
     v-if="isSignin"
     class="menu-me"
     @click="signout"
    >
      sign out
    </div>
    <nuxt-link
      v-else
      class="menu-item"
      to="/signin"
    >
      Sign in
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;

  &-item {
    color: #fff;
    padding: 0 10px;

    &:hover {
      color: #e6c71b;
      border-bottom: 2px solid #e6c71b;
      text-decoration: none;
    }
  }
  &-me {
    cursor: hover;
    color: #fff;
  }
}
</style>
