<template>
  <div>
    <top-bar></top-bar>
    <v-app>
      <v-navigation-drawer v-model="drawer" app color="#425C5A" class="rounded-e-xl">
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

              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters>
        </v-row>
        <div style="position: relative; z-index: 9999" class="mt-2">
          <v-img src="map.png" contain max-height="100"></v-img>
        </div>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <v-card class="pa-2">
            <v-card-title>
              <h3>Danh sách đơn hàng</h3>
            </v-card-title>
            <v-card-text>
              <v-simple-table
                :items="orders"
                :headers="headers"
                disable-pagination
                hide-default-footer
              >
                <template v-slot:item.id="{ item }">
                  <v-text>{{ item.id }}</v-text>
                </template>

                <template v-slot:item.createdAt="{ item }">
                  <v-text>{{ item.createdAt }}</v-text>
                </template>

                <template v-slot:item.totalPrice="{ item }">
                  <v-text>{{ item.totalPrice }}</v-text>
                </template>

                <template v-slot:item.status="{ item }">
                  <v-chip
                    v-bind:color="getStatusColor(item.status)"
                    class="ml-2"
                  >
                    {{ item.status }}
                  </v-chip>
                </template>

                <template v-slot:item.actions="{ item }">
                  <v-btn
                    color="primary"
                    small
                    @click="viewDetails(item)"
                  >
                    Xem chi tiết
                  </v-btn>

                  <v-btn
                    color="red"
                    small
                    @click="cancelOrder(item)"
                  >
                    Hủy
                  </v-btn>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
      <footer-bar />
    </v-app>
  </div>
</template>

<script>
import { ref, axios } from "vue";
import TopBar from "@/components/TopBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "UserProduct",
  props: ["id"],
  components: {
    TopBar,
    FooterBar,
  },
  data() {
    return {
      drawer: ref(null),
      links: [
        { text: "Hồ Sơ Người Dùng", icon: "mdi mdi-account-box-multiple", route: "/ho-so" },
        { text: "Địa Chỉ", icon: "mdi mdi-map-marker", route: "/dia-chi" },
        { text: "Đơn Hàng Của Tôi", icon: "mdi mdi-shopping", route: "/don-hang" },
        { text: "Đăng Xuất", icon: "mdi mdi-logout", route: "/dang-xuat" },
      ],
      orders: [],
      headers: [
        { text: "Mã đơn hàng", value: "id" },
        { text: "Ngày tạo", value: "createdAt" },
        { text: "Tổng giá trị", value: "totalPrice" },
        { text: "Trạng thái", value: "status" },
        { text: "Thao tác", value: "actions" },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      console.log("Route to navigate:", route);
      this.$router.push(route).catch(err => console.error("Navigation error:", err));
    },
    viewDetails(order) {
      console.log("Xem chi tiết đơn hàng", order);
    },
    cancelOrder(order) {
      console.log("Hủy đơn hàng", order);
    },
    getStatusColor(status) {
      switch (status) {
        case "Đang xử lý":
          return "primary";
        case "Đã giao hàng":
          return "success";
        case "Đã hủy":
          return "red";
        default:
          return "gray";
      }
    },
    loadOrders() {
      axios
        .get("https://example.com/api/orders")
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadOrders();
  },
};
</script>
