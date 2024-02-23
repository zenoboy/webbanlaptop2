<template>
  <div>
    <top-bar></top-bar>
    <v-app>
      <v-navigation-drawer v-model="drawer" app color="#425C5A" class="rounded-e-xl" >
        <v-sheet color="#3D5654" class="pa-4 rounded-te-xl text-center">
          <v-progress-circular
            model-value="80"
            color="#B49239"
            :size="100"
            :width="2"
            class=""
          >
            <v-avatar size="85">
              <v-img src="3033143.png"></v-img>
            </v-avatar>
          </v-progress-circular>

          <div class="mt-4">
            <v-avatar>
              <v-icon color="white">mdi mdi-account</v-icon>
            </v-avatar>
          </div>
          <span class="mb-6 text-caption" style="color: #B49239;">*********@gmail.com</span>
        </v-sheet>

        <v-list>
          <v-list-item-group v-if="links.length">
            <v-list-item
              v-for="(item, i) in links"
              :key="i"
              :value="item"
              active-class="border"
              :ripple="false"
              @click="navigateTo(item.route)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" color="#B49239"></v-icon>
              </template>

              <v-list-item-title >{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters>
        </v-row>
      </v-navigation-drawer>
      <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-2">
              <v-tabs v-model="selectedTab" background-color="transparent" color="black">
                <v-tab v-for="(tab, index) in tabs" :key="index" @click.capture.stop="changeTab(index)">
                  {{ tab }}
                </v-tab>
              </v-tabs>
            </v-card>
                </v-col>
              </v-row>
              <v-row v-if="selectedTab ===0">
            <v-col >
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      STT
                    </th>
                    <th class="text-left">
                      Họ tên người nhận
                    </th>
                    <th class="text-left">
                      Ngày đặt hàng
                    </th>
                    <th class="text-left">
                      Địa chỉ
                    </th>
                    <th class="text-left">
                      Chức năng
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orders_1, index) in orders_1" :key="index">
                    <td>
                      {{ index+1 }}
                    </td>
                    <td>{{ orders_1.UserName }}</td>
                    <td>{{ orders_1.OrderDate }}</td>
                    <td>{{ orders_1.UserAddress }}</td>
                    <td><v-btn @click="dialog=true,
                            idOrder=orders_1.OrderID" density="compact" color="success"> Xem chi tiết</v-btn></td>
                  </tr>
                </tbody>

              </v-table>

            </v-col>
            
          </v-row>
          <v-row v-if="selectedTab ===1">
            <v-col >
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      STT
                    </th>
                    <th class="text-left">
                      Họ tên người nhận
                    </th>
                    <th class="text-left">
                      Ngày đặt hàng
                    </th>
                    <th class="text-left">
                      Địa chỉ
                    </th>
                    <th class="text-left">
                      Chức năng
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orders_2, index) in orders_2" :key="index">
                    <td>
                      {{ index+1 }}
                    </td>
                    <td>{{ orders_2.UserName }}</td>
                    <td>{{ orders_2.OrderDate }}</td>
                    <td>{{ orders_2.UserAddress }}</td>
                    <td><v-btn @click="dialog=true,
                            idOrder=orders_2.OrderID" density="compact" color="success"> Xem chi tiết</v-btn></td>
                  </tr>
                </tbody>

              </v-table>

            </v-col>
            
          </v-row>
          <v-row v-if="selectedTab ===2">
            <v-col >
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      STT
                    </th>
                    <th class="text-left">
                      Họ tên người nhận
                    </th>
                    <th class="text-left">
                      Ngày đặt hàng
                    </th>
                    <th class="text-left">
                      Địa chỉ
                    </th>
                    <th class="text-left">
                      Chức năng
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orders_3, index) in orders_3" :key="index">
                    <td>
                      {{ index+1 }}
                    </td>
                    <td>{{ orders_3.UserName }}</td>
                    <td>{{ orders_3.OrderDate }}</td>
                    <td>{{ orders_3.UserAddress }}</td>
                    <td><v-btn @click="dialog=true,
                            idOrder=orders_3.OrderID" density="compact" color="success"> Xem chi tiết</v-btn></td>
                  </tr>
                </tbody>

              </v-table>

            </v-col>
            
          </v-row>
          <v-row v-if="selectedTab ===3">
            <v-col >
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      STT
                    </th>
                    <th class="text-left">
                      Họ tên người nhận
                    </th>
                    <th class="text-left">
                      Ngày đặt hàng
                    </th>
                    <th class="text-left">
                      Địa chỉ
                    </th>
                    <th class="text-left">
                      Chức năng
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orders_4, index) in orders_4" :key="index">
                    <td>
                      {{ index+1 }}
                    </td>
                    <td>{{ orders_4.ProductsName }}</td>
                    <td>{{ orders_4.OrderDate }}</td>
                    <td>{{ orders_4.UserAddress }}</td>
                    <td><v-btn @click="dialog=true,
                            idOrder=orders_4.OrderID" density="compact" color="success"> Xem chi tiết</v-btn>
                    </td>
                  </tr>
                </tbody>

              </v-table>

            </v-col>
            
          </v-row>
        <v-row v-if="!hasPurchased">
      <v-col cols="12" class="text-center mt-4">
        <v-btn @click="goToHomePage" color="primary">
          Tiếp tục mua hàng
        </v-btn>
      </v-col>
    </v-row>
        <v-row v-else >
          <v-col cols="12">
            <v-card class="pa-2">
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
    </v-app>
    <user-product-detail
      
      :dialog="dialog"
      :idOrder="idOrder"
      @close="dialog=false"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
// import { ref, onMounted } from "vue";
import axios from "axios";
import TopBar from "@/components/TopBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import UserProductDetail from "./UserProductDetail.vue";
export default {
  name: "UserProduct",
  props: ["id"],
  components: {
    TopBar,
    FooterBar,
    UserProductDetail,
  },
  data() {
    return {
      newUserID: null,
      drawer: ref(null),
      selectedTab: 0,
      tabs: [
        
        "Chờ Xác Nhận", "Đang vận chuyển", "Hoàn thành", "Hủy"],
      links: [
        { text: "Hồ Sơ Người Dùng", icon: "mdi mdi-account-box-multiple", route: "/ho-so" },
        
        { text: "Đơn Hàng Của Tôi", icon: "mdi mdi-shopping", route: "/don-hang" },
      
      ],
      hasPurchased: false,
      orders_1: [], 
      orders_2: [], 
      orders_3: [], 
      orders_4: [], 
      userId: sessionStorage.getItem('userId'),
      // userId: 1,
      orders:[],
      dialog: false,
      idOrder: ''
    };
  },
  methods: {

    updateOrders() {
    axios.get("https://localhost:44367/api/OrderDetail/GetOrderDetail")
      .then(response => {
        this.orders = response.orders;
        console.log("Updated orders:", this.orders);
      })
      .catch(error => {
        console.error("Error updating orders:", error);
      });
    },
    getOrder_2(){
      axios.get('https://localhost:44367/api/OrderProduct_/GetOrderByUserIdAndStatus?userId='+this.userId+'&status=2')
      .then(response => {
        this.orders_2 = response.data;
        console.log(" orders:", this.orders_2);
      })
      .catch(error => {
        console.error("Error get orders:", error);
      });
    },
    getOrder_1(){
      axios.get('https://localhost:44367/api/OrderProduct_/GetOrderByUserIdAndStatus?userId='+this.userId+'&status=1')
      .then(response => {
        this.orders_1 = response.data;
        console.log(" orders:", this.orders_1);
      })
      .catch(error => {
        console.error("Error get orders:", error);
      });
    },
    getOrder_3(){
      axios.get('https://localhost:44367/api/OrderProduct_/GetOrderByUserIdAndStatus?userId='+this.userId+'&status=3')
      .then(response => {
        this.orders_3 = response.data;
        console.log(" orders:", this.orders_3);
      })
      .catch(error => {
        console.error("Error get orders:", error);
      });
    },
    getOrder_4(){
      axios.get('https://localhost:44367/api/OrderProduct_/GetOrderByUserIdAndStatus?userId='+this.userId+'&status=4')
      .then(response => {
        this.orders_4 = response.data;
        console.log(" orders:", this.orders_4);
      })
      .catch(error => {
        console.error("Error get orders:", error);
      });
    },
    // Trong phần xử lý khi admin chỉnh sửa trạng thái của đơn hàng
handleEditOrderStatus() {
  // Gọi hàm cập nhật đơn hàng từ backend
  this.updateOrders();
},

    navigateTo(route) {
      console.log("Route to navigate:", route);
      this.$router.push(route).catch(err => console.error("Navigation error:", err));
    },
    changeTab(index) {
      this.selectedTab = index;
    },
    goToHomePage() {
      this.$router.push("/").catch(err => console.error("Navigation error:", err));
    },


    fetchDataFromBackend() {
  axios.get("https://localhost:44367/api/OrderDetail/GetOrderDetail")
    .then(response => {
      console.log("Response from backend:", response.data);
      this.processBackendData(response.data);
      this.orders = response.data;
    })
    .catch(error => {
      console.error("Error fetching data from backend:", error);
    });
},
    processBackendData(data) {
      this.backendData = data;
      
    },
  },
  mounted() {
    this.fetchDataFromBackend();
    
  },
  created(){
    this.getOrder_2();
    this.getOrder_1();
    this.getOrder_3();
    this.getOrder_4();
  },
  computed: {
    // Tính toán danh sách đơn hàng đã lọc theo trạng thái được chọn
    filteredOrders() {
      switch (this.selectedTab) {
        case 0: // Tab Chờ Xác Nhận
          return this.orders.filter(order => order.status === "Chờ Xác Nhận");
        case 1: // Tab Đang vận chuyển
          return this.orders.filter(order => order.status === "Đang vận chuyển");
        case 2: // Tab Hoàn thành
          return this.orders.filter(order => order.status === "Hoàn thành");
        case 3: // Tab Hủy
          return this.orders.filter(order => order.status === "Hủy");
        default:
          return [];
      }
    },
  },
  
};
</script>
<style>
</style>
