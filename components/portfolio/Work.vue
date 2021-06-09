<template>
  <div :class="`work-card-${work.id} bg-secondary-dark flex items-center justify-around p-4 cursor-pointer`">
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="">
    <div class="w-2/3 p-4">
      <p class="text-secondary-grey font-semibold opacity-80">Nov 21</p>
      <h3 class="font-semibold text-2xl">{{ work.title }}</h3>
      <p class="text-primary-grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptatum consequuntur corrupti sint ratione dolores.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['work']
}
</script>

<style scoped>
  img {
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
  }
</style>