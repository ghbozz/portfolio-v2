<template>
  <div class="w-screen text-primary-light shadow-inner duration-1000 overflow-x-hidden flex items-center justify-around h-0 flex-col md:flex-row">
    <div class="w-full h-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
      <IndexForm />
    </div>
    <div class="w-full h-full md:w-1/2 flex items-center justify-center relative py-6 md:py-0">
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
    width: 10px;
    height: 10px;
  }

  .opened::before {
    animation: shine-left 1s forwards;
  }

  .opened::after {
    animation: shine-right 1s forwards;
  }
</style>
