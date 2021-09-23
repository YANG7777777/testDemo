const app = {
  state: {
    roles: ['admin'], // 角色
    routes: [],
    count: 0
  },
  mutations: {
    add: (state) => {
      state.count++
    },
    minus: (state) => {
      state.count--
    }
  },
  actions: {}
}
export default app
