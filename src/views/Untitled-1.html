<template>

  <div>  
    <v-app-bar :elevation="2" color="blue">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn>Hire me</v-btn>
        <v-btn>Blog</v-btn>
        <v-btn>
            <v-icon>mdi-cat</v-icon>
        </v-btn>
        <v-btn>
            <v-badge content="5" color="red">
                <v-icon>mdi-bell</v-icon>
            </v-badge>
        </v-btn>
        <v-btn>
            <v-avatar>
            <v-img
            src=""
                alt=""
            ></v-img>
            </v-avatar>
        </v-btn>
    </v-toolbar-items>
  </v-app-bar>

  <v-navigation-drawer>
    <v-toolbar color="primary">
        <v-icon class="ml-2">mdi-home</v-icon>
        <v-toolbar-title class="mx-2">QUẢN TRỊ SHOP</v-toolbar-title>
    </v-toolbar>
    <v-list density="compact">
    <v-list-subheader>Danh mục </v-list-subheader>
    <v-list-item
      v-for="(item, i) in links"
      :key="i"
      :value="item"
      color="blue"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title >{{ item.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
  </v-navigation-drawer>
  <v-row class="mt-2">
    <v-icon>mdi-home</v-icon>
    <h3 class="ml-2">Danh sách loại sản phẩm</h3>
    <v-spacer></v-spacer>
    <v-btn
   icon
   size="small"
   color="blue"
   @click="dialogAdd = true">
   <v-icon>mdi-plus</v-icon>
</v-btn>
  </v-row>
  <v-row>
    <v-col>
        <v-card>
            <v-table>
                <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã sản phẩm</th>
                      <th>Ảnh sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Mô tả</th>
                      <th>Giá</th>
                      <th>Mã loại</th>
                      <th>Mã kho</th>
                      <th>Chức năng</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in products" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.ProductsId }}</td>
                          <!-- Thêm thành phần v-img để hiển thị ảnh -->
                    <td>
                        <v-img :src="'https://localhost:44367/images/' + item.ImagerUrl" alt="Hình ảnh sản phẩm"></v-img>
                    </td>
                      <td>{{ item.ProductsName }}</td>
                      <td>{{ item.ProductsDescription }}</td>
                      <td>{{ item.Price }}</td>
                      <td>{{ item.CategoryId }}</td>
                      <td>{{ item.Quatity }}</td>
                        <td>
                            <v-btn color="blue"
                            class="mr-3"
                            size="x-small"
                            icon=""
                            @click="dialogEdit=true,
                                    currentItem=item"
                            
                            >
                                <v-icon>mdi-pencil</v-icon>

                            </v-btn>
                            <v-btn
                            color="blue"
                            class="mr-3"
                            size="x-small"
                            icon
                            @click="dialogDelete=true,
                            productId=item.productId">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                        
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-col>
  </v-row>
  <add-view
    :dialogAdd="dialogAdd"
    @close="dialogAdd=false"
    @updateData="getCategories"/>
    <edit-view
    :currentItem="currentItem"
    :dialogEdit="dialogEdit"
    @close="dialogEdit=false"
    @updateData="getCategories"
    @loadData="getProducts"
    
    />
    <v-dialog
    maxWidth="450px"
    v-model="dialogDelete"
    
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
                        @click="deleteProduct(productId)"
                        >Đồng ý</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="text"
                    @click="dialogDelete=false">Hủy bỏ</v-btn>
                </v-col>
            </v-row>
        </v-alert>
    </v-card>
    </v-dialog>
</div>
</template>

<script>

import axios from 'axios'
import AddView from '../WebAdmin/category/AddView.vue';
import EditView from '../WebAdmin/category/EditView.vue';

export default {
    name: 'admin',
    data() {
        return {
            dialogDelete:false,
            dialogAdd:false,
            dialogEdit:false,

            links: [
                { icon: ' mdi-microsoft-windows', text: 'Loại sản phẩm' },
                { icon: ' mdi-sale-outline', text: 'Sản phẩm' },
                { icon: ' mdi-flask', text: 'Đơn hàng' },
                { icon: ' mdi-calendar', text: 'Chi tiết đơn hàng' },
                { icon: ' mdi-account-key', text: 'Người Dùng' },
                { icon: ' mdi-chart-pie', text: 'Khách Hàng' },
            ],
            products: [],
            productId: '',
            ImagerUrl:'',
            ProductsName: '',
            ProductsDescription: '',
            Price: '',
            CategoryId: '',
            warranty: '',
        };
    },
    methods: {
        getProducts() {
            axios.get('https://localhost:44367/api/Products/GetProducts')
                .then(response => {
                this.products = response.data;

            })
                .catch(error => {
                console.log(error);
            });
        },

        deleteProduct() {
            axios.delete('https://localhost:44367/api/Products/GetProducts/' + this.productId)
                .then(response => {
                var newArr = this.products.filter(x => x.productId != this.productId);
                this.products = newArr;
                this.dialogDelete = false;
                console.log(response.status);
                // window.location.reload();
                this.getProducts();
            })
                .catch(error => {
                console.log(error);
            });
        },

    },
    watch: {
        currentItem: function () {
            this.data.productId = this.currentItem.productId;
            this.data.ImagerUrl = this.currentItem.ImagerUrl;
            this.data.productName = this.currentItem.productName;
            this.data.productDesc = this.currentItem.productDesc;
            this.data.price = this.currentItem.price;
            this.data.categoryId = this.currentItem.categoryId;
            this.data.inventoryId = this.currentItem.inventoryId;
        }
    },
    created() {
        this.getProducts();
    },
    components: { AddView, EditView }
}

</script>

<style>

</style>