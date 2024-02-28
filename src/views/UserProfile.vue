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

          <div  class="mt-4">
            <v-avatar>
              <v-icon color="white">mdi mdi-account</v-icon>
            </v-avatar>
          </div>
          <span v-if="user" class="mb-6 text-caption" style="color: #02f668; font-size:18px"
            > <p style="font-size:18px; font-weight: 800;">{{ user[0].FullName }}</p></span
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

              <v-list-item-title >{{ item.text }}</v-list-item-title>
              
            </v-list-item>
     
          </v-list-item-group>
        </v-list>
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters> </v-row>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <v-form ref="form" v-if="user">
            <v-text-field 
            v-model="user[0].FullName" 
            label="Họ tên" 
            required 
            outlined 
            density="compact"
            />
            <v-text-field
              v-model="user[0].UserPhone"
              label="Số điện thoại"
              outlined
              @input="sanitizePhoneNumber"
              density="compact"
            />
            <v-text-field 
            v-model="user[0].UserEmail" 
            label="Email" 
            required 
            outlined 
            density="compact"
            />
            <v-text-field 
            v-model="user[0].UserAddress" 
            label="Địa Chỉ" 
            outlined
            density="compact" />
            
              <v-btn color="#B49239" @click="updateProfile">Cập nhật</v-btn>
          </v-form>
        </v-container>
      </v-main>
    </v-app>
    <!-- <footer-bar /> -->
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

        {
          text: "Đơn Hàng Của Tôi",
          icon: "mdi mdi-shopping",
          route: "./don-hang",
        },

      ],
      user:null,
      drawer: ref(null),
      name: "",
      phone: "",
      email: "",
      address: "",
      valid: true,
      userId: sessionStorage.getItem('userId'),
      // userId: 1
    };
  },
  mounted() {
  this.getUserProfile(); 
},

  methods: {
    getUserProfile() {
      axios.get('https://localhost:44367/api/Users/GetUserById?userId='+this.userId)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateProfile(){
      const data={
        userId: this.userId,
        FullName: this.user[0].FullName,
        Phone: this.user[0].UserPhone,
        Email: this.user[0].UserEmail,
        Address: this.user[0].UserAddress
      }
      axios.put('https://localhost:44367/api/Users/UpdateInfo', null, {params: data})
        .then(response=>{
          this.information = response.data
          this.$emit('updateData')
          alert('Cập nhật thành công')
          this.$emit('close');
        })
        .catch(error=>{
          console.log(error)
        })
    },
    navigateTo(route) {
      console.log(this.$router);
      this.$router.push(route);
    },
    logout(){
      alert('àdf')
    }
  },
  created() {
  this.getUserProfile();
},
    sanitizePhoneNumber() {
      this.phone = this.phone.replace(/\D/g, "");
    },
    
};
</script>