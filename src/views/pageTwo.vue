<template>
  <h1>
    <span class="text-capitalize"> {{ t('hello') + ' ' }} </span>

    <span>
      {{ t('description') }}
    </span>
  </h1>
  <div class="locales-container">
    <v-btn class="mx-1" elevation="0" color="secondary" @click="locale = 'en'"
      >En</v-btn
    >
    <v-btn class="mx-1" elevation="0" color="background" @click="locale = 'kr'"
      >Kr</v-btn
    >
    <v-btn class="mx-1" elevation="0" color="success" @click="locale = 'fr'"
      >Fr</v-btn
    >
    <v-btn class="mx-1" elevation="0" color="info" @click="locale = 'sp'"
      >Sp</v-btn
    >
  </div>

  <v-btn class="ma-2" color="#41B883" elevation="0" @click="$router.push('/')"
    >Go back</v-btn
  >
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  let { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global', // Change to "local" if you want to add <i18n></i18n> locally
  })
</script>
