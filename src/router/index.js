import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal'
import Steam from '@/components/Steam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/steam',
      name: 'Steam',
      component: Steam
    }
  ]
})
