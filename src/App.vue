<template>
  <v-app>
    <div class="container-test">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Vue 3 + TypeScript + Vite + Vuetify 3" />

      <a href="https://github.com/peshanghiwa" target="_blank" class="creator"
        >Peshang Hiwa</a
      >
    </div>
  </v-app>
</template>
<script setup lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
defineComponent(HelloWorld);
</script>

<style>
.container-test {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  text-align: center;
}

.creator {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: black;
}
</style>
