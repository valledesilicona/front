import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from './layouts/Home.vue'
import Cinema from './views/Cinema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout
    },
    {
      path: '/cinema/:port/:user',
      name: 'cinema',
      component: Cinema
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
