import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/aboutMe',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutMe.vue'),
    meta: {
      transition: 'fade'
    }
  },

  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "about" */ '../components/Skills.vue')
  },

  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../components/Portfolio.vue')
  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../components/Header.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
