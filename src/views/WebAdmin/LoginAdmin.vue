<template>
  <v-container style="">
       <v-row class="align-center" justify="center ">
         <v-col style="margin-top: 130px;" cols="12" sm="8" md="5">
           <v-card class="login-card">
             <v-card-title class="text-h5 d-flex justify-center">Đăng Nhập </v-card-title>
             <v-card-text>
               <v-form>
                 <v-text-field
                   v-model="username"
                   color="primary"
                   label="Tài khoản"
                   required
                 ></v-text-field>
                 <v-text-field
                   v-model="password"
                   label="Mật khẩu"
                   color="primary"
                   type="password"
                   required
                 ></v-text-field>
                 <div class="d-flex justify-center">
                    <v-btn @click="login" color="primary">Đăng Nhập</v-btn>
                 </div>
                 
               </v-form>
             </v-card-text>
           </v-card>
         </v-col>
       </v-row>
     </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            username: '',
            password: '',
        }
    },
    methods:{
        login(){
            if(!this.username || !this.password ){
                alert('Tài khoản, mật khẩu không được để trống ');
                return;
            }
            else{
                const loginData = {
                UserName: this.username,
                UserPassword: this.password
            };
                axios.post('https://localhost:7072/api/Login/Login', loginData)
                .then(response=>{
                    const { Token,   role,fullname,UserId } = response.data;
                    if(response.data.role == "users"){
                        alert('Sai tài khoản hoặc mật khẩu!!!')
                    }
                    else{
                        const admin ={
                            taikhoan: this.username,
                            token: JSON.stringify(Token),
                            userId: UserId,
                            role: role,
                            fullname: fullname
                        }
                        // Chuyển đối tượng admin thành chuỗi trước khi lưu vào sessionStorage
                        const adminString = JSON.stringify(admin)
                        sessionStorage.setItem('token', JSON.stringify(Token))
                        sessionStorage.setItem('username', this.username)
                        sessionStorage.setItem('userId', UserId)
                        sessionStorage.setItem('role', role)
                        sessionStorage.setItem('admin', adminString)
                        sessionStorage.setItem('fullname', fullname)
                        console.log('admin',JSON.parse(sessionStorage.getItem('admin')))

                        this.$router.push('/admin');
                    }
                    
                })
                .catch (error=>{
                    alert('Sai tài khoản hoặc mật khẩu!!!')
                    console.error('Login failed', error);
                    // Handle the error, e.g., show an error message to the user
                }) 
            }
            
            
        }
    }
}
</script>

<style>

</style>