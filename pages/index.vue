<template>
  <div class="w-full h-full bg-primary-dark">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <h1 class="text-5xl md:text-7xl mb-4">
        <span class="text-gradient-light pl-1">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1">.dev</span>
      </h1>
      <button @click="toggle_contact" id="contact-button" class="main-btn relative mb-4 vim-mode">
        contact
      </button>
      <IndexContact :class="opened ? 'opened' : 'closed'" />
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
    toggle_contact(evt) {
      this.opened = !this.opened;

      if (this.opened) {
        this.contact_button.classList.add('active');
        this.form.classList.add('opacity-100');
      } else {
        this.contact_button.classList.remove('active');
        this.form.classList.remove('opacity-100');

        this.labels.forEach((label) => {
          label.classList.remove('active');
        })
      }
    },
    setup() {
      this.form = this.$vnode.elm.querySelector('form');
      this.labels = this.$vnode.elm.querySelectorAll('label');
      this.contact_button = this.$vnode.elm.querySelector('#contact-button')
    }
  },
  mounted() {
    this.setup();
  }
}
</script>