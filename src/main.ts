import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from 'pinia'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(router).mount("#app");
app.use(createPinia())
app.use(mdiVue, {
    icons: mdijs
})
