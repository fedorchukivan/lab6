import Vue from 'vue'
import VueRouter from 'vue-router'
import Sign_In from '../views/Sign_In.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sign_In',
    component: Sign_In
  },
  {
    path: '/reg',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/chatrooms',
    name: 'Chat_Rooms',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat_Rooms.vue')
  },
  {
    path: '/chatrooms/:id',
    name: 'Room',
    component: () => import(/* webpackChunkName: "about" */ '../views/Room.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
