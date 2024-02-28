<template>
    <div>
        <top-bar/>
        <!-- <h3>Danh sách sản phẩm thuộc danh mục {{ this.id }}</h3> -->
        <v-row >
  <v-col v-for="(item, index) in products" :key="index" cols="12" md="3">
    <router-link :to="{ name: 'product-detail', params: { id: item.ProductsId } } " style="text-decoration: none;">
          <v-hover v-slot="{isHovering,props}" open-delay="1">
            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
              <v-img :src="'https://localhost:44367/images/' + item.ImagerUrl" height="200"></v-img>
              <v-card-title style="font-size: 16px;">{{ item.ProductsName }}</v-card-title>
              <!-- <v-card-subtitle>{{ item.Price }}</v-card-subtitle> -->
              <div class="main-price">
                <del class="old-price">{{ formatPrice(item.Price + (item.Price*item.promotion/100))}} đ</del>
                <div class="d-flex align-item">
                  <b class="price"> {{ formatPrice(item.Price) }} đ</b>
                  <div class="price-sale"> - {{ item.promotion }}%</div>
                </div>
              </div>
              <!-- <v-card-actions>
                <v-btn color="primary" :to="{ name: 'product-detail', params: { id: item.ProductsId } }">Xem Chi Tiết</v-btn>
                <cart-btn  :products="item"/>
              </v-card-actions> -->
            </v-card>
          </v-hover>
        </router-link>
        </v-col>
      </v-row>
  
    </div>
</template>

<script>
import numeral from 'numeral';
import axios from 'axios';
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    props:['id'],
    components:{TopBar, FooterBar},
    data() {
        return {
        categoryName: '',
        products: [],
        CatId: 0
        }
    },
    methods:{
        getProducts(){
            //const categoryId = this.$route.params.categoryId;
            axios.get('https://localhost:44367/api/Products/GetProductByCatId?CategoryId='+this.CatId)
            .then(response => {
                this.products = response.data;
                console.log('product',this.products)
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });   
        },
        formatPrice(price) {
            return numeral(price).format('0,0');
        },
    },
    watch:{
      id: function(){
        this.CatId = this.id
        
      },
      CatId: function(){
        this.getProducts()
      }
    },
    created(){
      this.getProducts()
    }
}
</script>

<style scoped>

.old-price{
  font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    color: var(--grey-bold,#8d94ac);
    margin-top: 8px;
    display: block;
    height: 20px;
}
.price{
    margin-left: 15px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
}
.price-sale{
  border: 2px solid red;
    width: 43px;
    height: 24px;
    line-height: 21px;
    text-align: center;
    margin-left: 8px;
    color: red;
    font-size: 12px;
    font-weight: 600;
    margin-left: 15px;
}

</style>