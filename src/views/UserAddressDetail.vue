<template>
  <div>
    <top-bar></top-bar>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        color="#425C5A"
        class="rounded-e-xl"
      >
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
          <span class="mb-6 text-caption" style="color: #b49239"
            >*********@gmail.com</span
          >
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
        <v-row justify="center" class="spacer ml-16 mt-4" no-gutters> </v-row>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <div w="auto">
            <v-card-title> Tạo địa chỉ </v-card-title>
            <v-card-text>
              <v-row class="mx-auto">
                <v-col cols="12" >
                  <v-text-field 
                  label="Họ và tên" 
                  v-model="name" 
                  required 
                  outlined 
                  />
                  <v-text-field 
                  v-model="userAddress.phone" 
                  label="Số điện thoại" 
                  outlined
                  @input="sanitizePhoneNumberUserAddress"
                  />
                  <div>
                    <select v-model="selectedDistrict">
                      <option
                        v-for="district in districts"
                        :key="district.code"
                        :value="district.code"
                      >
                        {{ district.name }}
                      </option>
                    </select>
                  </div>

                  <v-select
                    v-model="selectedCity"
                    :hint="`${selectedCity}`"
                    :items="cities"
                    label="Tỉnh, thành phố"
                    item-title="name"
                    item-value="code"
                    @input="getDistricts"
                  ></v-select>

                  <v-select
                    v-model="selectedDistrict"
                    :hint="`${selectedDistrict}`"
                    :items="districts"
                    label="Quận, huyện"
                    item-title="name"
                    item-value="code"
                    @input="getWards"
                  ></v-select>

                  <v-select
                    v-model="selectedWard"
                    :hint="`${selectedWard}`"
                    :items="wards"
                    label="Phường, xã"
                    item-title="name"
                    item-value="code"
                  ></v-select>

                  <select
                    id="city"
                    v-model="selectedCity"
                    @change="getDistricts"
                  >
                    <option value="" selected disabled>Chọn tỉnh thành</option>
                    <option
                      v-for="city in cities"
                      :value="city.code"
                      :key="city.code"
                    >
                      {{ city.name }}
                    </option>
                  </select>
                  <select
                    id="district"
                    v-model="selectedDistrict"
                    @change="getWards"
                  >
                    <option value="" selected disabled>Chọn quận huyện</option>
                    <option
                      v-for="district in districts"
                      :value="district.code"
                      :key="district.code"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                  <v-text-field
                    label="Địa chỉ"
                    v-model="userAddress.address"
                    v-if="userAddress"
                  ></v-text-field>
                  <v-inline>
                    <v-col cols="12">
                      <div class="d-flex align-center">
                        <span class="mb-5" style="color: #425c5a"
                          >Loại Địa Chỉ:</span
                        >
                        <v-radio-group v-model="userAddress" inline>
                          <v-radio
                            label="Nhà Riêng/Chung Cư"
                            color="#425C5A"
                            value="home"
                          ></v-radio>
                          <v-radio
                            label="Cơ Quan/ Công ty"
                            color="#425C5A"
                            value="office"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                    </v-col>
                  </v-inline>
                </v-col>
              </v-row>
            </v-card-text>
            <div class="button" >
        <v-btn
          color="red"
          dark
          @click="updateAddress"
          class="mx-auto"
        >
          <span class="justify-center text-center" style="position: relative;
                                     bottom: 2px;" >Cập nhật</span>
        </v-btn>
      </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
    <footer-bar />
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import TopBar from "@/components/TopBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "UserAdressDetail",
  props: ["id"],
  components: {
    TopBar,
    FooterBar,
  },
  data() {
    return {
      userAddress: {
        defaultAddress: false,
    },
      selectedAddressType: "home",
      drawer: ref(null),
      links: [
        {
          text: "Hồ Sơ Người Dùng",
          icon: "mdi mdi-account-box-multiple",
          route: "/ho-so",
        },
        { text: "Địa Chỉ", icon: "mdi mdi-map-marker", route: "/dia-chi" },
        {
          text: "Đơn Hàng Của Tôi",
          icon: "mdi mdi-shopping",
          route: "/don-hang",
        },
        { text: "Đăng Xuất", icon: "mdi mdi-logout", route: "/login" },
      ],
      hasPurchased: false,
      cities: [],
      districts: [],
      wards: [],
      selectedCity: null,
      selectedDistrict: null,
      selectedWard: null,
      userAddress: {
        name: "",
        phone: "",
        province: null,
        district: null,
        address: "",
        division_type: null,
        defaultAddress: false,
      },
    };
  },
  mounted() {
    this.fetchProvinces();
  },
  methods: {
    sanitizePhoneNumberUserAddress() {
      this.userAddress.phone = this.userAddress.phone.replace(/\D/g, "");
    },
    navigateTo(route) {
    console.log("Route to navigate:", route);
    this.$router
      .push(route)
      .catch((err) => console.error("Navigation error:", err));
  },
  changeTab(index) {
    this.selectedTab = index;
  },
  goToHomePage() {
    this.$router
      .push("/")
      .catch((err) => console.error("Navigation error:", err));
  },
    getProvinces() {
      axios
        .get("https://provinces.open-api.vn/api/")
        .then((response) => {
          this.cities = response.data;
          console.log("Cities:", this.cities);
        })
        .catch((error) => {
          console.log("Lỗi khi lấy dữ liệu tỉnh/thành: " + error);
        });
    },
    getDistricts() {
      if (this.selectedCity) {
        axios
          .get(
            `https://provinces.open-api.vn/api/p/${this.selectedCity}?depth=2`
          )
          .then((response) => {
            this.districts = response.data.districts;
            console.log(this.districts);
          });
      } else {
        this.districts = [];
      }
    },
    getWards() {
      if (this.selectedDistrict) {
        axios
          .get(
            `https://provinces.open-api.vn/api/d/${this.selectedDistrict}?depth=2`
          )
          .then((response) => {
            this.wards = response.data.wards;
          })
          .catch((error) => {
            console.log("Lỗi khi lấy dữ liệu phường/xã: " + error);
          });
      } else {
        this.wards = [];
      }
    },
  },
  mounted() {
    this.getProvinces();
  },
  watch: {
    selectedCity: function (newVal, oldVal) {
      console.log("Giá trị mới:", newVal);
      console.log("Giá trị cũ:", oldVal);
      this.getDistricts();
      if (newVal !== oldVal) {
        this.selectedDistrict = null;
        this.selectedWard = null;
      }
    },
    selectedDistrict: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selectedWard = null;
      }
      this.getWards();
    },
  },
};
</script> 
<style scoped>
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>