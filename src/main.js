import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const themeSaved = localStorage.getItem("theme");
document.documentElement.setAttribute("data-bs-theme", themeSaved || "light");

createApp(App).use(router).mount("#app");
