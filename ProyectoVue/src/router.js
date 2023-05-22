import { createRouter, createWebHistory } from 'vue-router'
import index from './components/index/index.vue'
import starships from './components/starships/starships.vue'
import pilots from './components/pilots/pilots.vue'
import starshipPilot from './components/starshipPilot/starshipPilot.vue'

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },
  { path: '/starships', component: starships },
  { path: '/pilots', component: pilots },
  { path: '/starshipPilot', component: starshipPilot },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router