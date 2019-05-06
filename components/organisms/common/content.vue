<script>
export default {
  name: 'Content',

  props: {
    type: {
      type: String,
      default: 'black'
    }
  },
}
</script>

<template>
  <div class="content">

    <!-- 背景が黒の場合 -->
    <div
      v-if="type === 'black'"
      class="content-black"
    >
      <div class="content-black-content">
        <slot name="app-main" />
      </div>
    </div>

    <!-- 背景が白の場合 -->
    <div
      v-else-if="type === 'white'"
      class="content-white"
    >
      <slot name="app-main" />
    </div>

    <!-- 背景がsignin用の場合 -->
    <div
      v-else-if="type === 'signin'"
      class="content-signin"
      :style="{
        backgroundImage: 'url(' + require('~/assets/images/game_creator_signin.jpg') + ')'
      }"
    >
      <slot name="app-main" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.content {
  flex: 1 1 auto;
  height: 100%;

  &-black {
    flex: 1 1 auto;
    height: 100%;
    background: #212226;
    color: #fff;

    &-content {
      width: 940px;
      margin: auto;
      padding: 40px 0;
    }
  }
  &-white {
    flex: 1 1 auto;
    height: 100%;
    background: #fff;
    color: #0A192C;
  }
  &-signin {
    flex: 1 1 auto;
    margin-top: -60px;
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    color: #0A192C;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  }
}
</style>
