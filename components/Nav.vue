<template>
  <div class="w-screen flex items-center justify-center md:justify-between fixed top-0 px-12 h-16">
    <NuxtLink to="/">
      <img id="logo" :src="logo" alt="">
    </NuxtLink>
    <ul>
      <li class="nav-item"><NuxtLink to="/portfolio">portfolio</NuxtLink></li>
      <li class="nav-item"><NuxtLink to="/about">about</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('~/assets/images/logo.png'),
    }
  }
}
</script>

<style>
  #logo {
    width: 50px;
    height: 50px;
    object-fit: cover;
    filter: brightness(100%) contrast(100%);
  }
</style>