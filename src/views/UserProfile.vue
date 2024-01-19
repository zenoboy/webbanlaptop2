<template>
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
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="name"
              label="Họ tên"
              required
              outlined
            />
            <v-text-field
              v-model="phone"
              label="Số điện thoại"
              outlined
              @input="sanitizePhoneNumber"
            />
            <v-text-field
              v-model="email"
              label="Email"
              outlined
            />
            <v-inline>
              <v-col cols="12">
                <div class="d-flex align-center">
                  <span class="mb-5" style="color: #425C5A;">Giới tính:</span>
                  <v-radio-group v-model="gender" inline>
                    <v-radio label="Nam" value="male" color="#425C5A"></v-radio>
                    <v-radio label="Nữ" value="female" color="#425C5A"></v-radio>
                  </v-radio-group>
                </div>
              </v-col>
            </v-inline>
            <v-row>
              <v-col cols="4">
                <v-combobox
                  v-model="day"
                  :items="getDaysArray()"
                  label="Ngày"
                  outlined
                  dense
                  color="#425C5A"
                ></v-combobox>
              </v-col>
              <v-col cols="4">
                <v-combobox
                  v-model="month"
                  :items="months"
                  label="Tháng"
                  outlined
                  dense
                  color="#425C5A"
                ></v-combobox>
              </v-col>
              <v-col cols="4">
                <v-combobox
                  v-model="year"
                  :items="years"
                  label="Năm"
                  outlined
                  dense
                  color="#425C5A"
                ></v-combobox>
              </v-col>
            </v-row>
            <v-btn color="#B49239" type="submit" v-if="valid">Cập nhật</v-btn>
          </v-form>
        </v-container>
      </v-main>
    </v-app>
    <footer-bar/> 
  </template>
  
  <script>
  import { ref } from "vue";
  import TopBar from '@/components/TopBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
  
  export default {
    name: 'UserProfile',
    props:['id'],
    components:{
    TopBar,
    FooterBar
  },
    data() {
      return {
        links: [
          { text: "Hồ Sơ Người Dùng", icon: "mdi mdi-account-box-multiple" },
          { text: "Địa Chỉ", icon: "mdi mdi-map-marker" },
          { text: "Đơn Hàng Của Tôi", icon: "mdi mdi-shopping" },
          { text: "Đăng Xuất", icon: "mdi mdi-logout" },
        ],
        drawer: ref(null),
        day: 1,
        month: 1,
        year: new Date().getFullYear(),
        name: "",
        phone: "",
        email: "",
        gender: "",
        address: "",
        province: "",
        district: "",
        valid: true,
        months: Array.from({ length: 12 }, (_, i) => i + 1),
        years: Array.from({ length: 70 }, (_, i) => new Date().getFullYear() - i),
      };
    },
    methods: {
      sanitizePhoneNumber() {
        this.phone = this.phone.replace(/\D/g, "");
      },
      getDaysArray(month, year) {
        const daysInMonth = this.getDaysInMonth(this.month, this.year);
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  },
      getDaysInMonth(month, year) {
        if (month === 2) {
          // Tháng 2
          return this.isLeapYear(year) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
          // Tháng 4, 6, 9, 11 có 30 ngày
          return 30;
        } else {
          // Các tháng còn lại có 31 ngày
          return 31;
        }
      },
      isLeapYear(year) {
        // Hàm kiểm tra năm nhuận
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      },
      
    },
  };
  </script>