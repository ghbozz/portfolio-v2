<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-hidden flex items-center justify-around h-0 flex-col md:flex-row">
    <div class="w-full h-full md:w-1/2 flex items-center justify-center">
      <IndexForm />
    </div>
    <div class="w-full h-full md:w-1/2 flex items-center justify-center">
      <IndexSocials />
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

  /* #socials {
    background-image: url("~assets/images/hoodie.jpg");
    background-size: 150%;
    background-position: bottom;
    filter: grayscale(75%) sepia(30%) saturate(100%) opacity(50%) invert(100%);
  } */
</style>
