<template>
  <h1>{{ msg }}</h1>
  <p class="mb-5">
    With fully functional configrations for Vuex, SCSS, Vuetify themes,
    Directives, Middlewares, mixins and plugins. <br />
    All written in typescript ES6 Modular form with single file component and
    script setup mode for vue.
  </p>
</template>
<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
