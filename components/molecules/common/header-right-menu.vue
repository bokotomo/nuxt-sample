<script>
export default {
  name: 'HeaderRightMenu',
}
</script>

<template>
  <div class="menu">
    <nuxt-link
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
}
</style>
