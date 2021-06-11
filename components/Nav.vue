<template>
  <div class="w-screen flex items-center justify-between fixed top-0 px-12 h-24"
       :class="$nuxt.$route.path == '/' ? 'flex-row-reverse' : 'flex-row'">

    <NuxtLink to="/" 
              v-if="$nuxt.$route.path !== '/'"
              :class="'text-2xl'">

      <span class="text-gradient-light pl-1">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1">.dev</span>
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