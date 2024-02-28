<template>
<<<<<<< HEAD
    <div>
        <div style="margin-top: 50px;" id="nav1">
          <ul>
            <li><a href="#">Dell</a>
              <ul>
                
                <v-row>
                  <v-col>
                    <p>Phân loại</p>
                <li><a href="#">Dell1</a></li>
                <li><a href="#">Dell2</a></li>
                <li><a href="#">Dell3</a></li>
                <li><a href="#">4</a></li>

                  </v-col>
                  <v-col>
                    <p>Khoảng giá</p>
                <li><a href="#">Dưới 10tr</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                  </v-col>
                </v-row>
              </ul>
            </li>
            <li><a href="#">HP</a></li>
            <li><a href="#">Asus</a>
              <ul>
                
                <v-row>
                  <v-col>
                    <p>Phân loại</p>
                <li><a href="#">Dell1</a></li>
                <li><a href="#">Dell2</a></li>
                <li><a href="#">Dell3</a></li>
                <li><a href="#">4</a></li>

                  </v-col>
                  <v-col>
                    <p>Khoảng giá</p>
                <li><a href="#">Dưới 10tr</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                  </v-col>
                </v-row>
              </ul>
            </li>
            <li><a href="#">Acer</a></li>
          </ul>
        </div>
    </div>
</template> 

<script>
export default {
  data(){
    return{
      isOpen: false,
        items: [
            {
                url: '#home',
                name: 'Home'
            },
            {
                url: '#about',
                name: 'About'
            },
            {
                url: '#service',
                name: 'Service',
                children: [
                    {
                        url: '#service1',
                        name: 'Service1'
                    },
                    {
                        url: '#service2',
                        name: 'Service2'
                    },
                    {
                        url: '#service3',
                        name: 'Service3'
                    },
                ]
            },
            {
                url: '#contact',
                name: 'Contact'
            }
        ]
    }
  },
  methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
    }
}
</script>

<style>

#nav1 {
    max-width: 200px;    
    background: #007db9;
}


#nav1 > ul {
    
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: relative;
}

#nav1 > ul > li {
    display: inline-block;
    width: 100%;
  }
  #nav1 > ul > li > ul {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #f9f9f9;
    padding: 0;
    width: 600px;
    white-space: nowrap;
    transition: 0.5s;
  }
  #nav1 ul li:hover ul {
    display: block;
    
  }
  #nav1 ul li ul li {
    display: block; 
   
    background: #007db9;
  }
  #nav1 ul li ul li a {
    display: block;
    padding: 20px;
    color: #fff;
  }

#nav1 > ul > li > a {
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
}


</style>
=======
  <div>
    <v-app-bar :elevation="0" color="" class="">

      <router-link to="/" class="text-decoration-none">
      <h3 class="headline mb-0 text-red">DN Store</h3>
    </router-link>

      <v-spacer></v-spacer>
      <v-btn>Dell</v-btn>
      <v-btn>Acer</v-btn>
      <v-btn>Asus</v-btn>
      <v-btn>HP</v-btn>
      <v-btn>Lenovo</v-btn>

      <v-card-text>
    <v-text-field
    v-model="search"
:loading="loading"
:density="density"
:variant="variant"
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
<v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-btn v-if="!isLoggedIn" color="primary" to="/login">Đăng nhập</v-btn>
        <v-btn v-if="isLoggedIn" @click="logout"><v-menu offset-y>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" color=""
                    class="mr-3">
                        Lọc danh sách
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="filterByStatus(item.id)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu></v-btn>
        
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
      items: [
                { id:1,title: '/ho-so' },
                { id:4,title: 'Đăng Xuất' },
            ],
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
      ten:localStorage.getItem('username'),
      laptopCategories: [
        { id: 1, name: 'Laptop Dell', icon: 'mdi-laptop' },
        { id: 2, name: 'Laptop Acer', icon: 'mdi-laptop' },
        { id: 3, name: 'Laptop Asus', icon: 'mdi-laptop' },
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

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId')
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
    return !!localStorage.getItem('token');
  },
  },
  created(){
    console.log("token", localStorage.getItem('token'))
    console.log("token", this.ten)
    console.log("tokenID", localStorage.getItem('userId'))
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
>>>>>>> b4d01bad8e1ce520a03a74e987f3a481b4b3508f
