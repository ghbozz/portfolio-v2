<template>
  <div class="w-full h-full bg-primary-dark">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <transition name="up-slide" mode="out-in" appear>
        <h1 class="text-5xl md:text-7xl mb-4">
          <span class="text-gradient-light pl-1">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1 glow">.dev</span>
        </h1>
      </transition>
      <button id="contact-button" class="main-btn relative mb-4 vim-mode">
        contact
      </button>
      <div class="preload" ref="preload">
        <IndexContact :class="opened ? 'opened' : 'closed'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    }
  },
  methods: {
  //   toggle_contact() {
  //     this.opened = !this.opened;

  //     if (this.opened) {
  //       this.contact_button.classList.add('active');
  //       this.form.classList.add('opacity-100');
  //     } else {
  //       this.contact_button.classList.remove('active');
  //       this.form.classList.remove('opacity-100');

  //       this.labels.forEach((label) => {
  //         label.classList.remove('active');
  //       })
  //     }
  //   },
  //   setup() {
  //     this.form = document.querySelector('form');
  //     this.labels = document.querySelectorAll('label');
  //     this.contact_button = document.querySelector('#contact-button')
  //   },
  //   clear_preload() {
  //     this.$refs.preload.classList.remove('preload')
  //   }
  // },
  // beforeMount() {
  //   this.setup();
  //   setTimeout(this.clear_preload, 800)
  }
}
</script>