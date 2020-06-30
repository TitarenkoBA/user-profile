<template>
  <v-alert
      prominent
      type="error"
    >
      <v-row align="center">
        <v-col class="grow">{{message}}</v-col>
        <v-col class="shrink">
          <v-btn @click="back">Try again</v-btn>
        </v-col>
      </v-row>
    </v-alert>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    back() {
      this.$store.dispatch('error', { isError: false, message: ''})
    }
  },
  mounted() {
    this.message = this.$store.state.error.message
  }
}
</script>