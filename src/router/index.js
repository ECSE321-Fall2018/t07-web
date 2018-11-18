import Vue from 'vue'
import Router from 'vue-router'
import Fleet from '@/components/Fleet'
import Ranking from '@/components/Ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fleet',
      component: require('../components/Fleet.vue').default
    },
    {
      path: '/Ranking',
      name: 'Ranking.vue',
      component: require('../components/Ranking.vue')
    }
  ]
})
