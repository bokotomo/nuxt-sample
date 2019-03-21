<template>
  <section class="container">
    <div>
      <app-logo/>
      <div>
        account page
        <nuxt-link to="/">Home page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
</style>
