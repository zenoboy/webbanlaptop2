<template>
    <div>
      <top-bar></top-bar>
      <v-app>
        <v-navigation-drawer v-model="drawer" app color="#425C5A" class="rounded-e-xl">
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
          <div style="position: relative; z-index: 9999" class="mt-2">
            <v-img src="map.png" contain max-height="100"></v-img>
          </div>
        </v-navigation-drawer>
      </v-app>
      <footer-bar />
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
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
        links: [
          { text: "Hồ Sơ Người Dùng", icon: "mdi mdi-account-box-multiple", route: "/ho-so" },
          { text: "Địa Chỉ", icon: "mdi mdi-map-marker"},
          { text: "Đơn Hàng Của Tôi", icon: "mdi mdi-shopping", route: "/don-hang"},
          { text: "Đăng Xuất", icon: "mdi mdi-logout" },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        console.log(this.$router); 
        this.$router.push(route);
      },
    },
  };
  </script>
  