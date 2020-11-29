<template>
<v-layout class = "inicio-layout">
  <v-container class="container-layout">
    <v-row class="fill-height">
      <v-carousel class="full-height-carousel" 
        cycle
        :show-arrows="false">
          <v-carousel-item 
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          >
          </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="fill-height">
      <v-container fluid>
        <v-toolbar dense dark color="teal" class="pa-0" data-aos="zoom-in">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col class="d-flex justify-space-around">
              <v-toolbar-title class="white--text">Categorias</v-toolbar-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end"></v-col>
          </v-row>
        </v-toolbar>
        <v-row dense>          
          <v-col
            v-for="card in cards" 
            :key="card.title" 
            :cols="card.flex"
            :data-aos="card.data_aos">
            <v-card>
              <v-img 
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row class="fill-height">
      <v-container fluid>
        <v-toolbar dense dark color="teal" class="pa-0" data-aos="zoom-in">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col class="d-flex justify-space-around">
              <v-toolbar-title class="white--text">Productos</v-toolbar-title>
            </v-col>
            <v-col cols="2" class="d-flex justify-end"></v-col>
          </v-row>
        </v-toolbar>
        <v-row dense>
          <v-col
            cols="12"
            md="4"
            lg="4"
            xl="4"
            v-for="prod in products" 
            :key="prod.title"
            :data-aos="prod.data_aos">
            <v-card>
              <v-img 
                :src="prod.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="prod.title"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</v-layout>  
</template>
<script>
  export default {
    name: 'LandingPage',
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
        ],
      cards: [
          { title: 'Belleza y cuidado personal', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, data_aos:'fade-up'},
          { title: 'Electrodimesticos', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, data_aos:'zoom-in' },
          { title: 'Damas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, data_aos:'fade-up' },
          { title: 'Caballeros', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, data_aos: 'fade-down' },
          { title: 'Electrodimesticos', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, data_aos:'zoom-in-up'},
          { title: 'Damas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, data_aos:'fade-down' },
        ],
      products: [
          { title: 'Belleza y cuidado personal', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, data_aos:'fade-up'},
          { title: 'Electrodimesticos', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, data_aos:'zoom-in' },
          { title: 'Damas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, data_aos:'fade-up' },
          { title: 'Caballeros', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, data_aos: 'fade-down' },
          { title: 'Electrodimesticos', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, data_aos:'zoom-in-up'},
          { title: 'Damas', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, data_aos:'fade-down' },
        ],
      
      }
    },
  }
</script>
<style lang="scss" scoped>
  .inicio-layout{
    height: 100% !important;
    .container-layout {
        min-width: 100% !important; 
        height: 100% !important;
    }
    ::v-deep .layout {
      min-height: 100%!important;
    }
}  
</style>
