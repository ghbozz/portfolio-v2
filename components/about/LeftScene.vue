<template>
  <div>
    <transition v-for="lang in languages" :key="lang.name" name="up-slide" mode="out-in" appear>
      <div :id="lang.name" 
           class="rounded-full w-24 h-24 md:w-40 md:h-40 absolute dark-linear dev-icon glass flex items-center justify-center shadow-lg ring-2 ring-secondary-light ring-opacity-30"
           :style="`transition-delay: 0.${lang.delay}s;`">

        <img :src="require(`~/assets/${lang.logo}`)" alt="">
      </div>
    </transition>
    <transition name="fade-in" mode="out-in" appear>
      <img id="hoodie" src="~/assets/images/about-bg.jpg" alt="">
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: 'vue', logo: 'icons/dev/vue.png', delay: 1 },
        { name: 'ruby', logo: 'icons/dev/ruby-flat.png', delay: 3 },
        { name: 'js', logo: 'icons/dev/javascript.png', delay: 5 }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .dev-icon {
    position: absolute;
  }

  #vue {
    left: 2%;
    bottom: 10%;

    img {
      width: 40%;
      margin-top: 5px;
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #ruby {
    bottom: 15%;
    left: 45%;

    img {
      width: 50%;
      margin-top: 5px;
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #js {
    bottom: 2.5%;
    left: 65%;

    img {
      width: 40%;
      margin-top: 5px;
      -webkit-filter: drop-shadow(3px 3px 3px #222);
      filter: drop-shadow(3px 3px 3px #222);
    }
  }

  #hoodie {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (min-width: 768px) {
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

    #ruby {
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
  }
</style>