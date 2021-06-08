<template>
  <div class="w-screen text-primary-light closed duration-1000">

  </div>
</template>

<script>
export default {}
</script>


<style scoped>
  .closed {
    height: 0px;
    overflow: hidden;
  }

  .opened {
    animation: open 1s ease-in-out forwards;
  }
</style>
