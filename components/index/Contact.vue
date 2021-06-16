<template>
  <div class="w-screen text-primary-light shadow-inner flex items-center justify-around flex-col-reverse md:flex-row">
    <div id="form-wrapper" class="w-full h-full dark-linear md:w-1/2 flex items-center justify-center">
      <IndexForm :ref="'form'" />
    </div>
    <div id="socials-wrapper" class="w-full h-72 md:h-full md:w-1/2 flex items-center justify-center relative md:py-0">
      <IndexSocials />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$refs.form.clear()
    }
  }
}
</script>


<style lang="scss">
</style>
