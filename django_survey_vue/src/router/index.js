import { createRouter, createWebHashHistory } from 'vue-router'
import ParentSurvey from '../views/ParentSurvey.vue'

const routes = [
  {
    path: '/',
    name: 'ParentSurvey',
    component: ParentSurvey
  },
  {
    path: './child_survey',
    name: 'ChildSurvey',

    component: () => import(/* webpackChunkName: "ChildSurvey" */ '../views/ChildSurvey.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
