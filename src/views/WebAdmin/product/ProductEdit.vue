<template>
    <div>
        <side-bar-admin-1/>
        <top-bar-admin-1/>
        <v-row v-if="Product">
            <v-col cols="12">
                <b style="font-size:18px">Tên sản phẩm</b>
                <v-text-field
                v-model="Product[0].ProductsName"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4"> 
                <b style="font-size:18px">Danh mục</b>
                <v-select 
                    v-model="Product[0].CategoryId" 
                    :options="Category"
                    :items="Category" 
                    label="Danh mục" 
                    item-title="CategoryName"
                    item-value="CategoryId"
                    
                    :hint="`${selectedCategory}`"
                    ></v-select>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Số lượng</b>
                <v-text-field
                v-model="Product[0].Quatity"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Giá tiền</b>
                <v-text-field
                v-model="Product[0].Price"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Khuyến mại</b>
                <v-text-field
                v-model="Product[0].promotion"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Xuất xứ</b>
                <v-text-field
                v-model="Product[0].origin"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Bảo hành</b>
                <v-text-field
                v-model="Product[0].warranty"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Thương hiệu</b>
                <v-text-field
                v-model="Product[0].trademark"
                clearable
                hide-details="auto"
                label="Thương hiệu"
                single-line
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Màn hình</b>
                <v-text-field
                v-model="Product[0].Screen"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <b style="font-size:18px">Card đồ họa</b>
                <v-text-field
                v-model="Product[0].Graphicscard"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>

            <v-col cols="4">
                <b style="font-size:18px">Hệ điều hành</b>
                <v-text-field
                v-model="Product[0].operatingsystem"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            
            <v-col cols="4">
                <b style="font-size:18px">CPU</b>
                <v-text-field
                v-model="Product[0].Cpuname"
                clearable
                hide-details="auto"
                label="Tên sản phẩm"
                single-line
        
                ></v-text-field>
            </v-col>
            <v-col cols="4"></v-col>
            <v-col cols="4" >
                <v-row>
                    <v-col cols="12">
                        <v-img v-if="selectedImage" :src="selectedImage" ></v-img>
                        <v-img v-else :src="'https://localhost:44367/images/' + Product[0].ImagerUrl" ></v-img>
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
            <!-- <v-col cols="4">
                <v-img v-if="selectedImage" :src="selectedImage" ></v-img>
            </v-col> -->
            <v-col cols="12">
                <v-textarea
                bg-color="grey-lighten-2"
                color="cyan"
                label="Label"
                v-model="Product[0].ProductsDescription"
                ></v-textarea>
            </v-col>
            
        </v-row>
        <v-row style="margin-bottom:20px">
            <v-spacer></v-spacer>
            
                <v-btn
                    size="large"
                    color="primary"
                    @click="updateProduct"
                >Cập nhật</v-btn>
                <v-btn style="margin-right:20px; margin-left:40px"
                    size="large"
                    color="primary"
                    @click="this.$emit('close')"
                >Hủy</v-btn>
        </v-row>
        
    </div>
  
</template>

<script>
import axios from 'axios';
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';  
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue';
export default {
    components: { 
        SideBarAdmin1,
        TopBarAdmin1,
    },
    props:['id'],
    data(){
        return{
            Product:null,
            Category:[],
            selectedCategory:null,
            selectedImage: null,
        }
    },
    // computed: {
    //     dialog: {
    //         get() {
    //             return this.dialogEdit;
    //         },
    //         set(value) {
    //             if (!value) {
    //                 this.$emit('close');
    //             }
    //         }
    //     }
    // },
    methods:{
        getProduct(){
                axios.get('https://localhost:44367/api/Products/GetProductstoID?newproductsID='+this.id)
                .then(response=>{
                    
                    this.Product = response.data
                    console.log('product',this.Product)
                })
                .catch(error => {
                  console.log(error);
                });

        },
        getCategory(){
            axios.get('https://localhost:44367/api/Categorys/Categorys')
            .then(response=>{
                    
                this.Category = response.data
                console.log('category',this.Category)
            })
            .catch(error => {
                console.log(error);
            });
        },
        
        updateProduct(){
            axios.put('https://localhost:44367/api/Products/UpdateProducts?newProductsId='+this.Product[0].ProductsId+'&newProductsName='+this.Product[0].ProductsName+'&newQuatity='+this.Product[0].Quatity+'&newPrice='+this.Product[0].Price+'&newProductsDescription='+this.Product[0].ProductsDescription+'&newCategoryId='+this.Product[0].CategoryId+'&newpromotion='+this.Product[0].promotion+'&neworigin='+this.Product[0].origin+'&newwarranty='+this.Product[0].warranty+'&trademask='+this.Product[0].trademask+'&Screen='+this.Product[0].Screen+'&Graphicscard='+this.Product[0].Graphicscard+'&operatingsystem='+this.Product[0].operatingsystem+'&Cpuname='+this.Product[0].Cpuname)
            .then(response => {
                console.log('update',response.data)
                if(this.selectedFile){
                    this.updateImage();
                }
                else{
                    alert("Cập nhật sản phẩm thành công!")
                    this.$router.push('/admin/list-product');
                }
                
            })
            .catch(error => {
                console.log('updateLoi', error)
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
        updateImage(){
            const productId = this.Product[0].ProductsId;
            console.log('data',productId)
            if (this.selectedFile) {
            const formData = new FormData();
            
            formData.append('files', this.selectedFile);
            console.log('dataImg', formData)
            axios.put('https://localhost:44367/api/Products/UpdateImage?ProductId='+productId,formData)
            .then(response => {
                console.log('updateImgOk',response.data)
                alert("Cập nhật sản phẩm thành công!")
                this.$router.push('/admin/list-product');

            })
            .catch(error => {
                console.log('updateImgError',error)
                alert("Lỗi rồi!")
            });
            } else {
                // Xử lý trường hợp không có tệp được chọn
                console.error('Không có tệp được chọn');
            }
        }
    },
    created() {
        this.getProduct();
        this.getCategory();
    },

}
</script>

<style>

</style>