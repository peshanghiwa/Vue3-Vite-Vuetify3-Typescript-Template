<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Vuetify 3" />
    <div class="buttons-container">
      <v-btn class="ma-2" color="primary" elevation="0" @click="count++" dark>
        <span> Count: {{ count }} </span>
      </v-btn>
      <v-btn
        class="ma-2"
        color="primary"
        elevation="0"
        @click="store.dispatch('changeAuth', !auth)"
        dark
      >
        <span> {{ auth ? "Log out" : "Login" }} </span>
      </v-btn>
      <v-btn
        class="ma-2"
        color="primary"
        elevation="0"
        @click="$router.push('/pagetwo')"
        >Go to protected page</v-btn
      >
    </div>
    <div class="state-container">
      {{ auth ? "Logged in" : "Logged out" }}
      <v-btn
        v-if="auth"
        elevation="0"
        small
        class="ma-2"
        text
        icon
        color="blue lighten-2"
      >
        <v-icon class="icon">mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn
        v-else
        elevation="0"
        small
        class="ma-2"
        text
        icon
        color="red lighten-2"
      >
        <v-icon class="icon">mdi-thumb-down</v-icon>
      </v-btn>
    </div>
    <a href="https://github.com/peshanghiwa" target="_blank" class="creator"
      >Peshang Hiwa</a
    >
  </div>
</template>
<script setup lang="ts">
import { computed, ref, getCurrentInstance } from "@vue/runtime-core";
// @ts-ignore
import HelloWorld from "../components/HelloWorld.vue";
import { key } from "../store";
import { useStore } from "vuex";

const count = ref(0);

const store = useStore(key);
const auth = computed(() => {
  return store.getters.getAuth;
});

const app = getCurrentInstance();
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  text-align: center;
}
.creator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: black;
}
.icon {
  color: white;
}
</style>
