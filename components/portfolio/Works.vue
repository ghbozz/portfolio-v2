<template>
  <div class="w-3/12 h-full text-primary-light">
    <h2 class="text-4xl leading-4 uppercase my-6">recent work</h2>
    <PortfolioWork v-for="work in works" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: 3
    }
  }
}
</script>

<style>

</style>