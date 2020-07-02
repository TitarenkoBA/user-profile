export const state = () => ({
  users: [
    {
      id: 1,
      name: 'Piter Parker',
      nick: 'Spiderman',
      img: '/Piter.jpg',
      age: 16,
      sex: 'male',
      job: 'hero',
      email: 'spidy613@mail.com',
      login: 'Spidy',
      password: 'qwerty'
    },
    {
      id: 2,
      name: 'Otto Octavius',
      nick: 'Dr. Octopus',
      img: '/Otto.jpg',
      age: 50,
      sex: 'male',
      job: 'villain',
      email: 'dr.octopus@mail.com',
      login: 'Octo',
      password: 'qwerty'
    }
],
  currentUser: null,
  error: {
    isError: false,
    message: ''
  },
  loading: false,
})

export const mutations = {
  login(state, user) {
    state.currentUser = { ...user }
  },
  logout(state) {
    state.currentUser = null
  },
  loading(state, isLoading) {
    state.loading = isLoading
  },
  error(state, { isError, message }) {
    state.error = {
      isError: isError,
      message
    }
  }
}

export const actions = {
  login(store, user) {
    store.commit('loading', true)
    const searchingUser = store.state.users.find(el => {
      return el.login === user.login && el.password === user.password
    })
    if (searchingUser) {
      store.commit('error', { isError: false, message: '' })
      store.commit('login', searchingUser)
      this.$router.push('/profile')
      setTimeout(() => {store.commit('loading', false)}, 2000)
    } else {
      store.commit('error', { isError: true, message: 'Wrong login or password!' })
      setTimeout(() => {store.commit('loading', false)}, 2000)
    }
  },
  logout(store) {
    this.$router.push('/')
    store.commit('logout')
  },
  loading(store, isLoading) {
    store.commit('loading', isLoading)
  },
  error(store, data) {
    this.$router.push('/')
    store.commit('error', data)
  }
}
