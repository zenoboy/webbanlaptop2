<template>
    <div>
      <v-app-bar :elevation="0" color="" class="">
        <a href="" class="text-decoration-none"><h3 class="headline mb-0 text-red">LapTop Uông Bí</h3></a>
        <v-spacer></v-spacer>
        <v-btn>Dell</v-btn>
        <v-btn>Acer</v-btn>
        <v-btn>Asus</v-btn>
        <v-btn>HP</v-btn>
        <v-btn>Lenovo</v-btn>
  
        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Chưa có gì đâu"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            v-model="search"
            @click:append-inner="performSearch"
            @keyup.enter="performSearch"
          ></v-text-field>
        </v-card-text>
  
        <v-toolbar-items>
          <v-btn @click="goToCartPage">
            <v-badge content="5" color="red">
              <v-icon>mdi mdi-cart-outline</v-icon>
            </v-badge>
          </v-btn>
          <v-card class="mx-auto" color="grey-lighten-3" max-width="400"></v-card>
  
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-dialog v-model="loginDialog" persistent max-width="600px">
                  <!-- Phần Dialog đăng nhập ở đây -->
                </v-dialog>
  
                <v-dialog v-model="registerDialog" persistent max-width="600px">
                  <!-- Phần Dialog đăng ký ở đây -->
                </v-dialog>
  
                <v-btn @click="loginDialog = true" color="primary">Đăng nhập</v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-dialog v-model="searchDialog" max-width="600px">
            <v-card>
              <v-card-title class="headline">Kết quả tìm kiếm</v-card-title>
              <v-card-text>
                <!-- Hiển thị kết quả tìm kiếm ở đây -->
                <ul>
                  <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="searchDialog = false" color="primary">Đóng</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar-items>
      </v-app-bar>
  
      <!-- Hiển thị danh sách sản phẩm từ API ở đây -->
      <v-container class="mt-10">
        <v-select v-model="displayType" :items="displayTypes" label="Hiển thị" outlined></v-select>
  
        <v-row v-if="displayType === 'grid'">
          <v-col v-for="(product, index) in displayedProducts" :key="index" cols="12" md="4">
            <v-card>
              <v-img :src="product.Avatar" alt="Hình ảnh sản phẩm" contain height="100"></v-img>
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ product.ProductsName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn @click="addToCart(product)">Thêm vào giỏ hàng</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
  
        <v-row v-else-if="displayType === 'list'">
          <v-col v-for="(item, index) in displayedProducts" :key="index" cols="12" md="3">
            <v-hover v-slot="{isHovering,props}" open-delay="1">
              <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
                <v-img :src="'https://localhost:44367/images/' + item.ImagerUrl" height="200"></v-img>
                <v-card-title>{{ item.ProductsName }}</v-card-title>
                <v-card-subtitle>{{ item.Price }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary" :to="{ name: 'ProductDetail', params: { id: item.ProductsId } }">Xem Chi Tiết</v-btn>
                  <v-btn color="success" @click="addToCart(item)">Mua Ngay</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
  
        <div v-if="!products.length">Giàu rồi bán gì nữa sang shop khác đi</div>
  
        <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages" @input="updateDisplayedProducts"></v-pagination>
      </v-container>
  
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>{{ selectedProduct.ProductName }}</v-card-title>
          <v-card-subtitle>{{ selectedProduct.Price }}</v-card-subtitle>
          <v-img :src="selectedProduct.Avatar" alt="Hình ảnh sản phẩm"></v-img>
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
  
      <footer-bar />
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import TopBar from '@/components/TopBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
  
  export default {
    components: {
      TopBar,
      FooterBar,
    },
    data() {
      return {
        search: '', // Dữ liệu tìm kiếm
        loading: false,
        dialog: false,
        selectedProduct: null,
        products: [], // Danh sách sản phẩm từ API
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
      };
    },
    computed: {
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
    },
    methods: {
        async performSearch() {
    try {
      const response = await axios.get(`https://localhost:44367/api/Products/SearchProducts?keyword=${this.search}`);
      console.log('Kết quả tìm kiếm:', response.data);

      // Update the products with the search results
      this.products = response.data;
    } catch (error) {
      console.error('Lỗi tìm kiếm sản phẩm:', error);
    }
      },
      async fetchProducts() {
        try {
          const response = await axios.get('https://localhost:44367/api/Products/GetProducts');
          this.products = response.data;
        } catch (error) {
          console.error('Lỗi khi lấy sản phẩm:', error);
        }
      },
      addToCart(product) {
        console.log('Đã thêm vào giỏ hàng:', product);
      },
      updateDisplayedProducts() {},
      goToCartPage() {
        this.$router.push('/cart');
      },
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style>
  /* CSS styles ở đây */
  </style>
  