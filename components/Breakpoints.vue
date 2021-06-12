<template>
  <div id="breakpoints" class="absolute z-50 bg-primary-light text-primary-dark p-2">
    <span class="block sm:hidden">mobile</span>
    <span class="hidden sm:block md:hidden">sm > 640px</span>
    <span class="hidden md:block lg:hidden">md > 768px</span>
    <span class="hidden lg:block xl:hidden">lg > 1024px</span>
    <span class="hidden xl:block 2xl:hidden">xl > 1280px</span>
    <span class="hidden 2xl:block">2xl > 1536px</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss"> 
  #breakpoints {
    transform: translateX(-50%);
    left: 50%;
    bottom: 5%;
  }
</style>