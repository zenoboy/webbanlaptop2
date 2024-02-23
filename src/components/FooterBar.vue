<template>
    <v-footer class="footer-bar">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
        
      </v-btn>
      <v-col class="text-left mt-4" cols="12">
         <strong>Kết nối với chúng tôi</strong>
        <a href="https://web.facebook.com/dungsupe1"><v-icon class="mx-2">mdi-facebook</v-icon></a>
        <a href="https://www.youtube.com/channel/UCcGHlNEu9VMFKkDU4NoumWw"><v-icon class="mx-2">mdi-youtube</v-icon></a>
      </v-col>
    </v-row>
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
    }),
}
</script>

<style scoped>
.footer-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>