<template>
    <div>
<top-bar></top-bar>
        <v-row>
            <v-col><v-img></v-img></v-col>
            <v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
            </v-col>
        </v-row>
      
      <footer-bar/>   
    </div>
</template>
  
  <script>
  import TopBar from '@/components/TopBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
  export default {
    components:{
        TopBar,
        FooterBar
    }
  }
  </script>
  
  <style >

  </style>
  