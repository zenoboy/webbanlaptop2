<template>
    <div v-if="yourCondition">
    <!-- Nội dung của phần tử chỉ hiển thị khi điều kiện là true -->
    <v-row>
      <v-col>
        <h1>KẾT QUẢ TÌM KIẾM: "{{ searchKeyword }}"</h1>
        <!-- Hiển thị danh sách sản phẩm tìm kiếm -->
        <v-row v-if="searchResults.length > 0">
          <v-col v-for="(product, index) in searchResults" :key="index" cols="12" md="4">
            <v-card>
              <!-- Hiển thị thông tin sản phẩm, bạn cần điều chỉnh tùy theo cấu trúc dữ liệu của sản phẩm -->
              <v-img :src="product.Avatar" alt="Hình ảnh sản phẩm" contain height="100"></v-img>
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ product.ProductsName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <!-- Thêm sản phẩm vào giỏ hàng -->
                    <v-btn @click="addToCart(product)">Thêm vào giỏ hàng</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- Hiển thị thông báo nếu không có kết quả tìm kiếm -->
        <v-row v-else>
          <v-col>
            <p>Không tìm thấy kết quả nào.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
    
</template>
  <script>
  export default {
    props: ['searchResults'],
    computed: {
      searchKeyword() {
    return this.$route.params.searchResults; 
  },
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  /* ... (phần code còn lại của style) */
  </style>
  