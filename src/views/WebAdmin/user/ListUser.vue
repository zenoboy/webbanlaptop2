<template>
    <div>
        <side-bar-admin-1/>
        <top-bar-admin-1/>
        <v-row class="mt-2">
            <v-icon>mdi-home</v-icon>
            <h3 class="ml-2">Danh sách User</h3>
            <v-spacer></v-spacer>
            <v-btn icon 
            size="small"
            color="blue"
            @click="dialogAdd = true"
            > 
            <v-icon>mdi-plus</v-icon></v-btn>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-table
                    fixed-header
                    height="550px">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã User</th>
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Chức vụ</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in User" :key=index>
                            <td>{{ index+1 }}</td>
                            <td>{{ item.UsersId }}</td>
                            <td>{{ item.UserName }}</td>
                            <td>{{ item.UserPhone }}</td>
                            <td>{{ item.UserEmail }}</td>
                            <td>{{ item.UserAddress }}</td>
                            <td>{{ item.UserRole }}</td>
                            <td><v-btn>Ha</v-btn></td>
                        </tr>
                    </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue'
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue'
import axios from 'axios'
export default {
    components: { SideBarAdmin1, TopBarAdmin1},
    name:'ListUser',
    data(){
        return{
            User:[]
        }
    },
    methods:{
        getUser(){
            axios.get('https://localhost:7072/api/Users/GetUser')
                .then(response=>{
                    this.User = response.data,
                    console.log('user', this.User)
                })
                .catch(error =>{
                    console.log(error);
                })
        }
    },
    created(){
        this.getUser();
    }
}
</script>

<style>

</style>