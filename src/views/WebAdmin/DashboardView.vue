<template>
  <side-bar-admin-1/>
  <top-bar-admin-1/>
  <div style="background-color: #f5f5f5">
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
                    <b style="color: black;">100 Khách hàng</b>
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
                    <b style="color: black;">100 Sản phẩm</b>
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
                    <b style="color: black;">100 Đơn hàng</b>
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
                    <b style="color: black;">10 Sản phẩm</b>
                    </v-card-subtitle>
                  <v-divider ></v-divider>
                  <v-card-text style="padding: 0;">
                    <b></b>
                    Số sản phẩm cảnh báo hết cần nhập thêm.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card></v-col>
          <v-col cols="12" style="border: 1px solid;">
            <v-card style="border: 1px solid blue;">
                <v-card-title>
                  <h4 style="font-size: 18px;">Sản phẩm sắp hết hàng</h4>
                  <v-divider  :thickness="3" color="warning"></v-divider>
                  <v-table density="compact" fixed-header height="250px">
                    <thead>
                      <tr>
                        <th class="text-left ">
                          STT
                        </th>
                        <th class="text-left">
                          Mã sản phẩm
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
                      v-for="(item, index) in desserts"
                      :key="item.id"
                    >
                      <td>{{ index+1 }}</td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.quantity }}</td>
                    </tr>
                  </tbody>
                  </v-table>
                  
                </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col  style="border: 1px solid green; padding: 0;">
          <v-row  style="width: 100%; margin-top: 10px; ">
            <v-col  cols="12" style="border: 1px solid yellow; background-color: aliceblue; margin-bottom: 20px;" >
              <Line style="height: 250px;" id="line" :data="lineChartData" :options="lineChartOptions" />
            </v-col>
            <v-col cols="12" style="border: 1px solid red; background-color: aliceblue;" >
              <Bar style="height: 250px;" id="bar" :data="barChartData" :options="barChartOptions" />
              </v-col>
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
          maintainAspectRatio: false
        },
        desserts: [
          {
            id: '1',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '2',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '3',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '4',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '5',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '6',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '7',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '8',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '1',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '1',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '1',
            name: 'Frozen Yogurt',
            quantity: 1,
          },
          {
            id: '1',
            name: 'Frozen Yogurt',
            quantity: 1,
          }
          
        ],
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
</style>