<template>
  <div @click="click" :class="[{ active: active }, `work-card-${work.id}`, 'work-card w-full']">
    <img class="h-28 w-28" :src="logo()" alt="">
    <div class="w-2/3 p-4">
      <p class="text-secondary-grey font-semibold opacity-80">{{ work.date }}</p>
      <h3 class="font-semibold text-2xl">{{ work.title }}</h3>
      <p class="text-primary-grey">{{ work.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['work', 'active'],
  methods: {
    logo() {
      const directory = this.work.title.toLowerCase().replace(' ', '_')
      return require(`~/assets/images/works/${directory}/logo.jpg`)
    },
    click() {
      this.$parent.select(this.work.id)
    }
  }
}
</script>

<style scoped>
  img {
    border-radius: 50%;
    object-fit: cover;
  }
</style>