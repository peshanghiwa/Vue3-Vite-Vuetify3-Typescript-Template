import Auth from '../types/authType'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { AuthStore } from './authStore'

interface storeTypes extends Auth {}
export const key: InjectionKey<Store<storeTypes>> = Symbol()

export const store = createStore<storeTypes>({
  modules: {
    AuthStore,
  },
})
