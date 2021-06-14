<template>
  <div id="about" class="w-full h-full dark-break-secondary relative">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <img id="vue" class="dev-icon" src="~/assets/icons/dev/vue.png" alt="">
      <img id="ror" class="dev-icon" src="~/assets/icons/dev/ruby-flat.png" alt="">
      <img id="js" class="dev-icon" src="~/assets/icons/dev/javascript.png" alt="">
      <img src="~/assets/images/about-bg.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  transition: "default"
}
</script>

<style scoped lang="scss">
  .dev-icon {
    position: absolute;
    filter: grayscale(50%);
  }

  #vue {
    left: 5%;
    bottom: 5%;
    width: 100px;
  }

  #ror {
    top: 30%;
    left: 10%;
    width: 130px;
  }

  #js {
    bottom: 20%;
    left: 55%;
    width: 100px;
  }
</style>