<template>
    
<top-bar></top-bar>
        <v-row>
            <v-col><v-img src="https://www.tncstore.vn/media/product/250-5812-acer-nitro-5-tiger-2-2.jpg"></v-img></v-col>
            <v-col>
              <h1 class="name">Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV i5-11400H/ 8GB/ 512GB/ RTX 3050 4GB/ Win 11</h1>
              <ul style="margin-top: 20px;">
                <li>CPU: Intel® Core i5-11400H (upto 4.50 GHz, 12MB)</li>
                <li>RAM: 8GB khe rời DDR4 3200MHz (2 khe, tối đa 32GB)</li>
                <li>Ổ cứng: 512GB PCIe NVMe SSD</li>
                <li>VGA: NVIDIA® GeForce RTX™ 3050 4GB GDDR6</li>
                <li>Màn hình: 15.6 inch FHD(1920 x 1080) IPS 144Hz</li>
                <li>Pin: 4-cell, 57.5 Wh</li>
                <li>Cân nặng: 2.2 kg</li>
                <li>HĐH: windows 11</li>
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
                    <div class="price">16.990.000 đ</div>
                    <del class="old-price">23.990.000 đ </del>
                    <div class="sale-off">-30%</div>
                  </div>

                  <div class="baohanh flex-item">
                  <div class="item">Bảo hành 12 tháng</div>
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
                    <v-btn style="margin-right: 30px; height: 45px;" color="#3278f6" >Thêm vào giỏ hàng</v-btn>
                    
                    <v-btn style="height: 45px;" color="#fb4e4e">Mua Ngay</v-btn>
                  </div>
                </div>
              </div>
              
            </v-col>
        </v-row>

        <v-row>
          <v-col :cols="7" style="border-right: 1px solid #ededed;">
            <h2 class="title">MÔ TẢ SẢN PHẨM</h2>
            <p>Đánh giá chi tiết chiếc Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV
Cấu hình mạnh mẽ, vượt trội
Với sự kết hợp từ CPU Core i5 -11400H và GPU NVIDIA GeForce RTX 3050, laptop Acer Nitro 5 Eagle AN515-57 sẽ cho chúng ta hiệu năng tốt để xử lý các công việc đồ họa đơn giản trên các phần mềm chuyên dụng, tốc độ xử lý thông tin cũng tương đối nhanh và mượt. </p>
          </v-col>
          <v-col :cols="5">
            <h2 class="title">THÔNG SỐ KỸ THUẬT</h2>
            <table>
              <tbody></tbody>
            </table>
          </v-col>
        </v-row>
      
      <footer-bar/>   
    
</template>
  
<script>
import TopBar from '@/components/TopBar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  components:{
    TopBar,
    FooterBar
  },
  data(){
    return{
      quantity:1
    }
  },
  methods:{
    TangSoLuong(){
      this.quantity++;
    },
    GiamSoLuong(){
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  }
}
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
</style>
  