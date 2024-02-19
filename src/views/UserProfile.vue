<template>
  <div>
    <top-bar></top-bar>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        color="#425C5A"
        class="rounded-e-xl"
      >
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
          <span class="mb-6 text-caption" style="color: #b49239"
            >*********@gmail.com</span
          >
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
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters> </v-row>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-text-field 
            v-model="name" 
            label="Họ tên" 
            required 
            outlined 
            />
            <v-text-field
              v-model="phone"
              label="Số điện thoại"
              outlined
              @input="sanitizePhoneNumber"
            />
            <v-text-field 
            v-model="name" 
            label="Mật Khẩu" 
            required 
            outlined 
            />
            <v-text-field 
            v-model="email" 
            label="Email" 
            outlined />
            <v-row v-if="user && user.length > 0">
              <v-col v-for="(item, index) in user" :key="index">
                {{ item.usersId }} - {{ item.usersName }} - {{ item.userEmail }} - {{ item.userPhone }} - {{ item.userPassword }}
              </v-col>
            </v-row>
              <v-btn color="#B49239" type="submit" v-if="valid">Cập nhật</v-btn>
          </v-form>
        </v-container>
      </v-main>
    </v-app>
    <footer-bar />
  </div>
</template>
  
  <script>
import { ref } from "vue";
import axios from "axios";
import TopBar from "@/components/TopBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "UserProfile",
  props: ["id"],
  components: {
    TopBar,
    FooterBar,
  },
  data() {
    return {
      links: [
        {
          text: "Hồ Sơ Người Dùng",
          icon: "mdi mdi-account-box-multiple",
          route: "./ho-so",
        },
        { text: "Địa Chỉ", icon: "mdi mdi-map-marker", route: "./dia-chi" },
        {
          text: "Đơn Hàng Của Tôi",
          icon: "mdi mdi-shopping",
          route: "./don-hang",
        },
        { text: "Đăng Xuất", icon: "mdi mdi-logout", route: "./login" },
      ],
      user: [],
      drawer: ref(null),
      name: "",
      phone: "",
      email: "",
      password:"",
      address: "",
      province: "",
      district: "",
      valid: true,
    };
  },
  mounted() {
  this.getUserProfile(); 
},

  methods: {
    getUserProfile() {
  axios.get('https://localhost:7182/api/Categories')
    .then(response => {
      this.categories = response.data;
    })
    .catch(error => {
      console.log(error);
    });
},
created() {
  this.getUserProfile();
},
    sanitizePhoneNumber() {
      this.phone = this.phone.replace(/\D/g, "");
    },
    navigateTo(route) {
      console.log(this.$router);
      this.$router.push(route);
    },
  },
};
</script>