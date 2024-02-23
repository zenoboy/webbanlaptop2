<template>
  <div>
    <v-img class="mx-auto my-6" max-width="228" src="https://cdn.pixabay.com/photo/2023/09/19/21/32/ai-generated-8263507_1280.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Đăng nhập</div>
      <v-text-field v-model="username" density="compact" placeholder="Tên đăng nhập" prepend-inner-icon="mdi mdi-account-edit" variant="outlined"></v-text-field>
      <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" placeholder="Mật khẩu" prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">Forgot login password?</a>
      </div>
      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login" @keyup.enter="login">
        Log In
      </v-btn>
      
      <v-card-text class="text-center">
      <!-- Sử dụng router-link để tạo liên kết -->
      <router-link class="text-blue text-decoration-none" to="/signup">
        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
      </router-link>
    </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      visible: false,
      username: '',
      password: '',
    };
  },

  methods: {
    async login() {
      try {
        if (!this.username || !this.password ) {
          alert("Vui lòng điền đầy đủ thông tin.");
          return;
        }
        const loginData = {
          UserName: this.username,
          UserPassword: this.password
        };

        const response = await axios.post('https://localhost:44367/api/Login/Login', loginData);

        
        const { Token, Message, RedirectUrl, Role,UserId } = response.data;
        
        //alert(Message);
        
        //alert(Role);
      

        sessionStorage.setItem('token', JSON.stringify(Token))
        sessionStorage.setItem('username', this.username)
        
        sessionStorage.setItem('userId', UserId)


        // console.log("userID", UserId)
        // Redirect the user based on the user role
        if (Role === 'admin') {
          this.$router.push('/admin/index');
        } else {
          this.$router.push('/');
          
          
          

        }
      } catch (error) {
        console.error('Login failed', error);
        // Handle the error, e.g., show an error message to the user
      }
    },
  },

  
};
</script>
