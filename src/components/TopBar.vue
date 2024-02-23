<template>
    <div>
      <v-app-bar >

        <router-link to="/" class="text-decoration-none">
          <v-app-bar-title style="color: red; font-weight: 800;" class="ml-10"> DN Store</v-app-bar-title>
      </router-link>

        
        <v-btn  :to="{ name: 'CategoryPage', params: { id: 1 } }">Hp</v-btn>
        <v-btn :to="{ name: 'CategoryPage', params: { id: 2 } }">Asus</v-btn>
        <v-btn :to="{ name: 'CategoryPage', params: { id: 3 } }">Dell</v-btn>
        <v-btn :to="{ name: 'CategoryPage', params: { id: 4 } }">Acer</v-btn>
        <v-btn :to="{ name: 'CategoryPage', params: { id: 8 } }">Lenovo</v-btn>

        <v-card-text>
         
      <v-text-field style="width: 450px;"
      v-model="search"
  :loading="loading"
  density="compact"
      variant="solo"
  label="Tìm kiếm sản phẩm"
  
  append-inner-icon="mdi-magnify"
  single-line
  hide-details
  :rules="[
    {
      required: true,
      message: 'Tên sản phẩm không được để trống',
    },
  ]"
  @click:append-inner="performSearch"
  @keyup.enter="performSearch"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-card-text>
        
        <v-toolbar-items>
          <!-- cart -->
          <v-btn @click="goToCartPage" >
            <v-badge  :content= "$store.state.cart.length" color="red">
              <v-icon>mdi mdi-cart-outline</v-icon>
            </v-badge>
                
          </v-btn>
          <v-card
    class="mx-auto"
    color="grey-lighten-3"
    max-width="400"
  ></v-card>
  <!-- <v-menu offset-y ref="menu">
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on" @mouseover="openMenu">
              {{ ten ? `Xin chào, ${ten} !` : 'Tài khoản' }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item link @click="logout">Đăng xuất</v-list-item>
          </v-list>
        </v-menu> -->
  <v-container fluid style="margin-right: 50px;">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-btn v-if="!isLoggedIn" color="primary" to="/login">Đăng nhập</v-btn>
          <!-- <v-btn v-if="isLoggedIn" @click="logout">Xin chào, {{ten}} ! Đăng Xuất</v-btn> -->
          <!-- <v-btn v-if="isLoggedIn" to="/ho-so">Xin chào, {{ten}} </v-btn> -->

          <v-menu v-if="isLoggedIn">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        rounded="xl"
        @click="handleItemClick(item)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title >{{ item.text }}</v-list-item-title>
        
      </v-list-item >
      
            </v-list>
          </v-menu>
          <!-- <v-dialog v-model="loginDialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="headline">Đăng nhập</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field v-model="UserName" label="Tên đăng nhập" required></v-text-field>
                  <v-text-field v-model="PassWord" label="Mật khẩu" type="password" required></v-text-field>
                  <v-btn to="login" type="submit" color="primary">Đăng nhập</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="openRegisterDialog" color="primary">Chưa có tài khoản, đăng ký ngay</v-btn>
                <v-btn @click="loginDialog = false" color="primary">Đóng</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->

          <!-- <v-dialog v-model="registerDialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="headline">Đăng ký</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field v-model="UserName" label="Tên đăng nhập" required></v-text-field>
                  <v-text-field v-model="PassWord" label="Mật khẩu" type="password" required></v-text-field>
                  <v-text-field v-model="FullName" label="Họ và tên" required></v-text-field>
                  <v-text-field v-model="Phone" label="Số điện thoại" required></v-text-field>
                  <v-btn type="submit" color="primary">Đăng ký</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="registerDialog = false" color="primary">Đóng</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->

          <!-- <v-btn @click="loginDialog = true" color="primary">Đăng nhập</v-btn> -->
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="searchDialog" max-width="600px">
      <v-card>
        <v-card-title class="headline">Kết quả tìm kiếm</v-card-title>
        <v-card-text>
          <!-- Display your search results here -->
          <ul>
            <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="searchDialog = false" color="primary">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-toolbar-items>
      </v-app-bar>
    </div>
    
</template>
  
  <script>
  import axios from 'axios';
  import { mapMutations } from 'vuex';
  export default {
    name: 'TopBar' ,
    data() {
      return {
        form: false,
        email: null,
        password: null,
        loginDialog: false,
        registerDialog: false,
        UserName: '',
        PassWord: '',
        FullName: '',
        Phone: '',
        categories: [],
        search: '',
        ten:sessionStorage.getItem('username'),
        laptopCategories: [
          { id: 1, name: 'Laptop HP', icon: 'mdi-laptop' },
          { id: 2, name: 'Laptop Asus', icon: 'mdi-laptop' },
          { id: 3, name: 'Laptop Dell', icon: 'mdi-laptop' },
          { id: 4, name: 'Laptop HP', icon: 'mdi-laptop' },
          { id: 5, name: 'Laptop Lenovo', icon: 'mdi-laptop' },
        ],
        silders: [
          {
            id: 1,
            url: "https://hanoicomputercdn.com/media/banner/05_Dec42b8748f5d09ddb7b69643958c5f7580.jpg"
          },
          {
            id: 2,
            url: "https://hanoicomputercdn.com/media/banner/10_Nov54996437df548ee7736b9ec3939ffc2b.jpg"
          },
          {
            id: 3,
            url: "https://hanoicomputercdn.com/media/banner/11_Nov7b239a58cc35a66d8b8b572522be1bef.jpg"
          }
        ],
        items:[
          {id:1, text: 'Thông tin cá nhân', icon: '  mdi-account' },
          { id:2,text: 'Đăng xuất', icon: 'mdi mdi-logout' },
         
        ]
      }
    },

    methods: {
    //   openMenu() {
    //     this.$nextTick(() => {
    // if (this.$refs.menu) {
    //   this.$refs.menu.open();
    // }
    // });
    // },
      async performSearch() {
    try {
      const response = await axios.get(`https://localhost:44367/api/Products/SearchProducts?keyword=${this.search}`);
      this.$store.commit('setSearchResults', response.data);
      this.$router.push('/search-results' ); // Use the name of your search results route
      this.$store.commit('setSearchKeyword',this.search)
    } catch (error) {
      console.error('Lỗi tìm kiếm sản phẩm:', error);
    }
  },
  ...mapMutations(['setSearchResults']),

      goToCartPage() {
      // this.$router.push('/cart')
      this.$router.push('/cart-view')
      },
        async login() {
            console.log('Đăng nhập thành công:');
            this.loginDialog = false;
            console.log(this.UserName)
      try {
        const response = await axios.post('https://localhost:44367/api/User', {
            UserName: this.UserName,
            PassWord: this.PassWord,
            
        });
      } catch (error) {
          console.error('Lỗi đăng nhập:', error);
          console.log(this.UserName)
      }
    },
    async register() {
      try {
        const response = await axios.post('https://localhost:44367/api/User', {
          username: this.UserName,
          password: this.PassWord,
          fullname: this.FullName,
          phone: this.Phone,
        });
        console.log('Đăng ký thành công:', response.data);
        this.registerDialog = false;
      } catch (error) {
        console.error('Lỗi đăng ký:', error);
      }
    },
    openRegisterDialog() {
      this.registerDialog = true;
    },
    handleItemClick(item) {
      // Thực hiện hành động khi một mục được nhấp
      console.log('Item clicked:', item.text);
      if (item.id === 2) {
        this.logout();
        alert('Đã đăng xuất')
        this.$router.push('/');
      }
      if(item.id === 1){
        this.$router.push('/ho-so');
      }
    },
  
    logout(){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userId')
      this.isLoggedIn = false; // Nếu có biến dữ liệu này
       // Nếu có biến dữ liệu này

      // Nếu cần điều hướng sau khi đăng xuất
    
      window.location.reload();
    },
  

      onSubmit () {s
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
    computed:{
      isLoggedIn() {
      // Kiểm tra xem đã đăng nhập hay chưa
      return !!sessionStorage.getItem('token');
    },
    },
    created(){
      console.log("token", sessionStorage.getItem('token'))
      console.log("token", this.ten)
      console.log("tokenID", sessionStorage.getItem('userId'))
    }
  }
  </script>
  
  <style scoped>
  .headline {
    padding: 20px;
  }
  
  .mt-5 {
    margin-top: 20px;
    border-radius: 15px;
  }
  
  .text-decoration-none {
    text-decoration: none;
  }
  
  .text-primary {
    color: #2196F3;
  }
  
  /* Additional styles for the search bar */
  .search-bar {
    width: 200px; /* Adjust the width as needed */
    border-radius: 25px; /* Set border-radius for rounding */
    margin: 0 auto; /* Center the search bar */
  }
  
  .v-input__icon--append .v-icon {
    font-size: 40px; /* Adjust the icon size as needed */
  }
  
  /* Additional styles for the menu column */
  .menu-col {
    background-color: #f0f0f0;
  }
  .menu-item {
          width: 100%; /* Chiều rộng 100% */
          box-sizing: border-box; /* Đảm bảo chiều rộng bao gồm cả padding và border */
      }
  </style>
  