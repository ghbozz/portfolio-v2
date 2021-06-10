<template>
  <div class="relative h-full">
    <img src="~/assets/images/hoodie.jpg" alt="">
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) sepia(20%) saturate(150%) opacity(50%) contrast(145%);
  }
</style>