<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-card
      max-width="344"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{user.name || ''}}</v-list-item-title>
          <v-list-item-subtitle>{{user.nick || ''}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        :src="user.img || ''"
        height="194"
      ></v-img>

      <AccountInfoList />

      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Change password
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="logOut">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import AccountInfoList from '../components/AccountInfoList'

export default {
  name: 'Account',
  components: {
    AccountInfoList
  },
  data() {
    return {
      user: this.$store.state.currentUser || ''
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logout')
    }
  },
  beforeMount() {
      if (!this.user) {
        this.$store.dispatch('error', {isError: true, message: 'You must be login to see this page'})
      }
    }
}
</script>