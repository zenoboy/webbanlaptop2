<template>
    <div>

  
<top-bar></top-bar>
<div v-if="Product">


        <v-row >
            <!-- <v-col><v-img src="https://www.tncstore.vn/media/product/250-5812-acer-nitro-5-tiger-2-2.jpg"></v-img></v-col> -->
            <v-col>
              <v-img
              
              :src="'https://localhost:44367/images/' + Product[0].ImagerUrl"
                height="200"

              ></v-img>
            </v-col>
            <v-col>
              <h1 class="name" >{{ Product[0].ProductsName }}</h1>
              <ul style="margin-top: 20px;">
                <li>Xuất xứ: {{ Product[0].origin }}</li>
                <li>Thương hiệu: {{ Product[0].CategoryName }}</li>
                
              </ul>
            </v-col>
            <v-col>
              <div class="khuyenmai">
                <div class="title">
                  <v-icon style="font-size: 18px; margin-right: 10px;">mdi mdi-gift</v-icon>
                  Khuyến mãi khi mua sản phẩm
                </div>
                <div class="content">
                  <p>Gói quà tặng trị giá 3.5 triệu bao gồm: </p>
                  <p>- Bộ vệ sinh laptop 4 món</p>
                  <p>- Tặng Voucher 5% tối đa 150K áp dụng cho KH mua màn hình</p>
                  <p>- Gói vệ sinh dịch vụ Laptop trị giá 500.000đ</p>
                  <p>- Dịch vụ cân màu màn hình trị giá 200.000đ</p>
                </div>

                <div class="main-price">
                  <div class="flex-item">
                    <div class="price">{{ formatPrice( Product[0].Price) }} đ</div>
                    <del class="old-price">{{ formatPrice (computedNewPrice) }} đ</del>
                    <div class="sale-off">-{{ Product[0].promotion }}%</div>
                  </div>

                  <div class="baohanh flex-item">
                  <div class="item">Bảo Hành {{ Product[0].warranty }} Tháng</div>
                </div>
                </div>
               

              </div>
              <div class="group-add-product">
                
                <div class=" quantity flex-item">
                  <p style="margin-right: 10px;"> Số Lượng</p>
                  <div>
                        <v-btn variant="tonal" rounded="0" size="small"  @click="GiamSoLuong" style="float: left;">
                        <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <input v-model="quantity" style="width: 50px;float: left; text-align: center; border: 1px solid rgb(204, 203, 203); height: 28px;"  type="text"/>
                        <v-btn variant="tonal" rounded="0" size="small" @click="TangSoLuong" style="float: left;">
                        <v-icon>mdi-plus</v-icon>
                     </v-btn>
                  </div>
                </div>

                <div style="margin-top: 30px;" class="all-btn-add-product flex-item">
                  <div class="btn-add-cart">
                    <v-btn @click="addToCart" :products=Product[0] style="margin-right: 30px; height: 45px;" color="#3278f6" >Thêm vào giỏ hàng</v-btn>
                    
                    <v-btn style="height: 45px;" color="#fb4e4e">Mua Ngay</v-btn>
                  </div>
                </div>
              </div>
              
            </v-col>
        </v-row>

        <v-row style="margin-bottom: 20px;">
          <v-col :cols="7" style="border-right: 1px solid #ededed;">
            <h2 class="title">MÔ TẢ SẢN PHẨM</h2>
            <p>{{ Product[0].ProductsDescription }}</p>
          </v-col>
          <v-col :cols="5">
            <h2 class="title">THÔNG SỐ KỸ THUẬT</h2>
            <v-table id="table-detail">
              <tbody>
                <tr>
                  <td>Thương hiệu</td>
                  <td>{{ Product[0].trademark }}</td>
                </tr>
                <tr>
                  <td>Hệ Điều Hành </td>
                  <td>{{ Product[0].operatingsystem }}</td>
                </tr>
                <tr>
                  <td>Màn Hình</td>
                  <td>{{ Product[0].Screen }}</td>
                </tr>
                <tr>
                  <td>Card đồ hoạ</td>
                  <td>{{ Product[0].Graphicscard }}</td>
                </tr>
                <tr>
                  <td>Tên CPU </td>
                  <td>{{ Product[0].Cpuname }}</td>
                </tr>
                <tr>
          <td colspan="2" class="text-center">
            <v-btn @click="openDialog" color="">Xem Thêm</v-btn>
          </td>
        </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="border-top: 1px solid #ededed;">
          <v-col>
            <h3 style="display: block;">ĐÁNH GIÁ CỦA KHÁCH HÀNG</h3>
            <v-row align="center" justify="center">
              <v-rating
              v-model="averageRating"
              hover
              half-increments
              color="orange-lighten-1"
              active-color="orange-lighten-1"
              :readonly="true"
            ></v-rating>
            <!-- <v-btn @click="showReviewView=true" variant="text" border color="blue">Viết đánh giá</v-btn> -->
            <v-btn @click="showReview" variant="text" border color="blue">Viết đánh giá</v-btn>
            </v-row>
            
          
          <ul>
            <li style="list-style: none;" v-for="(review, index) in Review" :key="index">
              <!-- Hiển thị thông tin của người đánh giá -->
              <p><strong style="margin-right: 30px;">{{ review.UserName }}</strong> 
                <v-rating 
                  v-model=" review.Rating " 
                  size="x-small"  
                  density="compact" 
                  readonly
                  color="orange-lighten-1"
                  active-color="orange-lighten-1">
                </v-rating>
              </p>
              <p>Đánh giá: {{ review.Comment }}</p>
              <p style="color: #CCC; font-weight: 600;"> {{formatReviewDate(review.DateReviews)}}</p>
              <v-divider></v-divider>
            </li>
          </ul>
          </v-col>
          
                    
        </v-row>
        
      </div>
      <review-view
        :visible="showReviewView"
        @close="showReviewView=false"
        @updateData="getReview"
        :product="this.Product"
      />
      <v-dialog v-model="showDialog" max-width="600" persistent="false" transition="dialog-transition">
      <v-card>
        <v-card-title>Thông Số Kỹ Thuật Chi Tiết</v-card-title>
        <v-card-text>
          <v-table>
            <tbody>
              <tr>
                  <td>Thương hiệu</td>
                  <td>{{ Product[0].trademark }}</td>
                </tr>
                <tr>
                  <td>Hệ Điều Hành </td>
                  <td>{{ Product[0].operatingsystem }}</td>
                </tr>
                <tr>
                  <td>Màn Hình</td>
                  <td>{{ Product[0].Screen }}</td>
                </tr>
                <tr>
                  <td>Card đồ hoạ</td>
                  <td>{{ Product[0].Graphicscard }}</td>
                </tr>
                <tr>
                  <td>Tên CPU </td>
                  <td>{{ Product[0].Cpuname }}</td>
                </tr>
                
              <!-- Add more rows for other details -->
            </tbody>
          </v-table>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog" color="primary">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  <footer-bar/>
</div>
</template>
  
<script>
import numeral from 'numeral';

import axios from 'axios';
import { toast } from 'vue3-toastify'

import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';

import ReviewView from './ReviewView.vue';

export default {
  name: 'ProductDetail',
  props:['id'],
  components:{
    TopBar,
    FooterBar,
    ReviewView
  },
  data(){
    return{
    showDialog: false,
    quantity:1,
    Product: null,
    Add: true,
    averageRating: 0,
    Review: [],
    showReviewView: false,
    locale: 'vi-VN',
    };
  },
  methods:{
    openDialog() {
    this.showDialog = true;
  },
  closeDialog() {
    this.showDialog = false;
  },
    formatPrice(price) {
      return numeral(price).format('0,0');
    },
    TangSoLuong(){
      this.quantity++;
    },
    GiamSoLuong(){
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    getProduct(){
      axios.get('https://localhost:44367/api/Products/GetProductstoID?newproductsID='+this.id)
        .then(response =>{
          this.Product = response.data;
          console.log(this.Product)
  
          Product.newPrice = product.Price + (product.Price * (product.promotion / 100));
             
        }).catch(error => {
          console.log(error)
        });
    },
    addToCart(){ 
      let cart = this.$store.state.cart;
      let object = cart.find(o => o.ProductsId === this.Product[0].ProductsId)
      if(object){
        console.log('Co san pham roi')
        // this.Product[0].qty = this.Product[0].qty + this.quantity
        
        this.$store.commit('updateCart',{products:this.Product[0]})
        toast.success('cart updated',{autoClose:500})
        toast.autoClose=500
        
        console.log(this.Product[0].qty)
        console.log("quantity",this.quantity)
      }
      else{
        this.Product[0].qty = this.quantity
        this.$store.commit('addCart',{products:this.Product[0], Add:this.Add})
        console.log(this.Product.quantity)

        // Hiển thị thông báo sử dụng thư viện toast
        let toastMSG = 'Added to cart';
        toast(toastMSG, {
          autoClose: 1000,
        });
      }
    },
    getReview(){
      axios.get('https://localhost:44367/api/Review/GetReviewByIdProduct?ProductsId='+this.id)
        .then(response =>{
          this.Review = response.data;
          console.log("review",this.Review)    
          console.log("review", this.Review.length)    
          
          const totalRating = this.Review.reduce((acc, review) => acc + review.Rating, 0);
         
          console.log("review",totalRating / this.Review.length)
          this.averageRating = totalRating / this.Review.length;
        }).catch(error => {
          console.log(error)
        });
    },
    formatReviewDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Sử dụng toLocaleDateString để chỉ lấy ngày tháng năm
    },
    showReview(){
      if(localStorage.getItem('userId')){
        this.showReviewView=true
      }
      else{
        alert("Bạn phải đăng nhập trước!!!")
      }
      
    }
    
  },
  created(){
    console.log(this.id);
    this.getProduct();
    this.getReview();
    
  },
  computed:{
    computedNewPrice() {
      // Tính toán giá mới dựa trên giảm giá
      //return (this.Product[0].Price * (100 - this.Product[0].promotion) / 100).toFixed(0);
      return (this.Product[0].Price + (this.Product[0].Price * (this.Product[0].promotion / 100))).toFixed(0);

    },
    
  },
  mounted(){
    

  }
  
}
document.addEventListener('DOMContentLoaded',function(){
  var rows = document.querySelectorAll('#table-detail tr');
    for (var i = 0; i < rows.length; i++) {
      if (i % 2 === 1) {
        rows[i].style.backgroundColor = '#f2f2f2';
      }
    }
});
</script>
  
<style >
.name{
  font-size: 18px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
}
.khuyenmai .title{
  background: #fb4e4e;
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 8px 15px;
}
.khuyenmai .content{
  padding: 12px;
  border: 1px solid #fb4e4e;
}
.khuyenmai .content p{
  display: block;
  line-height: 22px;
  font-size: 14px;
}
.main-price{
  padding: 16px 0px;
  border-bottom: 1px solid #ededed;
}
.flex-item{
  display: flex;
  align-items: center;
}
.price{
  font-size: 28px;
  font-weight: 700;
  color: #fb4e4e;
}
.old-price{
  font-size: 18px;
  font-weight: 600;
  color: #8d94ac;
  padding: 0px 16px;
}
.sale-off{
  padding: 2px 6px;
  border: 1px solid #fb4e4e;
  font-weight: 600;
  color:#fb4e4e;
}
.baohanh .item{
  font-size: 12px;
  color: #3e4b75;
  font-weight: 600;
  padding: 6px 8px;
  background: #ededed;
  margin-right: 8px;
}
.group-add-product{
  margin-top: 20px;
}
ul li{
  font-size: 15px;
}
.title{
  padding-bottom: 30px;
}
#table-detail tr:nth-child(even){
  background: #f5f5f5;
}

</style>
  