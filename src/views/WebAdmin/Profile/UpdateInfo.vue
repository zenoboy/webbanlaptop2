<template>
    <v-dialog
        v-model="dialog"
        max-width="640px">
        <v-card>
            <v-card-title>Cập nhật thông tin cá nhân</v-card-title>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col cols="12" >
                            <v-text-field
                                label="Họ và tên"
                                v-model="this.FullName"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" >
                            <v-text-field
                                label="Số điện thoại"
                                v-model="this.UserPhone"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" >
                            <v-text-field
                                label="Địa chỉ Email"
                                v-model="this.UserEmail"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" >
                            <v-text-field
                                label="Địa chỉ"
                                v-model="this.UserAddress"
                            ></v-text-field>
                        </v-col>
                                
                    </v-row>
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
                        @click="updateInfo"
                    >Cập nhật</v-btn>
                </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    props: ['dialogEdit','info'],
    components:{},
    data(){
        return{
            userId: null,
            FullName: null,
            UserPhone: null,
            UserEmail: null,
            UserAddress: null
        }
    },
    methods:{
        updateInfo(){
            const data={
                userId: this.userId,
                FullName: this.FullName,
                Phone: this.UserPhone,
                Email: this.UserEmail,
                Address: this.UserAddress
            }
            //axios.get('https://localhost:7072/api/Users/UpdateInfo?userId=2&FullName=Hahaa%20hihi&Phone=015525525&Email=son%40gmail.com&Address=Ha%20N%C3%B4i')
            axios.put('https://localhost:44367/api/Users/UpdateInfo', null, {params: data})
            .then(response=>{
                this.information = response.data
                this.$emit('updateData')
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
                return this.dialogEdit;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        },
    },
    watch:{
        info: function(){
            this.FullName = this.info[0].FullName;
            this.UserPhone = this.info[0].UserPhone;
            this.UserEmail = this.info[0].UserEmail; 
            this.UserAddress = this.info[0].UserAddress;
            this.userId = this.info[0].UsersId;
        }
    }
    // created(){
    //     this.getInfo();
    // }
}
</script>

<style>

</style>