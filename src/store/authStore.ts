import { ActionContext } from 'vuex'
import Auth from '../types/authType'

export const AuthStore = {
  state: {
    loggedIn: false,
  },
  getters: {
    getAuth(state: Auth): boolean {
      return state.loggedIn
    },
  },
  actions: {
    changeAuth(context: ActionContext<Auth, Auth>, data: boolean): void {
      context.commit('changeAuth', data)
    },
  },
  mutations: {
    changeAuth(state: Auth, data: boolean): void {
      state.loggedIn = data
    },
  },
}
