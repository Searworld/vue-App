const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('../components/recommend/view.vue')
  },
  {
    path: '/singer',
    component: () => import('../components/singer/view.vue')
  },
  {
    path: '/rank',
    component: () => import('../components/rank/view.vue')
  },
  {
    path: '/search',
    component: () => import('../components/search/view.vue')
  }
]
export default routes
