<template>
  <div class="w-full h-full dark-break-primary">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col pt-6 md:pt-0">
      <transition name="up-slide" mode="out-in" appear>
        <h1 class="text-4xl md:text-7xl mb-4">
          <span class="text-gradient-light">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1 glow">.dev</span>
        </h1>
      </transition>
      <button @click="toggle_contact" 
              class="text-2xl main-btn relative mb-4 vim-mode"
              ref="button">

        contact
      </button>
      <div id="contact" class="preload overflow-hidden" ref="preload">
        <IndexContact :class="contact ? 'opened' : 'closed'" :ref="'contact'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: false
    }
  },
  methods: {
    toggle_contact() {
      this.$refs.preload.classList.remove('preload');
      this.contact = !this.contact;

      if (this.contact) {
        this.$refs.button.classList.add('active');
        return
      }

      this.$refs.button.classList.remove('active');
      this.$refs.contact.close();
    },
  }
}
</script>

<style lang="scss">
</style>