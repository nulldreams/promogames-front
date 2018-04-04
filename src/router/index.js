import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal'
import Steam from '@/components/Steam'
import Nuuvem from '@/components/Nuuvem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Nuuvem
    },
    {
      path: '/steam',
      name: 'Steam',
      component: Steam
    },
    {
      path: '/nuuvem',
      name: 'Nuuvem',
      component: Nuuvem
    }
  ]
})
