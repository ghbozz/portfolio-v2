<template>
  <div id="social" class="h-full w-full duration-2000"
       :style="{ backgroundImage: 'url(' + background + ')' }">

    <div id="socials" class="absolute">
      <i class="fab fa-github social-icon"></i>
      <i class="fab fa-linkedin-in social-icon"></i>
      <i class="fas fa-at social-icon"></i>
    </div>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      background : require('~/assets/images/socials-bg.jpg'),
    }
  }
}
</script>

<style scoped lang="scss">
</style>