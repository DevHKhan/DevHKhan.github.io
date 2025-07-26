import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pashto from "../views/Pashto.vue";
import Lessons from "../views/Lessons.vue";
import Alphabet from "../views/Alphabet.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pashto", component: Pashto },
  { path: "/pashto/lessons", component: Lessons },
  { path: "/pashto/lessons/alphabet", component: Alphabet },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
