<template>
  <h1>
    <span class="text-capitalize"> {{ t("hello") + " " }} </span>

    <span>
      {{ t("description") }}
    </span>
  </h1>
  <div class="locales-container">
    <v-btn class="mx-1" @click="locale = 'en'" elevation="0" color="secondary"
      >En</v-btn
    >
    <v-btn class="mx-1" @click="locale = 'kr'" elevation="0" color="background"
      >Kr</v-btn
    >
    <v-btn class="mx-1" @click="locale = 'fr'" elevation="0" color="success"
      >Fr</v-btn
    >
    <v-btn class="mx-1" @click="locale = 'sp'" elevation="0" color="info"
      >Sp</v-btn
    >
  </div>

  <v-btn class="ma-2" color="#41B883" elevation="0" @click="$router.push('/')"
    >Go back</v-btn
  >
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

let { t, locale } = useI18n({
  inheritLocale: true,
  useScope: "global", // Change to "local" if you want to add <i18n></i18n> locally
});
</script>
