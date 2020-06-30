<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>User profile</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Loader v-if="this.$store.state.loading" />
      <Error v-if="this.$store.state.error.isError" />
      <nuxt v-if="!this.$store.state.loading && !this.$store.state.error.isError" />
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Loader from '../components/Loader'
import Error from '../components/Error'

export default {
  components: {
    Loader,
    Error
  }
}
</script>

<style scoped>
  #inspire {
    background-color: grey;
  }
</style>
