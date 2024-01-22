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
                                        v-model="data.ProductsName"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        label="Ảnh sản phẩm"
                                        v-model="data.productimg"
                                        @change="handleFileUpload"

                                    ></v-text-field>
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
                ProductsName: '',
                productimg:'',
                ProductsDescription: '',
                Price: '',
                CategoryId: 0,
                ProductsId:null,
            },
        };
    },
    methods: {
        
        updateProduct() {
            this.CategoryId=this.currentItem.CategoryId
            this.data.productimg = this.currentItem.productimg;
            this.CategoryId=this.currentItem.inventoryId
            this.CategoryId=this.currentItem.ProductsId
            console.log(this.data)


    axios.put('https://localhost:44367/api/Products/'+this.data.ProductsId, this.data)
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
            this.data.ProductsId = this.currentItem.ProductsId;
            this.data.ProductsName = this.currentItem.ProductsName;
            this.data.ProductsDescription = this.currentItem.ProductsDescription;
            this.data.Price = this.currentItem.Price;
            this.data.CategoryId = this.currentItem.CategoryId;
            this.data.inventoryId = this.currentItem.inventoryId;
        }
    },
    uploadImage() {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('files', this.data.productimg);

            axios.post('https://localhost:44367/api/Products/UploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                // Trả về đường dẫn ảnh mới
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        }
    )},
};
</script>

<style>
</style>
