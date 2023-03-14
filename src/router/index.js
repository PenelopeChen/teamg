import Vue from 'vue'
import VueRouter from 'vue-router'
import DrawFormView from '../views/DrawFormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/drawform',
    name: 'drawform',
    component: DrawFormView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
