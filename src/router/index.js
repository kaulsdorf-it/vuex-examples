import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import( '../components/events')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/router-page'),
    children: [
      {
        path: '/manage-users',
        name: 'manage-users',
        component: () => import('../components/admin/manage-users'),
        children: [
          {
            path: '/manage-single-users/:userId',
            name: 'manage-single-user',
            component: () => import( '../components/admin/manage-users/manage-single-user'),
          }
        ]
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
