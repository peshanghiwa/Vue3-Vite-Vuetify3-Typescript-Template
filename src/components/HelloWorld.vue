<template>
  <h1>{{ msg }}</h1>
  <v-btn class="ma-2" color="#41B883" elevation="0" @click="count++" dark>
    <span> Count: {{ count }} </span>
  </v-btn>
</template>
<script setup lang="ts">
import { ref } from "vue";
defineProps<{ msg: string }>();
//
const count = ref(0);
</script>
<style scoped>
.count {
  color: #304455;
  font-weight: bold;
}
</style>
