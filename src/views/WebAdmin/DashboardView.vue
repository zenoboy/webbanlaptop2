<template>
  <side-bar-admin-1/>
  <top-bar-admin-1/>
  <div style="">
    <v-row>
      <v-col>
        <v-row style="padding: 12px;">
          <v-col cols="6">
            <v-card style="border: 1px solid #b9ffd3;" color="" >
              <v-row class="d-flex flex-no-wrap justify-space-between">
                <v-col style="background-color: #b9ffd3;" cols="3">
                  <v-avatar style="height: 100%; width: 100%;"  size="30" rounded="0">
                    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img> -->
                    <v-icon
                    color="#22ad56"
                    size="x-large"
                  >mdi mdi-account-multiple</v-icon>
                  </v-avatar>
                  
                </v-col>
                <v-col cols="9">
                  <v-card-title style="padding: 0;" class="">
                    <h5 style="white-space: normal;">Tổng khách hàng</h5>
                  </v-card-title>
                  <v-card-subtitle>
                    <b style="color: black;" v-if="count_customer">{{ count_customer[0].total_custommer }} Khách hàng</b>
                    </v-card-subtitle>
                  <v-divider ></v-divider>
                  <v-card-text style="padding: 0;">
                    <b></b>
                    Tổng số khách hàng được quản lý. 
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6" style="">
            <v-card style="border: 1px solid #adcbf3;" color="" >
              <v-row class="d-flex flex-no-wrap justify-space-between">
                <v-col style="background-color: #adcbf3;" cols="3">
                  <v-avatar style="height: 100%; width: 100%;"  size="30" rounded="0">
                    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img> -->
                    <v-icon
                    color="#1d5aab"
                    size="x-large"
                  >mdi mdi-database</v-icon>
                  </v-avatar>
                  
                </v-col>
                <v-col cols="9">
                  <v-card-title style="padding: 0;" class="">
                    <h5 style="white-space: normal;">Tổng sản phẩm</h5>
                  </v-card-title>
                  <v-card-subtitle>
                    <b style="color: black;" v-if="count_product">{{ count_product[0].total_products }} Sản phẩm</b>
                    </v-card-subtitle>
                  <v-divider ></v-divider>
                  <v-card-text style="padding: 0;">
                    <b></b>
                    Tổng số sản phẩm được quản lý. 
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6" style="">
            <v-card style="border: 1px solid #f2f98a;" color="" >
              <v-row class="d-flex flex-no-wrap justify-space-between">
                <v-col style="background-color: #f2f98a;" cols="3">
                  <v-avatar style="height: 100%; width: 100%;"  size="30" rounded="0">
                    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img> -->
                    <v-icon
                    color="#cec23e"
                    size="x-large"
                  >mdi mdi-cart</v-icon>
                  </v-avatar>
                  
                </v-col>
                <v-col cols="9">
                  <v-card-title style="padding: 0;" class="">
                    <h5 style="white-space: normal;">Tổng đơn hàng</h5>
                  </v-card-title>
                  <v-card-subtitle>
                    <b style="color: black;" v-if="count_order">{{ count_order[0].total_order }} Đơn hàng</b>
                    </v-card-subtitle>
                  <v-divider ></v-divider>
                  <v-card-text style="padding: 0;">
                    <b></b>
                    Tổng số đơn hàng được quản lý. 
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card></v-col>
          <v-col cols="6" >
            <v-card style="border: 1px solid #f9baba;" color="" >
              <v-row class="d-flex flex-no-wrap justify-space-between">
                <v-col style="background-color: #f9baba;" cols="3">
                  <v-avatar style="height: 100%; width: 100%;"  size="30" rounded="0">
                    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img> -->
                    <v-icon
                    color="#de2222"
                    size="x-large"
                  >mdi mdi-alert-circle</v-icon>
                  </v-avatar>
                  
                </v-col>
                <v-col cols="9">
                  <v-card-title style="padding: 0;" class="">
                    <h5 style="white-space: normal;">Sản phẩm sắp hết</h5>
                  </v-card-title>
                  <v-card-subtitle>
                    <b style="color: black;" v-if="count_productLIMIT">{{ count_productLIMIT[0].total_products }} Sản phẩm</b>
                    </v-card-subtitle>
                  <v-divider ></v-divider>
                  <v-card-text style="padding: 0;">
                    <b></b>
                    Số sản phẩm cảnh báo hết cần nhập thêm.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card></v-col>
          <v-col cols="12">
            <v-card style="border: 1px solid blue;">
                <v-card-title>
                  <h4 style="font-size: 18px;">Sản phẩm sắp hết hàng</h4>
                  <v-divider  :thickness="3" color="warning"></v-divider>
                  <v-table density="compact" fixed-header height="235px">
                    <thead>
                      <tr>
                        <th class="text-left ">
                          STT
                        </th>
                        <th class="text-left">
                          Mã SP
                        </th>
                        <th class="text-left">
                          Tên sản phẩm
                        </th>
                        <th class="text-left">
                          Số lượng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr
                      v-for="(item, index) in productLIMIT"
                      :key="item.id"
                    >
                      <td>{{ index+1 }}</td>
                      <td>{{ item.ProductsId }}</td>
                      <td class="product-name-cell">{{ item.ProductsName }}</td>
                      <td>{{ item.Quatity }}</td>
                    </tr>
                  </tbody>
                  </v-table>
                  
                </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col  style=" padding: 0;">
          <v-row  style="width: 100%; margin-top: 10px; ">
            <v-col cols="12">
              <div class="justity: center">
                <b style="font-size: 18px; margin-left: 140px;" > Top 5 sản phẩm bán chạy nhất</b >
              </div>
                
              </v-col>  
            <v-col cols="12" style="border: 1px solid #f0f8ff; background-color: aliceblue;" >
              <Bar style="height: 250px;" id="bar" :data="chartData" :options="barChartOptions"  v-if="isDataLoaded"/>
              </v-col>
              
              <!-- <v-col  cols="12" style="border: 1px solid yellow; background-color: aliceblue; margin-bottom: 20px;" >
              <Line style="height: 250px;" id="line" :data="lineChartData" :options="lineChartOptions" />
            </v-col> -->
          </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement    
} from 'chart.js'

import { Line , Bar } from 'vue-chartjs'
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)
export default {
  name: 'Dashboard',
  components: {
    SideBarAdmin1, TopBarAdmin1, Line, Bar
  },
  data() {
    return {
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
        {
          label: 'Data One',
          backgroundColor: 'transparent',
          borderColor: "#FC2525",
          data: [40, 39, 10, 40, 39, 80, 40],
          pointBackgroundColor: '#FC2525',
        }
        ]},
        lineChartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        barChartData : {
          labels: ['January', 'February', 'March'],
          datasets: [{ data: [10, 30, 45] }],
        },
        barChartOptions : {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
    display: false, // Tắt hiển thị hướng dẫn ở trên biểu đồ
  },
          title: {
    display: true,
    text: 'Monthly Sales',
    position: 'bottom' // Đặt tiêu đề ở dưới biểu đồ
  }
        },
      
      count_customer:null,
      count_product: null,
      count_order: null,
      count_productLIMIT: null,
      productLIMIT: [],
      bestSeller:[],
      chartData:{
        labels: [],
        datasets: [{
          label: 'Sales',
          backgroundColor: '#42A5F5',
          data: []
        }]
      },
      isDataLoaded: false,
    }
  },
  methods:{
      getCountCustomer(){
        axios.get('https://localhost:44367/api/Users/GetCountCustomer')
        .then(response =>{
          this.count_customer = response.data
          console.log('countCustomer',this.count_customer)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      getCountProduct(){
        axios.get('https://localhost:44367/api/Products/GetCountProduct')
        .then(response =>{
          this.count_product = response.data
          console.log('countProduct',this.count_product)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      getCountOrder(){
        axios.get('https://localhost:44367/api/OrderProduct_/GetCountOrder')
        .then(response =>{
          this.count_order = response.data
          console.log('countOrder',this.count_order)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      getCountProductLIMIT(){
        axios.get('https://localhost:44367/api/Products/GetCountProductLIMIT')
        .then(response =>{
          this.count_productLIMIT = response.data
          console.log('countOrder',this.count_productLIMIT)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      getProductLIMIT(){
        axios.get('https://localhost:44367/api/Products/GetProductLIMIT')
        .then(response =>{
          this.productLIMIT = response.data
          console.log('countOrder',this.productLIMIT)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      GetBestSeller(){
        axios.get('https://localhost:44367/api/Products/GetBestSeller')
        .then(response =>{
          this.bestSeller = response.data
          console.log('best-seller',this.bestSeller)

          // Xử lý dữ liệu từ API và gán vào biểu đồ
          const labels = [];
          const data = [];
          
          this.bestSeller.forEach(item =>{
            labels.push(item.ProductsName)
            data.push(item.total_quantity_sold)
          });

          // Gán dữ liệu vào biểu đồ
          this.chartData.labels = labels;
          this.chartData.datasets[0].data = data;

          // Đánh dấu là đã tải xong dữ liệu
          this.isDataLoaded = true;

          console.log('chart', this.chartData)
        })
        .catch(error=>{
          console.log(error)
        })
      },
      

  },
  created(){
    this.getCountCustomer();
    this.getCountOrder();
    this.getCountProduct();
    this.getCountProductLIMIT();
    this.getProductLIMIT();
    this.GetBestSeller();
  },
  watch:{
    bestSeller : function(){
      
    }
  }
}
</script>
<style>
th{
  font-size: 15px;
}
td{
  font-size: 13px;

}
.product-name-cell {
    max-width: 270px; /* Đặt chiều rộng tối đa cho ô tên sản phẩm */
    overflow: hidden;
    text-overflow: ellipsis; /* Hiển thị dấu ba chấm (...) nếu nội dung quá dài */
    white-space: nowrap; /* Ngăn chặn quá trình xuống dòng */
}
</style>