<template>
  <div class="home">
    <LandingPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage
  }
}
</script>
<style scoped>
  .home{
    height: 100%! important;
  }
</style>
