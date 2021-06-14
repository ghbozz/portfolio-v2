<template>
  <div class="w-full h-full dark-break-primary">
    <div class="container mx-auto h-screen pt-6 md:pt-0">
      <div class="flex items-center justify-center flex-col h-screen" v-if="!this.$store.state.mobile.menu">
        <transition name="up-slide" mode="out-in" appear>
          <h1 class="text-4xl md:text-7xl mb-4">
            <span class="text-gradient-light">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1 glow">.dev</span>
          </h1>
        </transition>
        <transition name="up-slide" mode="out-in" appear>
          <button @click="toggle_contact" 
                  class="text-2xl main-btn relative mb-4 vim-mode"
                  ref="button">

            contact
          </button>
        </transition>

        <div id="contact" class="preload overflow-hidden" ref="preload">
          <IndexContact :class="contact ? 'opened' : 'closed'" :ref="'contact'" />
        </div>
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

<style scoped lang="scss">
  button {
    transition: opacity .4s .4s, transform .4s .4s, background 0s 0s;
  }
</style>