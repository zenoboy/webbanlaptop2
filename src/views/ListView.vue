<template>
  <div>
    <top-bar />
    <v-container class="mt-10">
        <v-row>
          <v-col class="menu-col" cols="2">
            <!-- <v-tooltip text="Tooltip">
            <template v-slot:activator="{ props }">
            <v-btn v-bind="props">Tooltip</v-btn>
            </template>
            </v-tooltip> -->
            <!-- <div class="menu-item mt-10"  v-for="category in laptopCategories" :key="category.id">
              <a href="" class="text-decoration-none"><v-icon>{{ category.icon }}</v-icon>
              <span>{{ category.name }}</span>
            </a>
            </div> -->
            <div class="menu-item mt-10 col" v-for="category in laptopCategories" :key="category.id">
      <a href="" class="text-decoration-none">
          <v-icon>{{ category.icon }}</v-icon>
          <span>{{ category.name }}</span>
      </a>
      
  </div>
  
          </v-col>
          <v-col cols="10">
            <v-carousel cycle="100px">
              <v-carousel-item v-for="(item,index) in silders" :key="item.id" :src="item.url" cover></v-carousel-item>
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
      <v-select v-model="displayType" :items="displayTypes" label="Hiển thị" outlined></v-select>

<!-- Danh sách sản phẩm - Chế độ Hiển thị lưới -->
<v-row v-if="displayType === 'grid'">
  <v-col v-for="(product, index) in displayedProducts" :key="index" cols="12" md="4">
    <v-card>
      <!-- Sửa tên thuộc tính ở đây -->
      <v-img :src="product.productimg" alt="Hình ảnh sản phẩm" cover></v-img>
      <v-card-text>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ product.productName }}</v-list-item-title>
            <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <product-detail-dialog
              :dialog="dialog"
              :selectedProduct="selectedProduct"
              @add-to-cart="addToCart"
              @close-dialog="closeDialog"
            />
            <v-btn @click="addToCart(product)">Thêm vào giỏ hàng</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>


      <!-- Danh sách sản phẩm - Chế độ Hiển thị danh sách -->
      <v-list v-else-if="displayType === 'list'">
        <v-list-item-group>
          <v-list-item v-for="(product, index) in displayedProducts" :key="index">
            <v-list-item-avatar>
              <v-img :src="product.productimg" alt="Hình ảnh sản phẩm"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ product.productName }}</v-list-item-title>
              <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click="addToCart(product)">Thêm vào giỏ hàng</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- Hiển thị phân trang -->
      <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages" @input="updateDisplayedProducts"></v-pagination>
      <footer-bar/>    
      </v-container>
      <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>{{ selectedProduct.productName }}</v-card-title>
        <v-card-subtitle>{{ selectedProduct.price }}</v-card-subtitle>
        <v-img :src="selectedProduct.Productimg" alt="Hình ảnh sản phẩm"></v-img>
        <v-card-text>
          <!-- Thêm thông tin chi tiết sản phẩm ở đây -->
          {{ selectedProduct.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addToCart(selectedProduct)">Thêm vào giỏ hàng</v-btn>
          <v-btn @click="dialog = false">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      
  </div>
</template>

<script>
import ProductDetailDialog from '@/components/ProductDetailDialog.vue';
import axios from 'axios';
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    ProductDetailDialog,
    TopBar,
    FooterBar,
  },
  data() {
    return {
      dialog: false,
      selectedProduct: null,
      
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
      itemsPerPage: 6,
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
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://localhost:44384/api/Product');
        this.products = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
      }
    },
    addToCart(product) {
      console.log('Đã thêm vào giỏ hàng:', product);
    },
    updateDisplayedProducts() {
    },
  },
};
</script>
<style>

</style>

