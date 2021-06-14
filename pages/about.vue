<template>
  <div id="about" class="w-full h-full dark-break-secondary relative">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <div id="vue" class="rounded-full w-40 h-40 absolute dark-linear dev-icon flex items-center justify-center">
        <img src="~/assets/icons/dev/vue.png" alt="">
      </div>
      <div id="ror" class="rounded-full w-40 h-40 absolute dark-linear dev-icon flex items-center justify-center">
        <img class="dev-icon" src="~/assets/icons/dev/ruby-flat.png" alt="">
      </div>
      <div id="js" class="rounded-full w-40 h-40 absolute dark-linear dev-icon flex items-center justify-center">
        <img class="dev-icon" src="~/assets/icons/dev/javascript.png" alt="">
      </div>
      <img id="hoodie" src="~/assets/images/about-bg.jpg" alt="">
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
  }

  #vue {
    left: 3%;
    bottom: 7%;
    
    img {
      width: 60%;
      margin-top: 15px;
    }
  }

  #ror {
    top: 30%;
    left: 10%;

    img {
      width: 70%;
      margin-top: 15px;
    }
  }

  #js {
    bottom: 15%;
    left: 55%;

    img {
      width: 60%;
      margin-top: 15px;
    }
  }
</style>