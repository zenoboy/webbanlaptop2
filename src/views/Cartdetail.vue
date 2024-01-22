<template>
  <v-app>
    <v-container>
      <v-app-bar app>
        <v-app-bar-title>Thanh toán đặt hàng</v-app-bar-title>
      </v-app-bar>

      <v-row>
        <v-col>
          <v-card class="order-summary">
            <v-card-title>
              <h2>Đơn hàng aaaaa</h2>
            </v-card-title>
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Sản phẩm: Sam sung</v-list-item-title>
                    <v-list-item-subtitle>Số lượng: 1</v-list-item-subtitle>
                    <v-list-item-subtitle>Giá: 1.399.000₫</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="billing-address">
            <v-card-title>
              <h2>Địa chỉ giao hàng</h2>
            </v-card-title>
            <v-form @submit.prevent="submitOrder">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="name" label="Họ tên" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="phone" label="Số điện thoại" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select v-model="province" :items="provinces" label="Tỉnh/Thành phố" required></v-select>
                  </v-col>
                  <v-col cols="12" md="6" v-if="province">
                    <v-select v-model="district" :items="districts" label="Quận/huyện" required></v-select>
                  </v-col>
                  <v-col cols="12" md="6" v-if="district">
                    <v-select v-model="ward" :items="wards" label="Phường/xã" required></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="address" label="Địa chỉ" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select v-model="shippingMethod" :items="shippingMethods" label="Chọn hình thức thanh toán" required></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn type="submit" color="primary">Thanh toán</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialogVisible" max-width="400">
      <v-card>
        <v-card-title>Thông báo</v-card-title>
        <v-card-text>
          Đặt hàng thành công! Chuyển về trang sản phẩm trong{{ countdown }} giây...
        </v-card-text>
      </v-card>
    </v-dialog>

    <footer-bar/>
  </v-app>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    FooterBar,
    
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      province: '',
      district: '',
      ward: '',
      address: '',
      shippingMethod: '',
      provinces: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'],
      districts: ['Quận 1', 'Quận 2', 'Quận 3'], // Thay bằng dữ liệu thực tế
      wards: ['Phường 1', 'Phường 2', 'Phường 3'], // Thay bằng dữ liệu thực tế
      shippingMethods: ['Thanh toán khi nhận hàng', 'Thanh toán bằng thẻ MasterCard,Visa','Thanh toán bằng chuyển khoản'],
      dialogVisible: false,
      countdown: 5,
    };
  },
  methods: {
    submitOrder() {
      // Thực hiện xử lý đặt hàng ở đây
      console.log('Submitting order...');

      // Hiển thị dialog thành công
      this.dialogVisible = true;
      this.startCountdown();
    },
    startCountdown() {
      const timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          // Khi đếm ngược kết thúc, chuyển hướng về trang sản phẩm
          clearInterval(timer);
          this.$router.push('/sanpham');
        }
      }, 1000);
    },
  },
};
</script>

<style>
/* Thêm các styles tùy chỉnh của bạn ở đây */
</style>
