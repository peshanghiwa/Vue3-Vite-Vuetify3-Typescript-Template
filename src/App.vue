<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 3 + TypeScript + Vite" />
</template>
<script setup lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
defineComponent(HelloWorld);

console.log("hey");
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
