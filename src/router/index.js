import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Inicio' }
  },
  {
    path: '/principios/:id',
    name: 'Principio',
    component: () => import('../views/PrincipioView.vue'),
    meta: { title: 'Principio' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - UNIACC Colaboración` : 'UNIACC Colaboración'
  next()
})

export default router
