<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-hidden flex items-center justify-around h-0 flex-col md:flex-row">
    <div class="w-1/2 flex items-center justify-center">
      <Form />
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <Socials />
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style scoped>
  .closed {
    animation: close 1s ease-in-out forwards;
  }

  .opened {
    animation: open 1s ease-in-out forwards;
  }
</style>
