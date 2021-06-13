<template>
  <div class="w-full h-full bg-primary-dark">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <transition name="up-slide" mode="out-in" appear>
        <h1 class="text-5xl md:text-7xl mb-4">
          <span class="text-gradient-light pl-1">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1 glow">.dev</span>
        </h1>
      </transition>
      <button @click="toggle_contact" 
              class="main-btn relative mb-4 vim-mode"
              ref="button">

        contact
      </button>
      <div id="contact" class="preload">
        <IndexContact :class="contact ? 'opened' : 'closed'" :ref="'contact'" />
      </div>
    </div>
  </div>
</template>

<script>
import utilities from '~/javascript/mixins/utilities'

export default {
  data() {
    return {
      contact: false
    }
  },
  mixins: [ utilities ],
  methods: {
    toggle_contact() {
      this.contact = !this.contact;

      if (this.contact) {
        this.$refs.button.classList.add('active');
        return
      }

      this.$refs.button.classList.remove('active');
      this.$refs.contact.close();
    },
  },
  mounted() {
    console.log('mounted')
    this.preload(1000);
  }
}
</script>

<style lang="scss">
</style>