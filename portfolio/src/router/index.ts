import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/vues/Home.vue')
  }, {
    path: '/projets',
    name: 'Projets',
    component: () => import('@/vues/Last-Projects.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
