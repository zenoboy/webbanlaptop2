<template>
    <div>
        <v-dialog 
          v-model="dialog"
          max-width="640px">
            <v-card>
                <v-card-title>
                    <span>Thêm mới loại sản phẩm</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Tên sản phẩm"
                                        v-model="data.ProductsName"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-file-input
                                    v-model="files"
                                    placeholder="Upload your documents"
                                    label="File input"
                                    multiple
                                    prepend-icon="mdi-paperclip"
                                >
                                    <template v-slot:selection="{ fileNames }">
                                    <template v-for="fileName in fileNames" :key="fileName">
                                        <v-chip
                                        size="small"
                                        label
                                        color="primary"
                                        class="me-2"
                                        >
                                        {{ fileName }}
                                        </v-chip>
                                    </template>
                                    </template>
                                </v-file-input>
 
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Mô tả sản phẩm"
                                        v-model="data.ProductsDescription"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Giá"
                                        v-model="data.Price"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="ID Danh mục"
                                        v-model="data.CategoryId"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Số lượng "
                                        v-model="data.Quatity"
                                    ></v-text-field>
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
                        @click="addProduct"
                    >Lưu</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddView',
    props: ['dialogAdd'],
    data() {
        return {
            data: {
                productName: '',
                productimg:'',
                productDesc: '',
                price: '',
                categoryId: 0,
                inventoryId: 0,
            }
        };
    },
    methods: {
        addProduct() {
            axios.post('https://localhost:7072/api/Products/PostProducts?newProductsName='+this.data.productName+'&newQuatity='+this.Quatity+'&newPirce='+this.Price+'&newProductsDescription='+this.ProductsDescription+'&newCategoryId='+this.CategoryId+'1&newpromotion='+this.promotion+'&neworigin='+this.origin+'&newwarranty='+this.warranty+'&newtrademark='+this.trademark+'&newScreen='+this.Screen+'&newGraphicscard='+this.Graphicscard+'&newoperatingsystem='+this.operatingsystem+'&newCpuname='+this.Cpuname+'&newImagerUrl'+this.newImagerUrl+'')
                .then(response => {
                    this.$emit('close');
                    this.$emit('updateData');
                    console.log(response.status);
                    this.getProducts();

                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    
    computed: {
        dialog: {
            get() {
                return this.dialogAdd;
            },
            set(value) {
                if (!value) {
                    this.$emit('close');
                }
            }
        }
    }
};
</script>

<style>
</style>
