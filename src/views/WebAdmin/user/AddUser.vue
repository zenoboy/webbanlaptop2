<template>
    <v-dialog
        v-model="dialog"
        max-width="640px">
        <v-card>
            <v-card-title>Thêm mới nhân viên</v-card-title>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="Họ và tên"
                                    v-model="data.FullName"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Số điện thoại"
                                    v-model="data.Phone"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Email"
                                    v-model="data.Email"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Địa chỉ"
                                    v-model="data.Address"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Tài khoản"
                                    v-model="data.UserName"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Mật khẩu"
                                    v-model="data.Password"
                                    type="password"
                                    >
                                </v-text-field>
                            </v-col>
                            <v-col cols="5" >
                                    <v-select 
                                        v-model="data.selectedRole" 
                                        :options="Role"
                                        :items="Role" 
                                        label="Quyền" 
                                        item-title="name"
                                        item-value="id"
                                        
                                        :hint="`${data.selectedRole}`"
                                    ></v-select>
 
                                </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="mr-2"
                        color="grey darken-3"
                        @click="this.$emit('close')"
                    >Hủy</v-btn>
                    <v-btn
                        color="primary"
                        @click="postUser"
                    >Lưu</v-btn>
                </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props: ['dialogAddUser'],
    data(){
        return{
            Role:[
                { id: 1, name: 'Super Admin'}, 
                { id: 2, name: 'Admin'},
            ],
            data:{
                UserName: null,
                Password: null,
                FullName: null,
                Phone: null,
                Email: null,
                Address: null,
                selectedRole: null
            }
        }
    },
    methods:{
        postUser(){
            const dataUser ={
                newUserName: this.data.UserName,
                newUserPassword: this.data.Password,
                newFullName: this.data.FullName,
                newUserPhone: this.data.Phone,
                newUserEmail: this.data.Email,
                newUserAddress: this.data.Address,
                UserRole: this.data.selectedRole
            }
            //axios.post('https://localhost:7072/api/Users/PostUsers?newUserName=admin2&newUserPassword=123456&newFullName=%C3%A1dasd&newUserPhone=12333&newUserEmail=s%40gmail.com&newUserAddress=sss')
            axios.post('https://localhost:44367/api/Users/PostUsers', null, {params: dataUser})
                .then(response =>{
                    this.$emit('close');
                    this.$emit('updateData');
                    console.log(response.status);
                })
                .catch(error =>{
                    console.log(error);

                })
        
        }
    },
    computed: {
        dialog: {
            get() {
                return this.dialogAddUser;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    }
}
</script>

<style>

</style>