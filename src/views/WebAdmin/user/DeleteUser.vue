<template>
    <v-dialog
    maxWidth="450px"
    v-model="dialog"
    
    >
    <v-card>
        <v-alert type="error">
            <v-row align="center">
                <v-col cols="11" class="text-center">
                    Bạn có chắc chắn không ?
                </v-col>
            </v-row>
            <v-row align="center">
                <v-spacer></v-spacer>
                <v-col cols="5">
                    <v-btn variant="text"
                        @click="deleteUser"
                        >Đồng ý</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="text"
                    @click="this.$emit('close')">Hủy bỏ</v-btn>
                </v-col>
            </v-row>
        </v-alert>
    </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props:['dialogDeleteUser', 'UsersId'],
    methods:{
        deleteUser(){
            axios.delete('https://localhost:44367/api/Users/DeleteUser?userId='+this.UsersId)
                .then(response=>{
                    console.log('delete',response.data);
                    this.$emit('updateData');
                    alert("Xóa user thành công!");
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
                return this.dialogDeleteUser;
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