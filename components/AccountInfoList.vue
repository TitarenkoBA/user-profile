<template>
  <v-list shaped>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" :list_item_title_id="item.id"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>


<script>
  export default {
    name: 'AccountInfoList',
    data: () => ({
      item: 1,
      items: [
        { text: 'Age: ', icon: 'mdi-alarm', id: 'age'},
        { text: 'Sex: ', icon: 'mdi-human-male-female', id: 'sex'},
        { text: 'Job: ', icon: 'mdi-briefcase', id: 'job'},
        { text: 'Email: ', icon: 'mdi-mail', id: 'email'},
        { text: 'Login: ', icon: 'mdi-account-box', id: 'login'},
        { text: 'Password: ', icon: 'mdi-lock', id: 'password'},
      ],
    }),
    methods: {
      addUserInfo() {
        const user = this.$store.state.currentUser
        if (user) {
          const items = document.querySelectorAll('[list_item_title_id]')
          items.forEach( (el) => {
            el.textContent += user[el.getAttribute('list_item_title_id')]
          })
        }
      }
    },
    mounted() {
      this.addUserInfo()
    }
  }
</script>