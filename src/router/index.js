import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/WebAdmin/AdminView.vue'
import ListCategory from '../views/WebAdmin/category/ListView.vue'
import ProductDetail from '../views/productdetail.vue'
import SearchResults from '@/views/SearchResults.vue';
import SearchView from '@/views/SearchView.vue';
import CheckoutView from '../views/CheckoutView.vue'
import ProductEdit from '../views/WebAdmin/product/ProductEdit.vue'
import ListOrder from '../views/WebAdmin/order/ListOrder.vue'
import ListUser from '../views/WebAdmin/user/ListUser.vue'
// import SearchResults from '@/views/SearchResults.vue';

// import CheckoutView from '../views/CheckoutView.vue'


// =======
import CartView from '../views/CartView.vue'
import test from '../views/test.vue'
import Dashboard from '../views/WebAdmin/DashboardView.vue'


const routes = [
  {
    path:'/side',
    path:'/side',
    component:()=> import('../components/SideBarAdmin1.vue')
  },
  {
    path:'/singup',
    path:'/singup',
    component:()=> import('../views/Register.vue')
  },
  {
    path:'/searchView',
    path:'/searchView',
    component:SearchView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/timkiem',
  //   name: 'timkiem',
  //   component: SearchView
  // },
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

    component: () => import( '../views/login.vue')
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/admin/list-category',
    name: 'ListCategory',
    component: ListCategory
  },
  {
    path:'/admin/list-product',
    name:'list-product',
    component:()=>import('../views/WebAdmin/product/ListProduct.vue')
  },
  {
    path:'/statistical',
    name:'statistical',
    component:()=>import('../views/WebAdmin/statistical/Statistical.vue')
  },
  
  { 
      path: '/search-results/', 
      name: 'search-results',
      component: SearchResults
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
  {
    path: '/ho-so',
    name: 'ho-so',
    component:() =>import('../views/UserProfile.vue')

  },
  {
    path: '/don-hang',
    name: 'don-hang',
    component:() =>import('../views/UserProduct.vue')
  },
  {
    path: '/dia-chi',
    name: 'dia-chi',
    component:() =>import('../views/UserAddress.vue')
  },
  {
    path: '/chi-tiet-dia-chi',
    name: 'chi-tiet-dia-chi',
    component:() =>import('../views/UserAddressDetail.vue')
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/edit-product/:id',
    name: 'edit-product',
    component: ProductEdit,
    props: true
  },
  {
    path: '/admin/list-order',
    name: 'ListOrder',
    component: ListOrder
  },
  {
    path: '/admin/list-user',
    name: 'ListUser',
    component: ListUser
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
