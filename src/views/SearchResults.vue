<template>
    <div>
        <top-bar/>
        <div v-if="searchResults && searchResults.length > 0">
      <!-- <div v-if="searchResults && searchResults.length > 0"> -->
        <!-- Hiển thị từ khóa tìm kiếm -->
        <p><strong>Kết quả tìm kiếm :"{{ $store.state.searchKeyword }}"</strong> </p>
        <v-btn></v-btn>
  
        <!-- Hiển thị kết quả tìm kiếm -->
        <v-row>
          <v-col v-for="(item, index) in searchResults" :key="index" cols="12" md="3">
            <v-hover v-slot="{ isHovering, props }" open-delay="1">
              <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
                <v-img :src="'https://localhost:44367/images/' + item.ImagerUrl" height="200"></v-img>
                <v-card-title>{{ item.ProductsName }}</v-card-title>
                <v-card-subtitle>{{ item.Price }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary" :to="{ name: 'product-detail', params: { id: item.ProductsId } }">Xem Chi Tiết</v-btn>
                  <cart-btn :products="item" />
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
  
      <div v-else>
        <p> Ôi! Rất tiếc không tìm thấy sản phẩm nào...!</p>
        </div>
        <footer-bar/>   

</div>
</template>

<script>
import CartBtn from '@/components/CartBtn.vue';
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
  export default {
    components: {
    TopBar,
    FooterBar,
    CartBtn,
  },    
    computed: {
      searchResults() {
        return this.$store.state.searchResults;
      },
    },
  };
  </script>
  
  <style>
  /* Các quy tắc CSS cho component SearchResults nếu cần */
  </style>
  