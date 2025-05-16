import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/aboutView',
          name: 'About',
          component: () => import('@/views/AboutView.vue')
        }

      ]
    }
  ],
})

export default router
