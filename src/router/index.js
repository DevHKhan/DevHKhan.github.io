import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pashto from '../views/Pashto.vue'
import Lessons from '../views/Lessons.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pashto', component: Pashto },
  { path: '/pashto/lessons', component: Lessons },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router