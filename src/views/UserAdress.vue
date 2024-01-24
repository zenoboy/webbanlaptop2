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
            <div class="container">
      <div class="bar">
        <h1>Địa chỉ của tôi</h1>
      </div>
      <div class="button" >
        <v-btn
          color="red"
          dark
          @click="goToAdressDetail"
          class="mx-auto"
        >
          <v-icon style="position: relative;
                  bottom: 10px;">mdi-plus</v-icon>
          <span class="align-center" style="position: relative;
                                     bottom: 10px;" >Thêm địa chỉ</span>
          
        </v-btn>
      </div>
    </div>
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
    name: "UserAdress",
    props: ["id"],
    components: {
      TopBar,
      FooterBar,
    },
    data() {
      return {
        drawer: ref(null),
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
      goToAdressDetail() {
      this.$router.push("/chi-tiet-dia-chi").catch(err => console.error("Navigation error:", err));
        },
    },
  };
  </script>
  <style scoped>
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .v-btn {
    font-size: 15px;
    padding: 20px 40px;
  }
  .align-center {
  margin-left: 3px; 
  display: inline-block;
}

.ml-auto {
  margin-right: auto;
}
  
  </style>
  