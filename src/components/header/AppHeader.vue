<template>
<v-layout row justify-center class="layout-header">
<v-toolbar class="hidden-xs-only toolbar-header" id="toolbar-content-header">
 <v-img 
      max-height="50"
      max-width="50"
      src="@/assets/logo.png">
    </v-img>
    <input type="search" placeholder="search..." class="input-header"/>
    <v-spacer></v-spacer>
     <v-toolbar-items>
        <v-btn            
            v-for="item in nav"
            :key="item.icon"
            :to="item.to"
            :title="item.title"
            text
        > <span class="span-header">{{ item.text }}</span></v-btn>
      </v-toolbar-items>
</v-toolbar>
<v-toolbar class="hidden-sm-and-up toolbar-header" id="toolbar-movil-header">
    <v-img 
      max-height="50"
      max-width="50"
      src="@/assets/logo.png">
    </v-img>
    <input type="search" placeholder="search..." class="input-header"/>
    <v-spacer></v-spacer>
   
    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-bind="attrs"
          v-on="on"
        ></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
           v-for="item in nav"
           :key="item.icon"
           :to="item.to"
           :title="item.title"
          link
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</v-toolbar>
</v-layout>
</template>
<script>
export default {
    name: 'AppHeader',
    data () {
        return {
            nav: [
        {
          icon: 'home',
          text: 'Home',
          title: 'Back to Home page',
          to: '/',
          active: true
        },
        {
          icon: 'info',
          text: 'About',
          title: 'About this demo',
          to: '/about',
          active: false
        },
         {
          icon: 'home',
          text: 'Home',
          title: 'Back to Home page',
          to: '/',
          active: true
        },
        {
          icon: 'info',
          text: 'About',
          title: 'About this demo',
          to: '/about',
          active: false
        }
      ]

        }
    }
}
</script>
<style scoped>
    .toolbar-header{
        background: rgba(13, 119, 5, 0.705)!important;
    }
    #toolbar-content-header,#toolbar-movil-header {
        height: 100%!important;
    }
    .span-header{
        color: #843507!important;
    }
    /* ::v-deep .v-toolbar__content {
      padding: 4px 12px;

    } */
    .input-header {
      width:100%; 
      height: 40px;
      background: rgb(212 191 152);
      border-radius: 10px; 
      margin: 0px 12px;
      padding: 0px 12px;    
    }
    
      
</style>