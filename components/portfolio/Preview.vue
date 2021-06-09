<template>
  <div class="w-full h-full text-primary-light mr-2 overflow-scroll rounded-lg shadow-lg">
    <img class="rounded-lg" :src="home()" alt="">
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
</style>