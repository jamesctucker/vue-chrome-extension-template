import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import "./style.css";

import App from "./App.vue";

createApp(App).use(autoAnimatePlugin).mount("#app");
