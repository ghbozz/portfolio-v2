<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-hidden flex items-center justify-around h-0 flex-col md:flex-row">
    <div class="w-full h-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
      <IndexForm />
    </div>
    <div class="w-full h-full md:w-1/2 flex items-center justify-center relative py-6 md:py-0">
      <IndexSocials />
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style>
  .closed {
    animation: close 1s ease-out forwards;
  }

  .opened {
    animation: open 1s ease-out forwards;
  }

  .opened img {
    transition: opacity 1s ease-out;
    opacity: 1;
  }

  .closed img {
    transition: opacity 1s ease-out;
    opacity: 0;
  }
</style>
