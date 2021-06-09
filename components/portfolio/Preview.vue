<template>
  <div class="w-full h-full text-primary-light mr-2 overflow-scroll rounded-lg shadow-lg relative">
    <img class="rounded-lg" :src="home()" alt="">
    <div class="scroll-wrapper w-full h-24 sticky bottom-0">
      <div class="scroll sticky"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['work'],
  methods: {
    home() {
      const directory = this.work.title.toLowerCase().replace(' ', '_')
      return require(`~/assets/images/works/${directory}/home.jpg`)
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }

  .scroll-wrapper {
    background: linear-gradient(0deg, rgba(35,35,35,1) 0%, rgba(35,35,35,0.2) 100%);
  }

  .scroll {
    transform: translateX(-50%);
    bottom: 2.5%;
    left: 50%;
  }
</style>