<template>
  <div id="about" class="w-full h-screen dark-break-secondary relative">
    <div class="container mx-auto h-screen flex items-center justify-start pt-28 md:pt-0 md:justify-between flex-col md:flex-row"
         v-if="!this.$store.state.mobile.menu">
         
      <AboutLeftScene />
      <div class="text-primary-light w-full md:w-1/2 work-card glass dark-linear flex flex-col">
        <h2 class="text-3xl md:text-6xl uppercase mb-6 text-left">about me</h2>
        <p class="text-secondary-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat natus vel rerum at, esse obcaecati ipsam cumque inventore ea modi quisquam blanditiis ullam? Iste similique magnam quaerat nesciunt possimus? Debitis asperiores omnis nam a nihil adipisci quaerat ea. eligendi corporis consequuntur! Libero rem autem aliquam voluptates. Aut, eum accusantium est vel et quaerat explicabo! Accusantium, temporibus. Ullam magni tenetur dolorum nihil architecto, ab dolor aliquid, doloremque consequuntur eveniet, provident quo laborum? Saepe atque debitis sint, ab perspiciatis beatae aliquam fugit sapiente.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .work-card {
    align-items: flex-start !important;
  }
</style>