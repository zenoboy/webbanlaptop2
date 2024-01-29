<template>
  <nav>
    <v-toolbar :elevation="23" color="blue">
      <v-app-bar-nav-icon class="grey--text" @click="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Chào admin nhá</span>
      </v-toolbar-title>
      <!-- <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"> Todo</span>
        <span>Ninja</span>
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>Hire me</v-btn>
        <v-btn>Blog</v-btn>
        <v-btn>
            <v-icon>mdi-cat</v-icon>
        </v-btn>
        <v-btn>
            <v-badge content="5" color="red">
                <v-icon>mdi-bell</v-icon>
            </v-badge>
        </v-btn>
        <v-btn>
            <v-avatar>
            <v-img
            src=""
                alt=""
            ></v-img>
            </v-avatar>
        </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer  app v-model="drawer"  class="indigo">
      <v-toolbar color="blue">
        <v-icon class="ml-2">mdi-home</v-icon>
        <v-toolbar-title class="mx-2">QUẢN TRỊ SHOP</v-toolbar-title>
    </v-toolbar>
    <v-list density="compact">
    <v-list-subheader>Danh mục </v-list-subheader>
    <v-list-item
      v-for="(item, i) in links"
      :key="i"
      :value="item"
      :to="item.to"
      color="blue"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title >{{ item.text }}</v-list-item-title>
    </v-list-item>
  </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
data() {
  return {
    drawer:true,
    links: [
                { icon: ' mdi-microsoft-windows', text: 'Loại sản phẩm' ,to:"/list-category"},
                { icon: ' mdi-sale-outline', text: 'Sản phẩm',to:"/list-product" },
                { icon: ' mdi-flask', text: 'Đơn hàng' },
                { icon: ' mdi-calendar', text: 'Chi tiết đơn hàng' },
                { icon: ' mdi-account-key', text: 'Người Dùng' },
                { icon: ' mdi-chart-pie', text: 'Khách Hàng' },
            ],
  }
}
}
</script>

<style  >

</style>





