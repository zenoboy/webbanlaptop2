<template>
    <div>
        <side-bar-admin-1/>
        <top-bar-admin-1/>
        <h3 style="margin-bottom: 50px;">Hồ sơ của tôi</h3>
        <div v-if="information">
            <div class="d-flex">
                <b>Họ và tên:</b> <p style="margin-left: 15px; margin-bottom: 25px;">{{ information[0].FullName }}</p>
            </div>
            <div class="d-flex">
                <b>Số điện thoại:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserPhone }}</p>
            </div>
            <div class="d-flex">
                <b>Email:</b> <p style="margin-left: 15px;margin-bottom: 25px;"> {{ information[0].UserEmail }}</p>
            </div>
            <div class="d-flex">
                <b>Địa chỉ:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserAddress }}</p>
            </div>
            <div class="d-flex">
                <b>Chức vụ:</b> <p style="margin-left: 15px;margin-bottom: 25px;">{{ information[0].UserRole }}</p>
            </div>
            <div class="d-flex">
                <v-btn class="ml-3 mr-10" @click="dialogUpdate=true">Thay đổi thông tin</v-btn>
                <v-btn @click="dialogUpdatePass=true">Đổi mật khẩu</v-btn>
            </div>
        </div>
        
        

        <update-info
            :dialogEdit="dialogUpdate"
            :info="information"
            @close="dialogUpdate=false"
            @updateData="getInfo"
        />
        <update-pass
            :dialogUpdatePass="dialogUpdatePass"
            :info="information"
            @close="dialogUpdatePass=false"
            @updateData="getInfo"
        />
    </div>
    
</template>

<script>

import TopBarAdmin1 from '@/components/TopBarAdmin1.vue'
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';
import UpdateInfo from './UpdateInfo.vue';
import UpdatePass from './UpdatePass.vue';
import axios from 'axios';
export default {
    components: { TopBarAdmin1, SideBarAdmin1, UpdateInfo, UpdatePass },
    data(){
        return{
            dialogUpdate: false,
            userId: (JSON.parse(sessionStorage.getItem('admin')).userId),
            information:null,
            dialogUpdatePass: false,
        }
    },  
    methods:{
        getInfo(){
            axios.get('https://localhost:44367/api/Users/GetUserById?userId='+this.userId)
            .then(response=>{
                this.information = response.data
                console.log('info', this.information)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        this.getInfo();
    }
}
</script>

<style>

</style>