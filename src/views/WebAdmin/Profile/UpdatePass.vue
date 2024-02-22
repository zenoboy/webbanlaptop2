<template>
    <v-dialog
    v-model="dialog"
    max-width="450px">
        <v-card>
            <v-card-title>Thay đổi mật khẩu</v-card-title>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Mật khẩu cũ"
                                v-model="oldPass"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Mật khẩu mới"
                                v-model="newPass"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Nhập lại mật khẩu mới"
                                v-model="reNewPass"
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
                        @click="updatePass"
                    >Cập nhật</v-btn>
                </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props: ['dialogUpdatePass', 'info'],
    components:{},
    data(){
        return{
            userId: null,
            oldPass: null,
            newPass: null,
            reNewPass: null
        }
    },
    methods:{
        updatePass(){
            if(this.newPass !== this.reNewPass){
                alert('Mật khẩu nhập lại không khớp')
                this.oldPass=null;
                this.newPass=null;
                this.reNewPass=null;
                
            }
            else{
                const data={
                    userId: this.userId,
                    currentPassword: this.oldPass,
                    newPassword: this.newPass
                }
                axios.post('https://localhost:44367/api/Users/ChangePassword', null, {params: data})
                .then(response=>{
                    alert("Thay đổi mật khẩu thành công!!!")
                    console.log(response.data)
                    this.oldPass=null;
                    this.newPass=null;
                    this.reNewPass=null;
                    this.$emit('close')
                })
                .catch(error=>{
                    alert("Mật khẩu cũ không đúng")
                    this.oldPass=null;
                    this.newPass=null;
                    this.reNewPass=null;
                    console.log(error)
                })
            }
            
        }
    },
    computed: {
        dialog: {
            get() {
                return this.dialogUpdatePass;
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
            
            this.userId = this.info[0].UsersId;
        }
    }
}
</script>

<style>

</style>