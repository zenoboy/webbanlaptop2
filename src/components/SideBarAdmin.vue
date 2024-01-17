<template>
    <v-navigation-drawer>
          <v-toolbar color="primary darken-1">
              <v-icon class="ml-2">mdi-home</v-icon>
              <v-toolbar-title>Quản trị shop</v-toolbar-title>
          </v-toolbar>
          <v-list>
              <v-list-subheader>Danh mục</v-list-subheader>
              <v-list-item
                  v-for="(item, i) in links"
                  :key="i"
                  :value="item"
                  :to="item.to"
                  color="primary"
              >
                  <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                  </template>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
  </template>
  
  <script>
  export default {
      name: "SideBar",
      data(){
          return{
              links:[
                  {icon:'mdi-microsoft-windows',text:'Products',to:"/list-products"},
                  {icon:'mdi-microsoft-windows',text:'Category',to:"/list-category"},
                  
              ]
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>