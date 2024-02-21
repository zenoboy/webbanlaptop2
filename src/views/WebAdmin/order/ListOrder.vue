<template>
    <div>
        <side-bar-admin-1/>
        <top-bar-admin-1/>
        <v-row class="mt-2">
            <v-icon></v-icon>
            <h3 class="ml-2">Danh sách đơn hàng</h3>
            <v-spacer></v-spacer>
            <v-btn class="mr-3" icon size="small"  @click="showAllOrders">
                <v-icon>mdi mdi-refresh</v-icon>
            </v-btn>
            <!-- <v-spacer></v-spacer> -->
            <v-menu offset-y>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" color=""
                    class="mr-3">
                        Lọc danh sách
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="filterByStatus(item.id)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-table dense dark>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Họ tên người đặt</th>
                                <th>Số điện thoại</th>
                                <th>Ngày đặt hàng</th>
                                <th>Địa chỉ</th>
                                <th>Tổng tiền</th>
                                <th>Tình trạng</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                                <!-- Hiển thị dữ liệu đã được lọc -->
                                <tr v-for="(item, index) in filteredOrder" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.OrderID }}</td>
                                <td>{{ item.UserName }}</td>
                                <td>{{ item.UserPhone }}</td>
                                <td>{{ item.OrderDate }}</td>
                                <td>{{ item.city }}</td>
                                <td>{{ item.Price }}</td>
                                <td>{{ item.OrderStatus }}</td>
                                <td>
                                    <v-btn @click="dialogDetail = true, id = item.OrderID" color="success">
                                        Chi tiết
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
        <order-detail :dialogDetail="dialogDetail" :id="id" @close="dialogDetail=false" @updateData="getOrder" />
    </div>
</template>

<script>
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue';
import axios from 'axios';
import OrderDetail from './OrderDetail';

export default {
    components: { SideBarAdmin1, TopBarAdmin1, OrderDetail },
    name: 'List_Order',
    data() {
        return {
            Order: [],
            dialogDetail: false,
            id: '',
            items: [
                { id:1, title: 'Chờ xác nhận' },
                { id:2,title: 'Chờ Giao Hàng' },
                { id:3,title: 'Đã giao hàng' },
                { id:4,title: 'Đã hủy' },
            ],
            filteredOrder: [],
            orderStatusOptions: ['Chờ xác nhận', 'Chờ giao hàng', 'Đã giao hàng', 'Đã hủy'],
        };
    },
    methods: {
        getOrder() {
            axios.get('https://localhost:44367/api/OrderProduct_/GetOrderProduct')
                .then(response => {
                    this.Order = response.data;
                    this.filteredOrder = response.data;
                    console.log('order', this.Order);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        filterByStatus(status) {
            // Gọi API để lấy danh sách đơn hàng dựa trên trạng thái đã chọn
            axios.get(`https://localhost:44367/api/OrderProduct_/GetOrderByStatus?status=${status}`)
            
                .then(response => {
                    this.filteredOrder = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showAllOrders() {
            // Gọi lại phương thức getOrder để hiển thị toàn bộ danh sách đơn hàng
            this.filteredOrder = this.Order;
        },
    },

    created() {
        this.getOrder();
    },
};
</script>

<style>
</style>
