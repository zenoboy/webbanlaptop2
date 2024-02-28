<template>
  <v-app>
    <!-- <side-bar/> -->
    <!-- <top-bar/>  -->


    <v-main >
      <v-container>
        <router-view/>
      </v-container>
        
      
    </v-main>
    <footer-bar/>   
  </v-app>
</template>

<script>
 import FooterBar from './components/FooterBar.vue';
import TopBar from './components/TopBar.vue'
export default {
  components: {  TopBar, FooterBar },

}
</script>
<style>
</style>
