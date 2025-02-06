import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap";
import "bootstrap/dist/js/bootstrap.min";
import { i18n } from "./plugins/i18n";

import App from './App.vue'
import router from './router'

const app = createApp(App).use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
