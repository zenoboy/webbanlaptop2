<template>
    <v-dialog
        v-model="OrderDetail"
        fullscreen
        transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar
                dark
                color="primary">
                <v-btn
                    icon
                    dark
                    @click="OrderDetail = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Chi tiết đơn hàng</v-toolbar-title>
            </v-toolbar>
            <div class="ml-10 mt-5">
                <h4>Thông tin người đặt hàng</h4>
                <div v-if="Order" class="ml-5 mt-5">
                    <div class="d-flex">
                        <b>Họ và tên:</b> <p style="margin-left: 15px;">{{ Order[0].UserName }}</p>
                    </div>
                    <div class="d-flex">
                        <b>Số điện thoại:</b> <p style="margin-left: 15px;">{{ Order[0].UserPhone }}</p>
                    </div>
                    <div class="d-flex">
                        <b>Địa chỉ:</b> <p style="margin-left: 15px;">{{ Order[0].UserAddress }}, {{ Order[0].ward }}, {{ Order[0].district }}, {{ Order[0].city }}</p>
                    </div>
                    <div class="d-flex">
                        <b>Ngày đặt hàng:</b> <p style="margin-left: 15px;">{{ Order[0].OrderDate }}</p>
                    </div>
                    <div class="d-flex">
                        <b>Tình trạng đơn hàng:</b> <p style="margin-left: 15px;">{{ order_status }}</p>
                    </div>
                </div>
                <h4 class="mt-5">Chi tiết đơn hàng</h4>
                <v-table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá tiền</th>
                            <th>Thành tiền</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in orderdetail" :key=index>
                            <td>{{  index + 1}}</td>
                            <td>{{ item.ProductsId }}</td>
                            <td>{{ item.ProductsName }}</td>
                            <td>{{ item.Quatity }}</td>
                            <td>{{ item.Price }}</td>
                            <td>{{ item.Quatity * item.Price }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div class="d-flex justify-end">
                <div v-if="Order && Order[0].OrderStatus ===1">
                    <v-btn 
                        color="success" 
                        style="margin-right: 20px;"
                        @click="changeStatus"
                        >Xác nhận đơn hàng
                    </v-btn>
                    <v-btn 
                        color="error"  
                        style="margin-right: 20px;"
                        @click="cancelOrder"
                        >Hủy đơn hàng
                    </v-btn>
                </div>
                <div v-if="Order && Order[0].OrderStatus ===2">
                    <v-btn 
                    color="success" 
                    style="margin-right: 20px;"
                    @click="changeStatus"
                    >Đã giao hàng
                </v-btn>
                    <v-btn 
                        color="error"  
                        style="margin-right: 20px;"
                        @click="cancelOrder"
                        >Hủy đơn hàng
                    </v-btn>
                </div>
                <div v-if="Order && Order[0].OrderStatus ===3">
                    <v-btn 
                    color="success" 
                    style="margin-right: 20px;"
                    @click="removeOrder"
                    >Xóa đơn hàng
                </v-btn>
                </div>
                <div v-if="Order && Order[0].OrderStatus ===4">
                    <v-btn 
                    color="success" 
                    style="margin-right: 20px;"
                    @click="removeOrder"
                    >Xóa đơn hàng
                    </v-btn>
                </div>
                <div v-if="Order && Order[0].OrderStatus !== 1 && Order[0].OrderStatus !== 2 && Order[0].OrderStatus !== 3 && Order[0].OrderStatus !== 4">
                    <v-btn 
                    color="error" 
                    style="margin-right: 20px;"
                    @click="cancelOrder"
                    >Hủy đơn hàng1
                    </v-btn>
                </div>
                
            </div>
        </v-card>

       
    </v-dialog>

    
</template>

<script>
import axios from 'axios';
export default {
    props: ['dialogDetail', 'id'],
    data(){
        return{
            OrderId: null,
            orderdetail: null,
            Order: null,
            order_status: null,
            shouldFetchOrder: true
        }
    },
    methods:{
        getOrderDetail(){
            const id ={
                orderId: this.OrderId
             
            };
            axios.get('https://localhost:7072/api/OrderDetail/GetOrderDetailByOrderId', {params: id})
                .then(response => {
                    this.orderdetail = response.data;
                    console.log('order', this.orderdetail)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getOrder(){
            const id ={
                orderId: this.OrderId
            };
            axios.get('https://localhost:7072/api/OrderProduct_/GetOrderProductByOrderId', {params: id})
                .then(response => {
                    
                    this.Order = response.data;
                    if(this.Order[0].OrderStatus ===1){
                        this.order_status = "Chờ xác nhận"
                        
                    }
                    else if(this.Order[0].OrderStatus ===2){
                        this.order_status = "Chờ Giao hàng"
                        
                    }
                    else if(this.Order[0].OrderStatus ===3){
                        this.order_status = "Đã giao hàng"
                        
                    }
                    else if(this.Order[0].OrderStatus ===4){
                        this.order_status = "Đã hủy"
                        
                    }
                    else{
                        this.order_status = "Không có thông tin"
                    }
                    
                    console.log('order', this.order_status)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        changeStatus(){
            if(this.Order[0].OrderStatus ===1){
                const newStatus ={
                    OrderID: this.OrderId,
                    status: 2
                };
                axios.put('https://localhost:7072/api/OrderProduct_/UpdateStatus', null, {params : newStatus})
                    .then(response => {
                        console.log('update',response.data);
                        alert("Cập nhật sản trạng thái thành công!")
                        this.$emit('updateData');
                        // Quay trở lại trang trước
                        this.$emit('close');
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }
            if(this.Order[0].OrderStatus ===2){
                const newStatus ={
                    orderId: this.OrderId,
                    status: 3
                };
                axios.put('https://localhost:7072/api/OrderProduct_/UpdateStatus', null, {params : newStatus})
                    .then(response => {
                        console.log('update',response.data);
                        alert("Cập nhật sản trạng thái thành công!")
                        this.$emit('updateData');
                        // Quay trở lại trang trước
                        this.$emit('close');
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }
            
        },
        cancelOrder(){
            const newStatus ={
                OrderID: this.OrderId,
                status: 4
            };
            axios.put('https://localhost:7072/api/OrderProduct_/UpdateStatus', null, {params : newStatus})
                .then(response => {
                    console.log('update',response.data);
                    alert("Hủy đơn hàng thành công!")
                    this.$emit('updateData');
                    // Quay trở lại trang trước
                    this.$emit('close');
                })
                .catch(error =>{
                        console.log(error);
                    })
        },
        removeOrder(){
            // axios.delete('https://localhost:7072/api/OrderProduct_/DeleteOrder',null, {
            // params : {
            //     newOrderID: this.OrderId
            // }
            // })
            axios.delete('https://localhost:7072/api/OrderProduct_/DeleteOrder?newOrderID='+this.OrderId)    
                .then(response=>{
                    console.log('delete',response.data);
                    alert("Xóa đơn hàng thành công!");
                    
                    this.$emit('updateData');
                    this.shouldFetchOrder = false; // Đặt biến trạng thái thành false để ngăn chặn việc gọi getOrder lại

                    // Quay trở lại trang trước
                    this.$emit('close');


                    
                })
                .catch(error=>{
                    console.log(error);
                });
                }
    },
    computed:{
        OrderDetail: {
            get() {
                return this.dialogDetail;
                
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        },
    },
    watch: {
        
        // id: function (){
        //     this.OrderId = this.id;
        //     console.log('order', this.OrderId);
        //     this.getOrderDetail();
        //     this.getOrder();
        // },
        dialogDetail: function(){
            this.OrderId = this.id;
            console.log('order', this.OrderId);
          
            if (this.shouldFetchOrder) {
                this.getOrderDetail();
                this.getOrder();
            } // Thêm điều kiện này để kiểm tra
        }
        
    },
}
</script>

<style>

</style>