<template>
    <v-footer style="background: #fbfbfb; border-top: 1px solid #dadada; margin-top: 80px; padding: 0;" class="footer-bar   d-flex flex-column">
      <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
    <div style="margin-top: 40px; margin-bottom: 40px;" class=" d-flex w-100 align-center px-4">
      <v-row>
      <v-col cols="3">
      <div class="d-flex">
        <v-icon style="height: 65px; margin-right: 15px;" color="red" size="40px">mdi mdi-truck-fast-outline</v-icon>
        <div>
          <b>CHÍNH SÁCH GIAO HÀNG</b>
          <p>Nhận hàng và thanh toán tận nhà</p>
        </div>
      </div></v-col>
      <v-divider class="border-opacity-25" vertical></v-divider>
      <v-col cols="3">
        <div class="d-flex">
        <v-icon style="height: 65px; margin-right: 15px;" color="red" size="40px">mdi mdi-sync</v-icon>
        <div>
          <b>ĐỔI TRẢ DỄ DÀNG</b>
          <p>1 đổi 1 trong 15 ngày</p>
        </div>
      </div>
      </v-col>
      <v-divider class="border-opacity-25" vertical></v-divider>
      <v-col cols="3">
        <div class="d-flex">
        <v-icon style="height: 65px; margin-right: 15px;" color="red" size="40px">mdi mdi-credit-card-outline</v-icon>
        <div>
          <b>THANH TOÁN TIỆN LỢI</b>
          <p>Trả tiền mặt, trả góp 0%</p>
        </div>
      </div>
      </v-col>
      <v-divider class="border-opacity-25" vertical></v-divider>
      <v-col cols="3">
        <div class="d-flex">
        <v-icon style="height: 65px; margin-right: 15px;" color="red" size="40px">mdi mdi-comment-alert-outline</v-icon>
        <div>
          <b>HỖ TRỢ NHIỆT TÌNH</b>
          <p>Tư vấn, giải đáp mọi thắc mắc</p>
        </div>
      </div>
      </v-col>
    </v-row>
    </div>
    <div style="background: #202c43;" class="w-100 px-4">
      <v-container>
      <div  class="pt-0">
        <p style="color: white; font-size: 13px; margin: 5px;">© 2017 Công ty Cổ phần công nghệ HiNET Việt Nam</p>
        <p style="color: white; font-size: 13px;margin: 5px;">Địa chỉ: P1101, Đơn nguyên 1, Tòa nhà CT4, KĐT Mỹ Đình - Mễ Trì, Nam Từ Liêm, Hà Nội</p>
        <p style="color: white; font-size: 13px;margin: 5px;">Website: www.hinet.com.vn | www.landsoft.vn | www.ebizoffice.vn</p>
        <p style="color: white; font-size: 13px; margin: 5px;">Email: info@hinet.com.vn. Điện thoại: 024 858 735 55 </p>
      </div>
    <v-divider></v-divider>

    <div style="color: white;" class=" text-center">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
</v-container>

    </div>

    

   
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      links: [
        'Chính sách bảo hành,',
        'Chính sách bảo mật',
        'Trung tâm bảo hành',
        'Đơn Vi vận chuyển',
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style scoped>
.footer-bar {

  bottom: 0;
  left: 0;
  width: 100%;
}
</style>