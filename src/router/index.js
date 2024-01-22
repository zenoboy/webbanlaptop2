import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/WebAdmin/AdminView.vue'
import ListCategory from '../views/WebAdmin/category/ListView.vue'
import ProductDetail from '../views/productdetail.vue'
import CartView from '../views/CartView.vue'
import test from '../views/test.vue'


const routes = [
  {
    path: '/home',
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
    path: '/',
    name: 'sanpham',

    component: () => import( '../views/ListView.vue')
  },
  {
    path: '/productdetail',
    name: 'productdetail',

    component: () => import( '../views/productdetail.vue')
  },

  {
    path: '/admin',
    name: 'admin',

    component: () => import( '../views/WebAdmin/admin.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import( '../views/dangky.vue')
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/list-category',
    name: 'ListCategory',
    component: ListCategory
  },
  {
    path: '/product-detail/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true
  },{
    path: '/cart-view',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
