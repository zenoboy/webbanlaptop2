<template>
    <div>
        <v-dialog 
          v-model="dialog"
          max-width="640px">
            <v-card>
                <v-card-title>
                    <span>Cập nhật loại sản phẩm</span>
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
                                        label="Ảnh sản phẩm"
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
                        @click="updateProduct"
                    >Cập nhật</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditView',
    data() {
        return {
            data: {
                productName: '',
                productimg:'',
                productDesc: '',
                price: '',
                categoryId: 0,
                inventoryId:0, 
                productId:null,
            },
        };
    },
    methods: {
        updateProduct() {
            this.categoryId=this.currentItem.categoryId
            this.data.productimg = this.currentItem.productimg;
            this.categoryId=this.currentItem.inventoryId
            this.categoryId=this.currentItem.productId
            console.log(this.data)


    axios.put('https://localhost:44384/api/Product/'+this.data.productId, this.data)
        .then(response => {
            this.$emit('close');
            // this.$emit('updateData');
            console.log(response.status);
            this.$emit('loadData');

        })
        .catch(error => {
            console.error('Error updating product:', error.response);
        });
}

    },
    props: ['dialogEdit', 'currentItem'],
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
        }
    },
    watch: {
        currentItem: function () {
            this.data.productId = this.currentItem.productId;
            this.data.productName = this.currentItem.productName;
            this.data.productDesc = this.currentItem.productDesc;
            this.data.price = this.currentItem.price;
            this.data.categoryId = this.currentItem.categoryId;
            this.data.inventoryId = this.currentItem.inventoryId;
        }
    }
};
</script>

<style>
</style>
