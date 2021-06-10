<template>
  <div id="social" class="h-full w-full"
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
      background : require('~/assets/images/hoodie.jpg'),
    }
  },
  methods: {
    toggle_socials() {
      console.log('toggle socials')
    }
  }
}
</script>

<style scoped>
  #social {
    background-size: cover;
    background-position: center;
  }

  #socials {
    transform: translate(-50%, -50%);
    top: 20%;
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