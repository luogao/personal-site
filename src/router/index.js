import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Work from '@/components/Work'
import UnderConstruction from '@/components/UnderConstruction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/under_construction',
      name: 'UnderConstruction',
      component: UnderConstruction
    },
    {
      path: '/under_construction',
      name: 'UnderConstruction',
      component: UnderConstruction
    }
  ]
})
