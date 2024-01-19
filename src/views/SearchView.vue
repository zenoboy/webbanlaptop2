<template>
    <div id="app">
      <input type="text" v-model="searchQuery" placeholder="Nhập từ khóa tìm kiếm" />
      
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        items: [
          { id: 1, name: 'MSi' },
          { id: 2, name: 'Asus' },
          { id: 3, name: 'Dell' },
          { id: 4, name: 'Lenovo' },
          { id: 5, name: 'Aces' },
          { id: 6, name: 'Hp' },
          { id: 7, name: 'Apple' },
          { id: 8, name: 'SamSung' },
          { id: 9, name: 'huawei' },


          // ... thêm các mục khác
        ]
      };
    },
    computed: {
      filteredItems: function() {
        // Sử dụng phương thức filter để lọc các mục dựa trên searchQuery
        return this.items.filter(item => {
          return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
    }
  };
  </script>
  
  <style>
  /* Bổ sung CSS nếu cần thiết */
  </style>
  