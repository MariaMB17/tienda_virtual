<template>
  <v-app id="app">
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-app-bar app >
      <AppHeader class="app-bar"/>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="container-full-height"  fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/header/AppHeader.vue'

export default {
  components: {
    AppHeader,
  }
}
</script>

<style scoped>
 .container-full-height{
   /*height: 100%!important;
   background-image: url("./assets/fondo_pantalla.jpg");
   background-size: cover;*/
 }
</style>