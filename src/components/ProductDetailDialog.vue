<template>
    <v-dialog :value="dialog" @input="updateDialog" max-width="600">
      <v-card>
        <v-img :src="selectedProduct.image" alt="Hình ảnh sản phẩm"></v-img>
        <v-card-title>{{ selectedProduct.productName }}</v-card-title>
        <v-card-subtitle>{{ selectedProduct.price }}</v-card-subtitle>
        <v-card-text>{{ selectedProduct.description }}</v-card-text>
        <v-card-actions>
          <v-btn @click="addToCart(selectedProduct)">Thêm vào giỏ hàng</v-btn>
          <v-btn @click="closeDialog">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      dialog: Boolean,
      selectedProduct: Object,
    },
    methods: {
      updateDialog(value) {
        this.$emit('update:dialog', value);
      },
      addToCart(product) {
        this.$emit('add-to-cart', product);
        this.closeDialog();
      },
      closeDialog() {
        this.$emit('close-dialog');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Kiểu dáng của bạn ở đây */
  </style>
  