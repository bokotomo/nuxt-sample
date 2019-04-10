<script>
export default {
  name: 'HeaderMenu'
}
</script>

<template>
  <div class="menu">
    <nuxt-link
      class="menu-item"
      to="/"
    >
      ホーム
    </nuxt-link>
    <nuxt-link
      class="menu-item"
      to="/account"
    >
      マイページ
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;

  &-item {
    color: #fff;
    margin-left: 10px;
  }
}
</style>
