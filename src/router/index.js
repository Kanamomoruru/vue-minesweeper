import Vue from 'vue'
import Router from 'vue-router'
import minesweeper from '@/components/minesweeper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'minesweeper',
      component: minesweeper
    }
  ]
})
