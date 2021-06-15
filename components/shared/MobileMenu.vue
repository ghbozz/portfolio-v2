<template>
  <transition :name="$nuxt.$route.path === '/' ? 'up-slide': 'mobile-fade'" mode="out-in" appear>
    <div class="flex items-center justify-center flex-col h-screen absolute" v-if="this.$store.state.mobile.menu">
      <ul id="menu" class="w-screen text-center pl-8 pb-96" ref="menu">
        <li @click="close" class="nav-item w-full text-4xl text-left mb-5"><NuxtLink to="/portfolio">portfolio</NuxtLink></li>
        <li @click="close" class="nav-item w-full text-4xl text-left mb-5"><NuxtLink to="/about">about</NuxtLink></li>
      </ul>
      <SharedSocialsIcons />
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.commit('mobile/toggle')
    }
  }
}
</script>

<style>
  #menu {
    z-index: 99;
  }
</style>