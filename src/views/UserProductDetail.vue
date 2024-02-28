<template>
    <v-dialog 
    v-model="dialog"
    max-width="600px"
    >
    <v-card>
        <v-card-title>
            <span>Chi tiết sản phẩm</span>
        </v-card-title>
        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
      
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in listOrder" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.ProductsName }}</td>
              
                        <td>{{ item.Price }}</td>
                        <td>{{ item.Quatity }}</td>
                        <td>{{ item.Price * item.Quatity }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="mr-2"
                color="grey darken-3"
                @click="this.$emit('close')"
                >Đóng</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props: ['dialog', 'idOrder'],
    computed: {
        dialog: {
            get() {
                return this.dialog;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        },
        
    },
    data(){
        return{
            listOrder:[],
            userId: sessionStorage.getItem('userId'),
            // userId: 1,
            orderId: null
        }
    },
    methods:{
        getOrder(){
            axios.get('https://localhost:44367/api/OrderDetail/GetOrderDetailByOrderId?orderId='+this.idOrder)
            .then(response=>{
                this.listOrder = response.data
                console.log('order',this.listOrder)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    watch:{
        idOrder : function(){
            this.orderId = this.idOrder
            console.log('orderId1', this.orderId)
            this.getOrder()
        }
    },
    created(){
        //this.getOrder()
    }
    
}
</script>

<style>

</style>