<template>
  <div>
    <transition name="up-slide" mode="out-in" appear>
      <div id="vue" 
           class="rounded-full w-40 h-40 absolute dark-linear dev-icon glass flex items-center justify-center shadow-lg ring-2 ring-secondary-light ring-opacity-30"
           style="transition-delay: 0.1s;">

        <img src="~/assets/icons/dev/vue.png" alt="">
      </div>
    </transition>
    <transition name="up-slide" mode="out-in" appear>
      <div id="ror" 
               class="rounded-full w-40 h-40 absolute dark-linear dev-icon glass flex items-center justify-center shadow-lg ring-2 ring-secondary-light ring-opacity-30"
               style="transition-delay: 0.3s;">

        <img class="dev-icon" src="~/assets/icons/dev/ruby-flat.png" alt="">
      </div>
    </transition>
    <transition name="up-slide" mode="out-in" appear>
      <div id="js" 
           class="rounded-full w-40 h-40 absolute dark-linear dev-icon glass flex items-center justify-center shadow-lg ring-2 ring-secondary-light ring-opacity-30"
           style="transition-delay: 0.5s;">

        <img class="dev-icon" src="~/assets/icons/dev/javascript.png" alt="">
      </div>
    </transition>
    <transition name="fade-in" mode="out-in" appear>
      <img id="hoodie" src="~/assets/images/about-bg.jpg" alt="">
    </transition>
  </div>
</template>

<script>
export default {

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
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #ror {
    top: 30%;
    left: 10%;

    img {
      width: 70%;
      margin-top: 15px;
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #js {
    bottom: 10%;
    left: 55%;

    img {
      width: 60%;
      margin-top: 15px;
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #hoodie {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>