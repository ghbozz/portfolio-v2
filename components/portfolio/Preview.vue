<template>
  <transition name="up-slide" mode="out-in" appear>
    <div class="w-full h-full text-primary-light mr-2 overflow-y-scroll overflow-x-hidden rounded-lg shadow-lg relative glass">
      <a :href="work.url" target="_blank">
        <i class="fas fa-external-link-alt text-secondary-light hover:text-primary-light duration-200"></i>
      </a>
      <img class="rounded-lg absolute" :src="home()" alt="">
      <div class="scroll absolute"></div>
    </div>
  </transition>
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

<style scoped lang="scss">
  img {
    width: 100%;
    object-fit: cover;
  }

  i {
    position: sticky;
    top: 2%;
    right: 2%;
    font-size: 2rem;
    z-index: 99;
    cursor: pointer;
    float: right;
  }
</style>