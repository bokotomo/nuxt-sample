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
  <div>
    <div class="header">
      <HeaderLeftMenu />
      <HeaderRightMenu
        :isSignin="isSignin"
      />
    </div>
    <div class="header-under" />
  </div>
</template>

<style lang="scss" scoped>
$height: 60px;

.header {
  position: fixed;
  width: 100%;
  height: $height;
  line-height: $height;
  background: #323232;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px #1b355a45;

  &-under {
    height: $height;
  }
}
</style>
