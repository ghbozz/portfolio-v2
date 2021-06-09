<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-hidden flex items-center justify-around h-0">
    <div>
      
    </div>
    <div>
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
