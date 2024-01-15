<template>
  <div>
    <TopBar />
    <v-app>
      <v-container>
        <v-row>
          <v-col>
            <section id="danh-muc">
              <v-row>
                <v-col v-for="(product, index) in products" :key="index">
                  <v-card>
                    <v-img :src="product.image" alt="Sản phẩm"></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>Giá: {{ product.price }}</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </section>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <section id="gio-hang-thong-tin">
              <h2 class="text-center">Giỏ hàng của bạn</h2>
              <v-data-table :items="cart" :headers="headers" hide-default-footer>
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Tổng tiền: {{ getTotalPrice() }}đ</v-toolbar-title>
                  </v-toolbar>
                </template>
              </v-data-table>
            </section>
            <section id="gio-hang-nut">
              <v-btn @click="placeOrder" class="dat-hang-button">Tiến hành đặt hàng</v-btn>
            </section>
          </v-col>
        </v-row>
      </v-container>
      <FooterBar />
    </v-app>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  components: { TopBar, FooterBar },
  data() {
    return {
      products: [
        { name: 'Sản phẩm 1', image: 'product-1.jpg', price: '100.000' },
        { name: 'Sản phẩm 2', image: 'product-2.jpg', price: '200.000' },
        { name: 'Sản phẩm 3', image: 'product-3.jpg', price: '300.000' },
      ],
      cart: [
        { id: 1, name: 'Sản phẩm 1', price: '100.000', quantity: 1 },
        { id: 2, name: 'Sản phẩm 2', price: '200.000', quantity: 2 },
        { id: 3, name: 'Sản phẩm 3', price: '300.000', quantity: 3 },
      ],
      headers: [
        { text: 'Tất cả', value: 'id' },
        { text: 'Đơn giá', value: 'price' },
        { text: 'Số lượng', value: 'quantity' },
        { text: 'Thành tiền', value: 'total' },
      ],
    };
  },
  methods: {
    getTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    placeOrder() {
      
      this.$router.push('/cartdetail')
      console.log('Placing order...');
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
