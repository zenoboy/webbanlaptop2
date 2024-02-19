<template>
    <div>
        <v-dialog 
          v-model="dialog"
          max-width="1024"
          persistent>
            <v-card>
                <v-card-title>
                    <span>Thêm mới sản phẩm</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Tên sản phẩm"
                                        v-model="data.ProductName"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4" >
                                    <v-select 
                                        v-model="selectedCat" 
                                        :options="Category"
                                        :items="Category" 
                                        label="Danh mục" 
                                        item-title="CategoryName"
                                        item-value="CategoryId"
                                        
                                        :hint="`${selectedCat}`"
                                    ></v-select>
 
                                </v-col>
                                <v-col cols="4" >
                                    <v-text-field
                                        label="Nguồn gốc"
                                        v-model="data.Origin"
                                    ></v-text-field>
 
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Giá tiền"
                                        v-model="data.Price"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Số lượng"
                                        v-model="data.Quantity"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Bảo hành"
                                        v-model="data.Warranty"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Khuyến mại"
                                        v-model="data.Promotion"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Thương hiệu"
                                        v-model="data.Trademark"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Màn hình"
                                        v-model="data.Screen"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Card đồ họa"
                                        v-model="data.Graphicscard"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Hệ điều hành"
                                        v-model="data.Operatingsystem"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Tên CPU"
                                        v-model="data.Cpuname"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    
                                </v-col>
                                <v-col cols="4" >
                                    <v-row>
                                        <v-col cols="12">
                                            <v-img v-if="selectedImage" :src="selectedImage" ></v-img>
                                            <!-- <v-img v-else :src="'https://localhost:7072/images/' + Product[0].ImagerUrl" ></v-img> -->
                                        </v-col>
                                        <v-col cols="12">
                                            <v-file-input 
                                            @change="handleFileChange"
                                           
                                            show-size 
                                            label="File input">
                                        </v-file-input>
                                        </v-col>
                                    </v-row>
                        
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                    bg-color="grey-lighten-2"
                                    color="cyan"
                                    label="Label"
                                    v-model="data.ProductsDescription"
                                    ></v-textarea>
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
                ProductName: null,
                Quantity: null,
                Price: null,
                ProductsDescription: null,
                Promotion: null,
                Origin: null,
                Warranty: null,
                Trademark: null,
                Screen: null,
                Graphicscard: null,
                Operatingsystem : null,
                Cpuname: null

                
            },
            selectedCat: null,
            Category:[],
            selectedImage: null,
           
        };
    },
    methods: {
        addProduct() {
            const formData = new FormData(); 
            formData.append('files', this.selectedFile);
        
            const postData = {
                newProductsName: this.data.ProductName,
                newQuatity: this.data.Quantity,
                newPirce: this.data.Price,
                newProductsDescription: this.data.ProductsDescription,
                newCategoryId: this.selectedCat,
                newpromotion: this.data.Promotion,
                neworigin: this.data.Origin,
                newwarranty: this.data.Warranty,
                trademask: this.data.Trademark,
                Screen: this.data.Screen,
                Graphicscard: this.data.Graphicscard,
                operatingsystem: this.data.Operatingsystem,
                Cpuname: this.data.Cpuname
            };

            
        axios.post('https://localhost:7072/api/Products/PostProducts', formData, { params: postData })
        .then(response => {
            this.$emit('close');
            this.$emit('updateData');
            console.log(response.status);
            alert("Thêm sản phẩm thành công!")
            // Quay trở lại trang trước
            this.$emit('close');
        })
        .catch(error => {
            console.log(error);
        });
        },
        getCategory(){
            axios.get('https://localhost:7072/api/Categorys/Categorys')
            .then(response =>{
                this.Category = response.data
                console.log('ok', this.Category)
            })
            .catch(error => {
                console.log(error);
            });
        },
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
            console.log('updateImg1',this.selectedFile)
            if(this.selectedFile){
                const reader = new FileReader();
                reader.onload = () => {
                    this.selectedImage = reader.result;
                };
                reader.readAsDataURL(this.selectedFile);
            }
        },
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
    },
    created(){
        this.getCategory()
    }
};
</script>

<style>
</style>
