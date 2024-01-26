<template>
    <section class="h-100 h-custom" >
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
        <div class="card border-0">
            <div class="card-body p-4">
    
            <div class="row">
                <div class="col-lg-8">
                <h5 class="mb-3"><router-link :to="{name:'sanpham'}" class="text-body"><i
                        class="fas fa-long-arrow-alt-left me-2"></i>Tiếp tục mua sắm</router-link></h5>
                <hr>
    
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                    <p class="mb-0">Bạn có {{ $store.state.cart.length }} sản phẩm trong giỏ hàng</p>
                    </div>
                </div>
    
                <div v-for="item in $store.state.cart" class="card mb-3 shadow-sm border-0" :key="item.ProductsId">
                    <div class="card-body">
                   

                    <v-row>
                        <v-col cols="6">
                            <div class="d-flex flex-row align-items-center">
                            <div>
                                <img
                                
                                :src="'https://localhost:7072/images/' + item.ImagerUrl"
                                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                            </div>
                            <div class="ms-3">
                                <p>{{ item.ProductsName }}</p>
                            </div>
                        </div>
                        </v-col>

                        <v-col cols="3">
                            <div class="d-flex flex-row align-items-center">
                                <div >
                                    <CartAddRemove :products="item"/>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="3">
                            <div class="d-flex flex-row align-items-center">
                                <div >
                                    <h5 class="">{{ item.Price*item.qty }} đ</h5>
                                    
                                </div>
                                <v-spacer></v-spacer>
                                <a  role="button" @click="removeItem(item)"  style="color: #cecece; "><v-icon>mdi mdi-trash-can-outline</v-icon></a>
                            </div>
                        </v-col>
                    </v-row>

                    </div>
                </div>
    
                </div>
                <div class="col-lg-4">
    
                <div class="card bg-primary text-white rounded-0 border-0">
                    <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Hóa đơn</h5>
                        <i class="bi bi-cart3 h1"></i>
                    </div>
                    <hr class="my-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2">Tổng tiền</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>{{ $store.state.cartTotal }} đ</p>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Thành tiền</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>{{ $store.state.cartTotal }} đ</p>
                    </div>
    
                    
                    <v-btn style="color: aliceblue;" to="/checkout" color="#0dcaf0" >Thanh toán</v-btn>
    
                    </div>
                </div>
    
                </div>
    
            </div>
    
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
    </template>
    <script>
    import CartAddRemove from '../components/CartAddRemove.vue';
    
    export default{
    components :{CartAddRemove},
    methods:{
        removeItem(item){
            this.$store.commit('addRemoveCart',{products:item,toAdd:false})
        },
       
    },
    mounted(){
    
    }
    
    }
    </script>