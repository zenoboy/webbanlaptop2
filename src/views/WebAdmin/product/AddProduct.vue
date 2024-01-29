<template>
    <div>
        <v-dialog 
          v-model="dialog"
          max-width="640px">
<v-card>
      <v-card-title>
        <span>Thêm mới sản phẩm</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addProduct">
          <v-container>
              <v-col>
                <v-text-field label="Tên sản phẩm" v-model="data.ProductsName"></v-text-field>
              </v-col>
              <v-col>
                <v-file-input
                v-model="data.ImagerUrl"
                placeholder="Upload your img"
                label="File input"
                multiple
                prepend-icon="mdi-image-plus"
                ref="fileInput"

                >
                  <template v-slot:selection="{ fileNames }">
                    <template v-for="fileName in fileNames" :key="fileName">
                      <v-chip size="small" label color="primary" class="me-2">
                        {{ fileName }}
                      </v-chip>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
              <v-col>
                <v-text-field label="Mô tả sản phẩm" v-model="data.ProductsDescription"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Giá" v-model="data.Price"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="ID Danh mục" v-model="data.CategoryId"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Số lượng " v-model="data.Quatity"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="khuyến mãi" v-model="data.promotion"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Nguồn gốc" v-model="data.origin"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Bảo hành" v-model="data.warranty"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Hãng sản xuất " v-model="data.trademark"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Màn hình" v-model="data.Screen"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Card Đồ Họa" v-model="data.Graphicscard"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Hệ Điều Hành" v-model="data.operatingsystem"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="CPU" v-model="data.Cpuname"></v-text-field>
              </v-col>
          </v-container>
          <v-btn type="submit" color="primary">Lưu</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="mr-2" color="grey darken-3" @click="$emit('close')">Hủy</v-btn>
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
                ProductsName: '',
                ImagerUrl:'',
                ProductsDescription: '',
                Price: '',
                CategoryId: '',
                Quatity: '',
                origin:'',
                warranty:'',
                trademark:'',
                Screen:'',
                Graphicscard:'',
                operatingsystem:'',
                Cpuname:'',
            }
        };
    },
    methods: {
        handleFileChange() {
        // Access the selected files using $refs
        const files = this.$refs.fileInput.files;
        // Store the selected files in data.ImagerUrl
        this.data.ImagerUrl = files;
        },
        addProduct() {
            // const url = `https://localhost:44367/api/Products/PostProducts;
            
            // const formData  = new FormData ();

            // formData.append('newProductsName' ,this.data.ProductsName);
            // formData.append('newQuatity', this.data.Quatity);
            // formData.append('newPirce',this.data.Price);
            // formData.append('newProductsDescription', this.data.ProductsDescription);
            // formData.append('newCategoryId',this.data.CategoryId);
            // formData.append('newpromotion', this.data.promotion);
            // formData.append('neworigin', this.data.origin);
            // formData.append('newwarranty',this.data.warranty);
            // formData.append('newtrademark',this.data.trademark);
            // formData.append('newScreen', this.data.Screen);
            // formData.append('newGraphicscard', this.data.Graphicscard);
            // formData.append('newoperatingsystem', this.data.operatingsystem);
            // formData.append('newCpuname',this.data.Cpuname);
            // formData.append('newImagerUrl', this.data.ImagerUrl);

            // Object.keys(this.data).forEach(key => {
            // if (key === 'ImagerUrl') {
            // for (let i = 0; i < this.data.ImagerUrl.length; i++) {
            //     formData.append(`ImagerUrl[${i}]`, this.data.ImagerUrl[i]);
            // }
            // } else {
            // formData.append(key, this.data[key]);
            // }
            // });

            // for (let i = 0; i < this.data.ImagerUrl.length; i++) {
            // formData.append(`newImagerUrl[${i}]`, this.data.ImagerUrl[i]);
            // }

              // Sử dụng config để đặt 'Content-Type' là 'multipart/form-data'
            

            // axios.post('https://localhost:/api/Products/PostProducts?newProductsName='+this.data.productName+'&newQuatity='+this.Quatity+'&newPirce='+this.Price+'&newProductsDescription='+this.ProductsDescription+'&newCategoryId='+this.CategoryId+'1&newpromotion='+this.promotion+'&neworigin='+this.origin+'&newwarranty='+this.warranty+'&newtrademark='+this.trademark+'&newScreen='+this.Screen+'&newGraphicscard='+this.Graphicscard+'&newoperatingsystem='+this.operatingsystem+'&newCpuname='+this.Cpuname+'')
            //     .then(response => {
            //         this.$emit('close');
            //         this.$emit('updateData');
            //         console.log(response.status);
            //         this.getProducts();

            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
            console.log('Dữ liệu gửi đi:', this.data);
                  const config = {
            headers: {
            'Content-Type': 'multipart/form-data; boundary=' + formData._boundary,
                },
            };
            // Gửi yêu cầu POST với FormData chứa dữ liệu

            axios.post('https://localhost:44367/api/Products/PostProducts', this.data,config)
            .then(response => {
            this.$emit('close');
            this.$emit('updateData');
            console.log('ok',response.status);
            this.getProducts();
            })
            .catch(error => {
            console.error('Error:', error);
            console.log('Response Data:', error.response.data);
            });
            }},
    
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
