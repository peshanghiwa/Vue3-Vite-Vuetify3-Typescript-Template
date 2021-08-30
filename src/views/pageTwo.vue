<template>
  <h1>
    <span class="text-capitalize">
      {{ t("hello") }}
    </span>
    , This is a protected page
  </h1>

  <v-btn class="ma-2" color="#41B883" elevation="0" @click="$router.push('/')"
    >Go back</v-btn
  >
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  inheritLocale: true,
});
</script>
