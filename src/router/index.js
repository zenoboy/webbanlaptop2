import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cart',
    name: 'cart',

    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/cartdetail',
    name: 'cartdetail',

    component: () => import( '../views/Cartdetail.vue')
  },

  {
    path: '/sanpham',
    name: 'sanpham',

    component: () => import( '../views/ListView.vue')
  },
  {
    path: '/productdetail',
    name: 'productdetail',

    component: () => import( '../views/productdetail.vue')
  },
  // {
  //   path: '/admin',
  //   name: 'admin',

  //   component: () => import( '../components/admin.vue')
  // },
  {
    path: '/admin',
    name: 'admin',

    component: () => import( '../views/admin.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import( '../views/dangky.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
