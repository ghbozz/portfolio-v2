<template>
  <div>
    <SharedNav />
    <transition name="fade" mode="out-in">
      <Nuxt /> 
    </transition>
  </div>
</template>

<script>
export default {}

</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
