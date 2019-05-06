<script>
import { mapState } from 'vuex'
import HeaderLeftMenu from '~/components/molecules/common/header-left-menu.vue'
import HeaderRightMenu from '~/components/molecules/common/header-right-menu.vue'

export default {
  name: 'Header',

  components: {
    HeaderLeftMenu,
    HeaderRightMenu,
  },

  computed: {
    ...mapState('auth', [ 'isSignin' ]),
  },
}
</script>

<template>
  <div class="header">
    <HeaderLeftMenu />
    <HeaderRightMenu
      :isSignin="isSignin"
    />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  background: #323232;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px #1b355a45;
}
</style>
