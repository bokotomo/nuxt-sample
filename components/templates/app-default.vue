<script>
import Header from '~/components/organisms/common/header.vue'
import Content from '~/components/organisms/common/content.vue'
import Footer from '~/components/organisms/common/footer.vue'

export default {
  name: 'AppDefault',

  components: {
    Header,
    Content,
    Footer,
  },

  props: {
    type: {
      type: String,
      default: 'black'
    }
  },
}
</script>

<template lang="html">
  <div class="app">
    <Header />

    <Content
     :type="type"
    >
      <template slot="app-main">
        <slot name="app-main" />
      </template>
    </Content>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
