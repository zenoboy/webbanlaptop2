<template>

      <div>
        <side-bar-admin-1/>
        <top-bar-admin-1/>
  <v-row class="mt-2">
    <v-icon>mdi-home</v-icon>
    <h3 class="ml-2">Danh sách Loại sản phẩm</h3>
    <v-spacer></v-spacer>
    <v-btn icon 
    size="small"
    color="blue"
    @click="dialogAdd = true"
    > 
   <v-icon>mdi-plus</v-icon></v-btn>
  </v-row>
  <v-row>
    <v-col>
        <v-card>
            <v-table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã loại SP</th>
                        <th>Tên Loại SP</th>
                        <th>Chức năng</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in categories" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.CategoryId }}</td>
                        <td>{{ item.CategoryName }}</td>
                        <td>
                            <v-btn color="blue"
                            class="mr-3"
                            size="x-small"
                            icon=""
                            @click="dialogEdit=true,
                                    id=item.CategoryId"
                            
                            >
                                <v-icon>mdi-pencil</v-icon>

                            </v-btn>
                            <v-btn
                            color="blue"
                            class="mr-3"
                            size="x-small"
                            icon
                            @click="dialogDelete=true,
                            CategoryId=item.CategoryId">
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
    :id="id"
    :dialogEdit="dialogEdit"
    @close="dialogEdit=false"
    @updateData="getCategories"
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
                        @click="deleteCategory"
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


import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';
import axios from 'axios';
import AddView from './AddView.vue';
import EditView from './EditView'
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue'
export default {
    components:{AddView,EditView, SideBarAdmin1, TopBarAdmin1},
    name:'ListView',
    data() {
    return {
        categories: [],
        dialogAdd:false,
        dialogEdit:false,
        currentItem:'', 
        dialogDelete:false,
        CategoryId:'',
    }
},
methods: {
    getCategories() {
        axios.get('https://localhost:44367/api/Categorys/Categorys')
            .then(response => {
                this.categories = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteCategory(){
        if (this.CategoryId){
        axios.delete('https://localhost:44367/api/Categorys/DeleteCategory' ,null, {
            params: {
                NewCategoryId: this.CategoryId
            }
        })    
        .then(response=>{
            var newArr = this.categories.filter(x=>x.CategoryId !=this.CategoryId);
            this.categories = newArr;
            this.dialogDelete= false;
            console.log(response.status);
        })
        .catch(error=>{
            console.log(error);
        });
    }else{
        console.error('categoryId không tồn tại')
    }
    }
},
created() {
    this.getCategories();
}
}

</script>

<style>

</style>