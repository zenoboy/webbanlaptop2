<template>
    <v-dialog
        v-model="dialog"
        max-width="640px">
        <v-card>
            <v-card-title>Cập nhật quyền User</v-card-title>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row v-if="User">
                            <v-col class="d-flex" cols="12">
                                <b>Họ và tên:</b> <p style="margin-left: 15px; margin-bottom: 10px;">{{ User[0].FullName }}</p>
                            </v-col>
                            <v-col class="d-flex" cols="12">
        
                                <b>Số điện thoại:</b> <p style="margin-left: 15px; margin-bottom: 10px;">{{ User[0].UserPhone }}</p>
                            </v-col>
                            <v-col class="d-flex" cols="12">
                                <b>Email:</b> <p style="margin-left: 15px; margin-bottom: 10px;">{{ User[0].UserEmail }}</p>
                            </v-col>
                            <v-col  class="d-flex" cols="12">
                                
                                <b>Địa chỉ:</b> <p style="margin-left: 15px; margin-bottom: 10px;">{{ User[0].UserAddress }}</p>

                            </v-col>
                        
                            <v-col cols="5" >
                                    <v-select 
                                        v-model="User[0].UserRole" 
                                        :options="this.userRole"
                                        :items="this.userRole" 
                                        label="Quyền" 
                                        item-title="name"
                                        
                                        item-value="id"
                                        
                                        :hint="`${User[0].UserRole}`"
                                    ></v-select>
                   
                                </v-col>
                        </v-row>
                        
                    </v-container>
                </v-form>
            </v-card-text>
            
                        
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="updateRole"  variant="flat" color="success">Xác nhận</v-btn>
                <v-btn @click="this.$emit('close')"  variant="flat" color="error">Hủy</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props: ['dialogEditUser', 'UsersId'],
    data(){
        return{
            userRole: [
                { "id": "super", "name": "Super Admin"}, 
                { "id": "admin", "name": "Admin"},
                { "id": "users", "name": "Khách hàng"},
            ],
            
            User: null
        }
    },
    methods:{
        getUser(){
            axios.get('https://localhost:7072/api/Users/GetUserById?userId='+this.UsersId)
            .then(response=>{
                this.User = response.data
                console.log('user', this.User)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        updateRole(){
            axios.put('https://localhost:7072/api/Users/UpdateRole?userId='+this.UsersId+'&UserRole='+this.User[0].UserRole)
            .then(response=>{
                console.log('update',response.data);
                    alert("Cập nhật quyền thành công!")
                    this.$emit('updateData');
                    // Quay trở lại trang trước
                    this.$emit('close');
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    computed: {
        dialog: {
            get() {
                return this.dialogEditUser;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    },
    watch:{
        UsersId: function (){
            this.getUser()
        }
    }
}
</script>

<style>

</style>