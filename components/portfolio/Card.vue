<template>
  <transition name="side-slide" mode="out-in" appear>
    <div @click="click" 
         :class="[{ active: active }, `work-card-${work.id}`, 'work-card w-full glass dark-linear']"
         :style="`transition-delay: 0.${work.id * 3}s;`">
         
      <img :src="logo()" alt="">

      <div class="w-2/3 p-4">
        <p class="text-secondary-gray font-semibold opacity-80">{{ work.date }}</p>
        <h3 class="font-semibold text-2xl">{{ work.title }}</h3>
        <p class="text-primary-gray">{{ work.description }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['work', 'active'],
  methods: {
    click() {
      this.$parent.select(this.work.id)
    },
    logo() {
      return require(`~/assets/images/works/${this.work.logo}`)
    }
  },
  mounted() {
    console.log(this.work)
  }
}
</script>

<style scoped lang="scss">
  img {
    border-radius: 50%;
    object-fit: cover;
  }
</style>