<template>
  <v-app-bar :elevation="2" color="blue">
    <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
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
</template>

<script>
export default {

}
</script>

<style>

</style>