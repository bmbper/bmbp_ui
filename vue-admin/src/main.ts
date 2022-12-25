import "vue-devui/style.css";
import "@devui-design/icons/icomoon/devui-icon.css";

import { ThemeServiceInit } from "devui-theme";
ThemeServiceInit({}, "infinityTheme");

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
