<template>
    <v-app-bar color="primary">
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
       <v-tool-bar-item>
        <v-btn v-if="isLoggedIn" @click="logout">
                    Xin chào, {{ userName }}! Đăng Xuất
                </v-btn>
       </v-tool-bar-item>
    </v-app-bar>
</template>

<script>
export default {
    name: "TopBar",
    data(){
        return{
            userName: localStorage.getItem('userName') || '',
        }
       
    },
    methods:{
        logout() {
      // Xử lý đăng xuất
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      this.isLoggedIn = false; // Nếu có biến dữ liệu này
      this.userName = ''; // Nếu có biến dữ liệu này

      // Nếu cần điều hướng sau khi đăng xuất
    
      window.location.reload();
      this.$router.push({ name: 'login-admin' });
    },
    },
    
    computed: {
    isLoggedIn() {
      // Kiểm tra xem đã đăng nhập hay chưa
      return !!localStorage.getItem('token');
    },
  },
}
</script>

<style>

</style>