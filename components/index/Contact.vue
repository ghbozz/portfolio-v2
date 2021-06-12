<template>
  <div id="contact" class="w-screen text-primary-light shadow-inner duration-1000 overflow-x-hidden flex items-center justify-around flex-col md:flex-row">
    <div id="form-wrapper" class="w-full h-full md:w-1/2 flex items-center justify-center md:py-0">
      <IndexForm />
    </div>
    <div id="socials-wrapper" class="w-full h-full md:w-1/2 flex items-center justify-center relative md:py-0">
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


<style lang="scss">
</style>
