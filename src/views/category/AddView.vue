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
                                        v-model="data.productName"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Ảnh  sản phẩm"
                                        v-model="data.productimg"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Mô tả sản phẩm"
                                        v-model="data.productDesc"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        label="Giá"
                                        v-model="data.price"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="ID Danh mục"
                                        v-model="data.categoryId"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="ID Kho"
                                        v-model="data.inventoryId"
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
            axios.post("https://localhost:44384/api/Product", this.data)
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
    props: ['dialogAdd'],
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
