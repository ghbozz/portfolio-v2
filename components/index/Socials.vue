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
      background : require('~/assets/images/hoodie.jpg'),
    }
  },
  methods: {
    // WIP
    toggle_socials() {
      console.log('toggle socials')
    },
    toggle_image() {
      console.log('toggle hoodie')
    }
    // WIP
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

  #socials i {
    z-index: 99;
    margin-left: 1rem;
    margin-right: 1rem;
    transition-delay: 1.2s;
    transition-duration: .8s;
    transition-property: opacity;
  }

  .closed i {
    transition: opacity .2s ease !important;
    opacity: 0;
  }

  .opened i {
    opacity: 1;
  }

  img {
    width: 140%;
    height: 140%;
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }
</style>