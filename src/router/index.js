import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'default_layout',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/dish-:id',
        name: 'dish',
        component: () => import('@/views/DishView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue'),
      },
      {
        path: '/:catchAll(.*)',
        name: 'not_found',
        redirect: {name: 'home'},
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router