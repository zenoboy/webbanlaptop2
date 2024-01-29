<template>
    <top-bar/>
    <div style="padding-top: 50px;">
        <v-row>
            <v-col :cols="8">
                <div class="title">
                    <h2>Thông tin giao hàng</h2>
                </div>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="userProfile.UserName" label="Họ tên người nhận hàng"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="userProfile.newPhone" label="Số điện thoại"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select 
                                v-model="selectedCity" 
                                :options="cities"
                                :items="cities" 
                                label="Tỉnh, thành phố" 
                                item-title="name"
                                item-value="code"
                                density="compact"
                                @input="getDistricts"></v-select>
                        </v-col>
                        <v-col>
                            <v-select 
                                v-model="selectedDistrict" 
                                :options="districts"
                                :items="districts" 
                                label="Quận, huyện" 
                                item-title="name"
                                item-value="code"
                                @input="getWards"
                                density="compact"></v-select>
                        </v-col>
                        <v-col>
                            <v-select 
                                v-model="selectedWard" 
                                :options="wards"
                                :items="wards" 
                                label="Phường, xã" 
                                item-title="name"
                                item-value="code"
                                density="compact"
                                @input="printResult"
                                ></v-select>
                        </v-col>
                    </v-row>
                    <v-textarea v-model="userProfile.newAddres" label="Địa chỉ nhận hàng"></v-textarea>
                     
                    
                </v-form>
            </v-col>
            <v-col :cols="4">
                <div class="title">
                    <h2>Thông tin giỏ hàng</h2>
                </div>
                <div v-for="item in $store.state.cart" :key="item.ProductsId"  class="content-product">
                    <div class="item-product flex-item">
                        <v-img 
                            :src="'https://localhost:7072/images/' + item.ImagerUrl"
                            max-width="100"
                            max-height="100"
                            
                            
                            style="margin-right: 20px; width: 100px;"
                        ></v-img>
                        <div class="info">
                            <p>{{ item.ProductsName }}</p>
                            <div class="flex-item">
                                <b style="margin-right: 110px;">x {{ item.qty }}</b>
                                
                                <p style="font-size: 18px;" class="price">{{ item.Price*item.qty }} đ</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <v-divider></v-divider>
                <v-row>
                    <v-col><b>Tổng chi phí</b></v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <p style="font-size: 18px;" class="price">{{ $store.state.cartTotal }} đ</p>
                    </v-col>
                </v-row>
                
                    <v-btn @click="SendCart" color="blue" block>Xác nhận mua hàng</v-btn>
                
            </v-col>
            
        </v-row>
        <buy-success-view
            :visible="showBuySuccessDialog"
            @close="showBuySuccessDialog=false"
            
        />
    </div>
</template>

<script>
import axios from 'axios';
import TopBar from '@/components/TopBar.vue';
import BuySuccessView from './BuySuccessView.vue';

export default {
    components:{
        TopBar,
        BuySuccessView
    },
    data(){
        return{
            cities:[],
            districts: [],
            wards: [],
            selectedCity: null,
            selectedDistrict: null,
            selectedWard: null,
            userId: null,
            userProfile: {
                UserId: '',
                UserName:'',
                newPhone:'',
                newAddres:'',
                city:'',
                district:'',
                ward:''
                
            },
            orderId: null,
            showBuySuccessDialog: false,
        }
    },
    methods:{
        getProvinces(){
        axios.get("https://provinces.open-api.vn/api/")
        .then(response => {
                this.cities = response.data;
                //this.cities = response.data.map(city => city.name);

            // Log the city names for debugging
            console.log('Cities:', this.cities);
        })
        .catch(error => {
            console.log("Lỗi khi lấy dữ liệu tỉnh/thành: " + error);
        });
        },
        getDistricts(){
        if(this.selectedCity){
            axios.get(`https://provinces.open-api.vn/api/p/${this.selectedCity}?depth=2`)
            .then(response =>{
            this.districts = response.data.districts;
            console.log(this.districts)
            })
        }
        else{
            this.districts=[]
        }
        },
        getWards() {
            if (this.selectedDistrict) {
                axios.get(`https://provinces.open-api.vn/api/d/${this.selectedDistrict}?depth=2`)
                .then(response => {
                    this.wards = response.data.wards;
                })
                .catch(error => {
                    console.log("Lỗi khi lấy dữ liệu phường/xã: " + error);
                });
            } else {
                this.wards = [];
            }
        },
        printResult() {
            if (this.selectedCity && this.selectedDistrict && this.selectedWard) {
                //this.result = `${this.getOptionText(this.cities, this.selectedCity)} | ${this.getOptionText(this.districts, this.selectedDistrict)} | ${this.getOptionText(this.wards, this.selectedWard)}`;
                this.userProfile.city = this.getOptionText(this.cities, this.selectedCity);
                this.userProfile.district = this.getOptionText(this.districts, this.selectedDistrict)
                this.userProfile.ward = this.getOptionText(this.wards, this.selectedWard)
            } else {
                this.result = "";
            }
        },
        getOptionText(options, value) {
            const option = options.find(option => option.code === value);
            return option ? option.name : "";
        },
        SendCart(){
            this.userProfile.UserId = localStorage.getItem('userId')
            //this.userProfile.UserId = 1
            //axios.post('https://localhost:7072/api/OrderProduct_/PostOrderProduct?newUserID='+userId+'&newPhone=4444444&newAddres=444444&city=h&district=h&ward=h')
            //axios.post('https://65a48de652f07a8b4a3d7466.mockapi.io/order',this.userProfile)
            axios.post('https://localhost:7072/api/OrderProduct_/PostOrderProduct?newUserID='+this.userProfile.UserId+'&UserName='+this.userProfile.UserName+'&newPhone='+this.userProfile.newPhone+'&newAddres='+this.userProfile.newAddres+'&city='+this.userProfile.city+'&district='+this.userProfile.district+'&ward='+this.userProfile.ward)
            .then(response=>{
                console.log('orderData',response.data);
                // Lấy orderId từ response và lưu vào trường dữ liệu
                this.orderId = response.data[0].OrderID;
                console.log('order', this.orderId);
                
                
                this.PostOrderDetail();
            })
            .catch(error=>{
                console.log('orderloi',error);
            })
            console.log(this.userProfile)
            
        },
        PostOrderDetail(){
            this.$store.state.cart.forEach(product => {
                const orderDetail = {
                    OrderId: this.orderId,
                    ProductId: product.ProductsId,  // Thay đổi logic tùy thuộc vào cách bạn lưu trữ ProductId
                    Quatity: product.qty,
                    //Price: product.Price
                };
                axios.post('https://localhost:7072/api/OrderDetail/PostOrderDetail?newOrderID='+orderDetail.OrderId+'&newProductID='+orderDetail.ProductId+'&newQuatity='+orderDetail.Quatity)
                .then(response=>{
                    console.log('orderDetail',response.data);
                    this.lessQuantity(product.ProductsId, product.qty)
                })
                .catch(error=>{
                    console.log(error);
                });

                
            }
            
            );
            
            this.showDialog();
        },
        lessQuantity(ProductId, quantityToReduce){
            axios.get('https://localhost:7072/api/Products/GetProductstoID?newproductsID='+ProductId)
            .then(response =>{
                const productInfo = response.data[0];
                productInfo.Quatity -= quantityToReduce;
                console.log('okee', response.data);
                axios.put('https://localhost:7072/api/Products/UpdateProducts?newProductsId='+ProductId+'&newProductsName='+productInfo.ProductsName+'&newQuatity='+productInfo.Quatity+'&newPrice='+productInfo.Price+'&newProductsDescription='+productInfo.ProductsDescription+'&newCategoryId='+productInfo.CategoryId+'&newpromotion='+productInfo.promotion+'&neworigin='+productInfo.origin+'&newwarranty='+productInfo.warranty+'&trademask='+productInfo.trademask+'&Screen='+productInfo.Screen+'&Graphicscard='+productInfo.Graphicscard+'&operatingsystem='+productInfo.operatingsystem+'&Cpuname='+productInfo.Cpuname)
                .then(response =>{
                    console.log('okee', response.data);
                    
                })
                .catch(error => {
                    console.error('okee1', error);
                });
            })
        },
        showDialog(){
            this.$store.commit('clearCart');
            this.showBuySuccessDialog = true;
        }
    },
    mounted(){
        this.getProvinces();
    },
    watch: {
        selectedCity: function(newVal, oldVal) {
            this.getDistricts();
            if (newVal !== oldVal) {
                this.selectedDistrict = null;
                this.selectedWard = null;
            }
        },
        selectedDistrict: function(newVal, oldVal) {
            if (newVal !== oldVal) { 
            this.selectedWard = null;}
            this.getWards();
        },
        selectedWard: function(){
            this.printResult();
        }

    },

}

</script>

<style>
.flex-item{
    display: flex;
}
</style>