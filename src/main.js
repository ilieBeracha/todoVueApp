import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import store from './app/store'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).use(ToastPlugin).use(store).use(router).mount("#app");
