<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-x-hidden flex items-center justify-around h-0 flex-col md:flex-row">
    <div id="form-wrapper" class="w-full h-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
      <IndexForm />
    </div>
    <div id="socials-wrapper" class="w-full h-full md:w-1/2 flex items-center justify-center relative py-6 md:py-0">
      <IndexSocials />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delay: 100,
    }
  }
}
</script>


<style scoped>
  #form-wrapper {
    background: #2a2e38;
  }

  .closed {
    animation: close 1s ease-out forwards;
  }

  .opened {
    animation: open 1s ease-out forwards;
  }

  .opened::before,
  .opened::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 2px;
    z-index: 999;
  }

  .opened::before {
    animation: shine-left .5s forwards;
  }

  .opened::after {
    animation: shine-right .5s forwards;
  }
</style>
