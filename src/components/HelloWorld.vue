<template>
  <h1>{{ msg }}</h1>
  <p class="mb-5">
    With fully functional configurations for Vuex, Router, SCSS, Vuetify themes,
    Directives, Middlewares, mixins and plugins. <br />
    All written in typescript Modular form with single file component and script
    setup mode for vue.
  </p>
</template>

<script setup lang="ts">
  import { defineProps } from '@vue/runtime-core'
  defineProps<{ msg: string }>()
</script>
