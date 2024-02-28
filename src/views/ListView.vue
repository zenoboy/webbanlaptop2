<template>
  <div>
    <top-bar/>
 
    <v-container class="" style="margin-bottom: 50px;">
     
        <v-row>
          <!-- <v-col class="menu-col" cols="2">
           
            <div class="menu-item mt-10 col" v-for="category in laptopCategories" :key="category.id">
      <a href="" class="text-decoration-none">
          <v-icon>{{ category.icon }}</v-icon>
          <span>{{ category.name }}</span>
      </a>

  </div>
  
          </v-col> -->
          <v-col >
            <v-carousel cycle="100px">
              <v-carousel-item v-for="item in silders" :key="item.id" :src="item.url" cover></v-carousel-item>
            </v-carousel>
            <div class="d-flex mt-2">
              <v-img class="mr-2" src="https://hanoicomputercdn.com/media/banner/09_Dec3d401a771449960d10a6faddd8010ca5.jpg" aspect-ratio="1.5"></v-img>
              <v-img class="mr-2" src="https://hanoicomputercdn.com/media/banner/09_Dec8e2398936c7c65561e43241dc0bba9fe.jpg" aspect-ratio="1.5"></v-img>
              <v-img src="https://hanoicomputercdn.com/media/banner/09_Dec20b3da87b96e2efdc2617fa483b1a127.jpg" aspect-ratio="1.5"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    <v-container class="mt-10">
      

<!-- Danh sách sản phẩm - Chế độ Hiển thị lưới -->
<v-row v-if="displayType === 'grid'">
  <v-col v-for="(item, index) in displayedProducts" :key="index" cols="12" md="3">
    <router-link :to="{ name: 'product-detail', params: { id: item.ProductsId } } " style="text-decoration: none;">
          <v-hover v-slot="{isHovering,props}" open-delay="1">
            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
              <v-img :src="'https://localhost:44367/images/' + item.ImagerUrl" height="200"></v-img>
              <v-card-title style="font-size: 16px;">{{ item.ProductsName }}</v-card-title>
              <!-- <v-card-subtitle>{{ item.Price }}</v-card-subtitle> -->
              <div class="main-price">
                <del class="old-price">{{ formatPrice(item.Price + (item.Price*item.promotion/100))}} đ</del>
                <div class="d-flex align-item">
                  <b class="price"> {{ formatPrice(item.Price) }} đ</b>
                  <div class="price-sale"> - {{ item.promotion }}%</div>
                </div>
              </div>
              <!-- <v-card-actions>
                <v-btn color="primary" :to="{ name: 'product-detail', params: { id: item.ProductsId } }">Xem Chi Tiết</v-btn>
                <cart-btn  :products="item"/>
              </v-card-actions> -->
            </v-card>
          </v-hover>
        </router-link>
        </v-col>
      </v-row>
      
      
      <div v-if="!products.length">Giàu rồi bán gì nữa sang shop khác đi</div>

      <!-- Hiển thị phân trang -->
      <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages" @input="updateDisplayedProducts"></v-pagination> 
      
      </v-container>
   
  </div>
</template>

<script>
import ProductDetailDialog from '@/components/ProductDetailDialog.vue';
import axios from 'axios';
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import CartBtn from '@/components/CartBtn.vue';
import { mapState } from 'vuex';
import numeral from 'numeral';
export default {
  components: {
    ProductDetailDialog,
    TopBar,
    FooterBar,
    CartBtn,
  },
  data() {
    return {
      dialog: false,
      selectedProduct: null,
      displayProduct:[],
      products: [],
      laptopCategories: [
        { id: 1, name: 'Laptop Dell', icon: 'mdi-laptop' },
        { id: 2, name: 'Laptop Acer', icon: 'mdi-laptop' },
        { id: 3, name: 'Laptop Asus', icon: 'mdi-laptop' },
        { id: 4, name: 'Laptop HP', icon: 'mdi-laptop' },
        { id: 5, name: 'Laptop Lenovo', icon: 'mdi-laptop' },
      ],
      displayType: 'grid',
      displayTypes: ['grid', 'list'],
      itemsPerPage: 16,
      currentPage: 1,

      silders: [
          {
            id: 1,
            url: "https://hanoicomputercdn.com/media/banner/05_Dec42b8748f5d09ddb7b69643958c5f7580.jpg"
          },
          {
            id: 2,
            url: "https://hanoicomputercdn.com/media/banner/10_Nov54996437df548ee7736b9ec3939ffc2b.jpg"
          },
          {
            id: 3,
            url: "https://hanoicomputercdn.com/media/banner/11_Nov7b239a58cc35a66d8b8b572522be1bef.jpg"
          }
        ]
    };
  },
 
  computed: {
    computedNewPrice() {
      // Tính toán giá mới dựa trên giảm giá
      //return (this.Product[0].Price * (100 - this.Product[0].promotion) / 100).toFixed(0);
      return (this.Product[0].Price + (this.Product[0].Price * (this.Product[0].promotion / 100))).toFixed(0);

    },
    displayedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const displayed = this.products.slice(start, end);
    console.log('Displayed Products:', displayed);
    return displayed;
  },
 
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  // Sử dụng mapState để lấy kết quả tìm kiếm từ Vuex
  ...mapState(['searchResults']),
  searchResults() {
  console.log('Search Results:', this.searchResults);
    return this.searchResults;
  },
  },  
  mounted() {
    this.fetchProducts();
  },
  methods: {
    formatPrice(price) {
      return numeral(price).format('0,0');
    },

    async fetchProducts() {
      try {
        // const response = await axios.get('https://localhost:44384/api/Product');
        const response = await axios.get('https://localhost:44367/api/Products/GetProducts');       
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
      }
    },
    displayProducts(){
      axios.get('https://localhost:44367/api/Products/GetProducts')
            .then(response =>{
                this.displayProduct = response.data;
                console.log(this.displayProduct)
            }).catch(error => {
                console.log(error)
            });

    },
    addToCart(product) {
      console.log('Đã thêm vào giỏ hàng:', product);
    },
    updateDisplayedProducts() {
    },
  },
  created(){
    this.displayProducts()
  }
};
</script>
<style scoped>
.old-price{
  font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    color: var(--grey-bold,#8d94ac);
    margin-top: 8px;
    display: block;
    height: 20px;
}
.price{
    margin-left: 15px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
}
.price-sale{
  border: 2px solid red;
    width: 43px;
    height: 24px;
    line-height: 21px;
    text-align: center;
    margin-left: 8px;
    color: red;
    font-size: 12px;
    font-weight: 600;
    margin-left: 15px;
}


</style>

