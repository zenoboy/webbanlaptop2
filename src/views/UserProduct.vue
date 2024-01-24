<template>
  <div>
    <top-bar></top-bar>
    <v-app>
      <v-navigation-drawer v-model="drawer" app color="#425C5A" class="rounded-e-xl" >
        <v-sheet color="#3D5654" class="pa-4 rounded-te-xl text-center">
          <v-progress-circular
            model-value="80"
            color="#B49239"
            :size="100"
            :width="2"
            class=""
          >
            <v-avatar size="85">
              <v-img src="3033143.png"></v-img>
            </v-avatar>
          </v-progress-circular>

          <div class="mt-4">
            <v-avatar>
              <v-icon color="white">mdi mdi-account</v-icon>
            </v-avatar>
          </div>
          <span class="mb-6 text-caption" style="color: #B49239;">*********@gmail.com</span>
        </v-sheet>

        <v-list>
          <v-list-item-group v-if="links.length">
            <v-list-item
              v-for="(item, i) in links"
              :key="i"
              :value="item"
              active-class="border"
              :ripple="false"
              @click="navigateTo(item.route)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" color="#B49239"></v-icon>
              </template>

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters>
        </v-row>
      </v-navigation-drawer>
      <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-2">
              <v-tabs v-model="selectedTab" background-color="transparent" color="black">
                <v-tab v-for="(tab, index) in tabs" :key="index" @click.capture.stop="changeTab(index)">
                  {{ tab }}
                </v-tab>
              </v-tabs>
            </v-card>
                </v-col>
              </v-row>
        <v-row v-if="selectedTab === 0">
          <v-col cols="12">
            <v-card class="pa-2" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              
<div class="icon-empty"><svg width="132" height="170" viewBox="0 0 132 170" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="white" ><path d="M125.486 120.371H113.585V91.6562H132V113.845C132 117.451 129.086 120.371 125.486 120.371Z" fill="#A1AAAF"></path><path d="M99.3294 167.226C95.6392 170.922 89.6482 170.922 85.949 167.226L50.2828 131.497C46.5926 127.801 46.5926 121.799 50.2828 118.094C53.973 114.397 59.964 114.397 63.6633 118.094L99.3294 153.822C103.029 157.528 103.029 163.529 99.3294 167.226Z" fill="#E1E4E6"></path><path d="M128.553 117.208C126.649 117.208 125.107 115.662 125.107 113.755V91.9459C125.107 91.8465 125.125 91.7561 125.134 91.6567H125.107V6.06465C125.107 2.72051 122.4 0 119.052 0H42.7036C39.3652 0 36.6494 2.71147 36.6494 6.06465V114.315C36.6494 117.66 39.3562 120.38 42.7036 120.38H113.585H125.107H125.486C129.086 120.38 132 117.461 132 113.855V113.764C132 115.662 130.457 117.208 128.553 117.208Z" fill="#E1E4E6"></path><path d="M40.1233 148.932C62.2828 148.932 80.2466 130.937 80.2466 108.739C80.2466 86.5409 62.2828 68.5459 40.1233 68.5459C17.9638 68.5459 0 86.5409 0 108.739C0 130.937 17.9638 148.932 40.1233 148.932Z" fill="#CBD1D6"></path><path d="M40.1235 136.577C55.4712 136.577 67.9129 124.113 67.9129 108.739C67.9129 93.3647 55.4712 80.9014 40.1235 80.9014C24.7758 80.9014 12.334 93.3647 12.334 108.739C12.334 124.113 24.7758 136.577 40.1235 136.577Z" fill="white"></path><path d="M51.6001 97.2418C52.9084 98.5524 52.9084 100.676 51.6001 101.987L33.3836 120.226C32.0753 121.537 29.955 121.537 28.6467 120.226C27.3385 118.916 27.3385 116.792 28.6467 115.481L46.8633 97.2328C48.1715 95.9313 50.2918 95.9313 51.6001 97.2418Z" fill="#F56F65"></path><path d="M51.6001 120.226C50.2918 121.537 48.1715 121.537 46.8633 120.226L28.6467 101.978C27.3385 100.667 27.3385 98.5435 28.6467 97.2329C29.955 95.9224 32.0753 95.9224 33.3836 97.2329L51.6001 115.481C52.9084 116.792 52.9084 118.925 51.6001 120.226Z" fill="#F56F65"></path><path d="M55.9488 25.7136C59.7112 25.7136 63.3112 22.4056 63.1398 18.5101C62.9684 14.6056 59.9819 11.3066 55.9488 11.3066C52.1864 11.3066 48.5864 14.6146 48.7578 18.5101C48.9293 22.4146 51.9157 25.7136 55.9488 25.7136Z" fill="white"></path><path d="M80.1925 25.7136C83.9549 25.7136 87.5549 22.4056 87.3834 18.5101C87.212 14.6056 84.2255 11.3066 80.1925 11.3066C76.4301 11.3066 72.8301 14.6146 73.0015 18.5101C73.1819 22.4146 76.1684 25.7136 80.1925 25.7136Z" fill="white"></path><path d="M104.445 25.7136C108.207 25.7136 111.807 22.4056 111.636 18.5101C111.464 14.6056 108.478 11.3066 104.445 11.3066C100.683 11.3066 97.0825 14.6146 97.2539 18.5101C97.4344 22.4146 100.421 25.7136 104.445 25.7136Z" fill="white"></path><path d="M108.28 44.9557H51.1307C49.678 44.9557 48.4961 43.7717 48.4961 42.3165V40.8071C48.4961 39.352 49.678 38.168 51.1307 38.168H108.28C109.732 38.168 110.914 39.352 110.914 40.8071V42.3165C110.914 43.7717 109.732 44.9557 108.28 44.9557Z" fill="white"></path><path d="M108.343 61.6042H51.0585C49.642 61.6042 48.4961 60.4563 48.4961 59.0373V57.7358C48.4961 56.3168 49.642 55.1689 51.0585 55.1689H108.343C109.759 55.1689 110.905 56.3168 110.905 57.7358V59.0373C110.914 60.4473 109.759 61.6042 108.343 61.6042Z" fill="white"></path></g></svg></div>
									            <div class="text-center" v-if="!hasPurchased">Bạn chưa mua gì</div>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="!hasPurchased">
      <v-col cols="12" class="text-center mt-4">
        <v-btn @click="goToHomePage" color="primary">
          Tiếp tục mua hàng
        </v-btn>
      </v-col>
    </v-row>
        <v-row v-else >
          <v-col cols="12">
            <v-card class="pa-2">
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
    </v-app>
    <footer-bar />
  </div>
</template>

<script>
import { ref, axios } from "vue";
import TopBar from "@/components/TopBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "UserProduct",
  props: ["id"],
  components: {
    TopBar,
    FooterBar,
  },
  data() {
    return {
      drawer: ref(null),
      selectedTab: 0,
      tabs: ["Đặt hàng", "Chờ Xác Nhận", "Đã Xác Nhận", "Đang vận chuyển", "Hoàn thành"],
      links: [
        { text: "Hồ Sơ Người Dùng", icon: "mdi mdi-account-box-multiple", route: "/ho-so" },
        { text: "Địa Chỉ", icon: "mdi mdi-map-marker", route: "/dia-chi" },
        { text: "Đơn Hàng Của Tôi", icon: "mdi mdi-shopping", route: "/don-hang" },
        { text: "Đăng Xuất", icon: "mdi mdi-logout", route: "/login" },
      ],
      hasPurchased: false,
    };
  },
  methods: {
    navigateTo(route) {
      console.log("Route to navigate:", route);
      this.$router.push(route).catch(err => console.error("Navigation error:", err));
    },
    changeTab(index) {
      this.selectedTab = index;

    },
    goToHomePage() {
      this.$router.push("/").catch(err => console.error("Navigation error:", err));
    },
  },
};
</script>
