<script>
import AppLogo from '~/components/atoms/AppLogo.vue'

export default {
  name: 'HeaderLeftMenu',

  components: {
    AppLogo,
  },
}
</script>

<template>
  <div class="header-left-menu">
    <h1 class="item">
      <AppLogo />
    </h1>
    <nuxt-link
      class="item selected"
      to="/"
    >
      Designs
    </nuxt-link>
    <nuxt-link
      class="item"
      to="/developments"
    >
      Developments
    </nuxt-link>
    <nuxt-link
      class="item"
      to="/jobs"
    >
      Jobs
    </nuxt-link>
    <nuxt-link
      class="item"
      to="/designer"
    >
      Designer
    </nuxt-link>
    <nuxt-link
      class="item"
      to="/developper"
    >
      Developper
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.header-left-menu {
  display: flex;
  flex: 0 0 20%;
  font-size: 18px;
  text-align: center;

  .selected {
    border-bottom: 2px solid #fff;
  }
  .item {
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
