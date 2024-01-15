<template>
    <div>  <v-app-bar :elevation="2" color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
    </v-app-bar>
  
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
    <v-row class="mt-2">
      <v-icon>mdi-home</v-icon>
      <h3 class="ml-2">Danh sách loại sản phẩm</h3>
      <v-spacer></v-spacer>
      <v-dialog 
          v-model="dialog"
            max-width="640px">
              <v-card>
                  <v-card-title>
                      <span>Them moi loai san pham</span>
                  </v-card-title>
                  <v-card-text>
                      <v-form>
                          <v-container>
                              <v-row>
                                  <v-col>
                                      <v-text-field
                                          label="Ten loai san pham"
                                          v-model="data.categoryName"
                                      ></v-text-field>
                                  </v-col>
                              </v-row>
                          </v-container>
                      </v-form>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          class="mr-2"
                          color="grey darken-3"
                          @click="this.$emit('close')"
                      >Huy</v-btn>
                      <v-btn
                          color="primary"
                          @click="addCategory"
                      >Luu</v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>
    </v-row>
  
  </div>
</template>
  
  <script>
  
  import axios from 'axios'
  
  export default {
  
  }
      
  
  </script>
  
  <style>
  
  </style>