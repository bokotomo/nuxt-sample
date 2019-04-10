<script>
import AppLogo from '~/components/atoms/AppLogo.vue'
import HeaderMenu from '~/components/organisms/header-menu.vue'

export default {
  name: 'Header',

  components: {
    AppLogo,
    HeaderMenu
  }
}
</script>

<template>
  <div class="header">
    <h1>
      <AppLogo />
    </h1>

    <HeaderMenu />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 80px;
  line-height: 80px;
  background: #b4ccda;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px #1b355a45;
}
</style>
