<template>
  <div id="about" class="w-full h-full bg-primary-dark"
       :style="{ backgroundImage: 'url(' + background + ')' }">

    <div class="container mx-auto h-screen flex items-center justify-center flex-col">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background : require('~/assets/images/about-bg.jpg'),
    }
  },
}
</script>

<style scoped>
  #about {
    background-size: cover;
    background-position: center;
  }
</style>