import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('../views/WorkspacePage.vue')
    }
  ]
})

export default router


