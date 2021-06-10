<template>
  <div class="h-full">
    <img src="~/assets/images/hoodie.jpg" class="hidden md:block opacity-0" alt="">
    <div id="socials" class="absolute">
      <i class="fab fa-github social-icon"></i>
      <i class="fab fa-linkedin-in social-icon"></i>
      <i class="fas fa-at social-icon"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #socials {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  i {
    z-index: 99;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  img {
    width: 140%;
    height: 140%;
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: cover;
    /* filter: brightness(80%) saturate(100%) opacity(100%) contrast(50%); */
  }
</style>