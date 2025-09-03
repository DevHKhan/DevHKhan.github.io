import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pashto from "../views/Pashto.vue";
import Lessons from "../views/Lessons.vue";
import Alphabet from "../views/Alphabet.vue";
import Diacritics from "../views/Diacritics.vue";
import FormingSentences from "../views/FormingSentences.vue";
import FormingWords from "../views/FormingWords.vue";
import Pronouns from "../views/Pronouns.vue";
import Verbs from "../views/Verbs.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pashto", component: Pashto },
  { path: "/pashto/lessons", component: Lessons },
  { path: "/pashto/lessons/alphabet", component: Alphabet },
  { path: "/pashto/lessons/diacritics", component: Diacritics },
  { path: "/pashto/lessons/forming-sentences", component: FormingSentences },
  { path: "/pashto/lessons/forming-words", component: FormingWords },
  { path: "/pashto/lessons/pronouns", component: Pronouns },
  { path: "/pashto/lessons/verbs", component: Verbs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
