import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pashto from "../views/Pashto.vue";
import Lessons from "../views/Lessons.vue";
import Alphabet from "../views/Alphabet.vue";
import Diacritics from "../views/Diacritics.vue";
import FormingWords from "../views/FormingWords.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pashto", component: Pashto },
  { path: "/pashto/lessons", component: Lessons },
  { path: "/pashto/lessons/alphabet", component: Alphabet },
  { path: "/pashto/lessons/diacritics", component: Diacritics },
  { path: "/pashto/lessons/forming-words", component: FormingWords },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
