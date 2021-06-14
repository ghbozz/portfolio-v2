<template>
  <transition name="up-slide" mode="out-in" appear>
    <div class="flex items-center justify-center flex-col h-screen absolute" v-if="this.$store.state.mobile.menu">
      <ul id="menu" class="w-screen text-center pl-8 pb-96" ref="menu">
        <li class="nav-item w-full text-4xl text-left"><NuxtLink to="/portfolio">portfolio</NuxtLink></li>
        <li class="nav-item w-full text-4xl text-left"><NuxtLink to="/about">about</NuxtLink></li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
  #menu {
    z-index: 99;
  }
</style>