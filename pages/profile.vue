<template>
  <div>
    <Account v-if="!this.$store.state.loading && !this.$store.state.error.isError"/>
    <Loader v-if="this.$store.state.loading" />
    <Error v-if="this.$store.state.error.isError && !this.$store.state.loading" />
  </div>
</template>

<script>
  import Account from '../components/Account'
  import Loader from '../components/Loader'
  import Error from '../components/Error'

  export default {
    components: {
      Account,
      Loader,
      Error
    },
    layout: 'default',
  }
</script>