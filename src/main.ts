import { createApp } from "vue";
import App from "./App.vue";
import { vuetify } from "./plugins/vuetify";
import router from "./router";
import { store, key } from "./store/index";

const app = createApp(App)
  .use(store, key)
  .use(router)
  .use(vuetify)
  .mount("#app");
