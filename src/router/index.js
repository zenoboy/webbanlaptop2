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
import ListInfo from '../views/WebAdmin/Profile/ListInfo.vue'
import LoginAdmin from '../views/WebAdmin/LoginAdmin.vue'
import CategoryPage from '../views/CategoryPage.vue'
import MyProfile from '../views/MyProfile.vue'
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
    path:'/signup',
    name:'signup',
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
    meta: { requiresAuth: true }, // Đánh dấu route cần yêu cầu đăng nhập
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
    component: ListCategory,
    meta: { requiresAuth: true } // Đánh dấu route cần yêu cầu đăng nhập
  },
  {
    path:'/admin/list-product',
    name:'list-product',
    meta: { requiresAuth: true }, // Đánh dấu route cần yêu cầu đăng nhập
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
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Đánh dấu route cần yêu cầu đăng nhập
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
    component: ListOrder,
    meta: { requiresAuth: true } // Đánh dấu route cần yêu cầu đăng nhập
  },
  {
    path: '/admin/list-user',
    name: 'ListUser',
    component: ListUser,
    meta: { requiresAuth: true } // Đánh dấu route cần yêu cầu đăng nhập
  },
  {
    path: '/admin/info',
    name: 'ListInfo',
    component: ListInfo,
    meta: { requiresAuth: true } // Đánh dấu route cần yêu cầu đăng nhập
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/test1',
    name: 'test1',

    component: () => import( '../views/test1.vue')
  },
  {
    path: '/category/:id',
    name: 'CategoryPage',
    component: CategoryPage,
    props: true
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/CKEditor',
    name: 'CKEditor',

    component: () => import( '../views/CKEditor.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Định nghĩa route guard để kiểm tra xem người dùng đã đăng nhập hay chưa
router.beforeEach((to, from, next) => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('admin')) // hoặc sessionStorage
  if (to.meta.requiresAuth && !loggedInUser) {
    // Nếu route yêu cầu đăng nhập và người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next('/admin/login')
  } else {
    // Nếu người dùng đã đăng nhập hoặc route không yêu cầu đăng nhập, tiếp tục
    next()
  }
})

export default router
