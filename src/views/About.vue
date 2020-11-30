<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import categoriaService from '../services/categorias/categoriaService.js';
  export default {
    nama:'About',
    created(){
      categoriaService.get();
      

    },
     data() {
      return {
        posts: []
      }
    }
  }
</script>
