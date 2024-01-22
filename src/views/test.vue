<template>
    <div>
        <top-bar/>
        <v-row>
            <v-col :cols="7" >
                <router-link :to="{name:'sanpham'}"  >Tiếp tục mua sắm</router-link>
                <div class="main" style="border-top: 1px solid #ededed;">
                    <p>Bạn có 3 sản phẩm trong giỏ hàng</p>
                </div>
                <!-- <div v-for="item in $store.state.cart" :key="item.ProductsId"> -->
                <div>
                    <v-row>
                        <v-col  cols="6">
                            <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div>
                                <img
                                
                                src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/hongtt34/Acer-Swift-3.png"
                                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                            </div>
                            <div class="ms-3">
                                <p>tên sp</p>
                            </div>
                        </div>
                        
                        
                    </div>
                        </v-col>
                        <v-col  cols="3">
                            <div class="d-flex flex-row align-items-center">
                            <div >
                                <CartAddRemove :products="item"/>
                            </div>
                        </div>
                        </v-col>
                        <v-col cols="3">
                            <div class="d-flex flex-row align-items-center">
                            <div >
                                <h5 class="mb-0"><i class="bi bi-currency-dollar"></i>120000</h5>
                                <small  class="text-muted text-decoration-line-through"><i class="bi bi-currency-dollar"></i>120000</small>
                            </div>
                            <a role="button" @click="removeItem(item)" class="ms-4" style="color: #cecece;"><i class="bi bi-trash3 h4"></i></a>
                        </div>
                        </v-col>
                    </v-row>
                </div>

            </v-col>
            <v-col :cols="5">
                <div class="cartdetail">
                    <div class="title flex-item">
                        Thanh toán
                        <v-spacer></v-spacer>
                        <v-icon>mdi mdi-cart-outline</v-icon>
                    </div>
                </div>
            </v-col>
        </v-row>
        
    </div>
    


</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
  components: { TopBar },

}
</script>

<style>
.flex-item{
  display: flex;
  align-items: center;
}

</style>