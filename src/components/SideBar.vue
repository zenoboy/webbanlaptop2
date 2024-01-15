<template>
    <v-navigation-drawer>
      <v-toolbar color="primary">
          <v-icon class="ml-2">mdi-home</v-icon>
          <v-toolbar-title class="mx-2">QUẢN TRỊ SHOP</v-toolbar-title>
      </v-toolbar>
      <v-list density="compact">
      <v-list-subheader>Danh mục </v-list-subheader>
      <v-list-item
        v-for="(item, i) in links"
        :key="i"
        :value="item"
        color="blue"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title >{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
      name:'SideBar',
      data(){
        return{
            links:[
            {icon:' mdi-microsoft-windows',text:'Loại sản phẩm'},
            {icon:' mdi-sale-outline',text:'Sản phẩm'},
            {icon:' mdi-flask',text:'Đơn hàng'},
            {icon:' mdi-calendar',text:'Chi tiết đơn hàng'},
            {icon:' mdi-account-key',text:'Người Dùng'},
            {icon:' mdi-chart-pie',text:'Khách Hàng'},
            ]
        }
      }
  }
  </script>

  <style>
  
  </style>