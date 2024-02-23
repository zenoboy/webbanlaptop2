<template>
  <v-navigation-drawer>
    <v-toolbar color="blue">
        <v-icon class="ml-2">mdi-home</v-icon>
        <v-toolbar-title class="mx-2">QUẢN TRỊ SHOP</v-toolbar-title>
    </v-toolbar>
    
    <v-list density="compact">
    <v-list-subheader>Danh mục </v-list-subheader>
    <v-list-item
      v-for="(item, i) in filteredLinks"
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
  
  <div class="d-flex justify-center" style="margin-top: 300px;"> <!-- Sử dụng margin-top: auto để đặt nút xuống dưới cùng -->
      <v-btn color="blue" @click="logout" width="150px">Đăng xuất</v-btn>
    </div>
  
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
      return{
          links: [
            { icon: ' mdi mdi-home-circle', text: 'Trang chủ' ,to: { name: 'dashboard' }},
            { icon: ' mdi mdi-shape', text: 'Loại sản phẩm' ,to: { name: 'ListCategory' }},
            { icon: ' mdi mdi-gift', text: 'Sản phẩm',to: { name: 'list-product' } },
            { icon: 'mdi-flask', text: 'Đơn hàng', to: { name: 'ListOrder' } },
            
            // { icon: ' mdi-account-key', text: 'Người Dùng',to: { name: 'ListUser' },  hidden: !(JSON.parse(sessionStorage.getItem('admin')).role === "super")},
            //{ icon: ' mdi-account-key', text: 'Người Dùng',to: { name: 'ListUser' },  hidden: !this.role == 'super'},
            { 
          icon: 'mdi-account-key', 
          text: 'Người Dùng',
          to: { name: 'ListUser' },
          
        },
            { icon: ' mdi-chart-pie', text: 'Hồ sơ của tôi' ,to: {name: 'ListInfo'}},
              ],
          role: (JSON.parse(sessionStorage.getItem('admin')).role)
      }
  },
  methods:{
    logout(){
      alert("Đã đăng xuất")
      sessionStorage.removeItem('admin')
      //router.push('/admin/login')
      this.$router.push('/admin/login');
    }
  },
  created(){
    console.log('role', (JSON.parse(sessionStorage.getItem('admin')).role))
    console.log('role', this.role)
  },
  computed: {
    filteredLinks() {
      const role = JSON.parse(sessionStorage.getItem('admin')).role;
      if (role === 'super') {
        return this.links; // Return all links if the user is a 'super' user
      } else {
        // Filter out the 'Người Dùng' link if the user is not a 'super' user
        return this.links.filter(link => link.text !== 'Người Dùng');
      }
    }
  },
}
</script>

<style>

</style>