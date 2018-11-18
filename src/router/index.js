import Vue from 'vue'
import Router from 'vue-router'
import Fleet from '@/components/Fleet'
import Ranking from '@/components/Ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('../components/Fleet.vue').default
    },
    {
      path: '/ranking',
      component: require('../components/Ranking.vue').default
    }
  ]
})
