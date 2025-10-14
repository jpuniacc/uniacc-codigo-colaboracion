import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Inicio' }
  },
  {
    path: '/principios',
    name: 'Principios',
    component: () => import('../views/PrincipiosView.vue'),
    meta: { title: 'Los 7 Principios' }
  },
  {
    path: '/principios/:id',
    name: 'Principio',
    component: () => import('../views/PrincipioView.vue'),
    meta: { title: 'Principio' }
  },
  {
    path: '/progreso',
    name: 'Progreso',
    component: () => import('../views/ProgresoView.vue'),
    meta: { title: 'Mi Progreso' }
  },
  {
    path: '/comenzar',
    name: 'Comenzar',
    component: () => import('../views/ComenzarView.vue'),
    meta: { title: 'Comenzar Ahora' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { title: 'Dashboard' }
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
