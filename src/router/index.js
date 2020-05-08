import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import(/* webpackChunkName: "vuetify" */ '../views/Vuetify.vue')
  },
  {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "botones" */ '../views/Botones.vue')
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () => import(/* webpackChunkName: "Tareas" */ '../views/Tareas.vue')
  }, 
  {
    path: '/calendario',
    name: 'Calendario',
    component: () => import(/* webpackChunkName: "calendario" */ '../views/Calendario.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
