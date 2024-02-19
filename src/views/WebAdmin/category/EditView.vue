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
                    <v-form >
                        <v-container>
                            <v-row>
                                <v-col v-if="Category">
                                    <v-text-field
                                        label="Tên sản phẩm"
                                        v-model="Category[0].CategoryName"
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
                        @click="updateCategory"
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
            CatId: null,
            Category: null,
        };
    },
    methods: {
        getCategory(){
           
            // axios.get('https://localhost:7072/api/Categorys/GetCategoryById', null, {
            //     params: {
            //         CategoryId: this.CatId
            //     }
            // })
            axios.get('https://localhost:7072/api/Categorys/GetCategoryById?CategoryId='+this.CatId)
                .then(response =>{
                    this.Category = response.data;
                    console.log('category', this.Category)
                })
                .catch(error => {
                console.log(error);
                });
        },

        updateCategory(){
            //axios.put('https://localhost:7072/api/Categorys/UpdateCategory?newCategoryId=6&newCategoryName=a')
            const newCategory ={
                newCategoryId: this.CatId,
                newCategoryName: this.Category[0].CategoryName
            };
            axios.put('https://localhost:7072/api/Categorys/UpdateCategory', null, {params : newCategory})
                .then(response =>{
                    console.log('update',response.data);
                    alert("Cập nhật sản phẩm thành công!")
                    this.$emit('updateData');
                    // Quay trở lại trang trước
                    this.$emit('close');
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },
    props: ['dialogEdit', 'id'],
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
        },
        
    },
    watch: {
        
        id: function (){
            this.CatId = this.id;
            this.getCategory();
        }
        
    },
    created() {
        
    }
    
};
</script>

<style>
</style>
