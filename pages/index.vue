<template>
  <div class="w-full h-full bg-primary-dark">
    <div class="container mx-auto h-screen flex items-center justify-center flex-col">
      <h1 class="sm:text-5xl md:text-7xl mb-4">
        <span class="text-gradient-light pl-1">romain</span><span class="font-extralight opacity-70 text-primary-light">sanson</span><span class="text-gradient-green font-semibold pr-1">.dev</span>
      </h1>
      <button @click="toggle_contact" class="main-btn relative mb-4 vim-mode">
        contact
      </button>
      <Contact :class="contact ? 'opened' : 'closed'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: false,
    }
  },
  methods: {
    toggle_contact(evt) {
      this.contact = !this.contact;
      evt.target.classList.toggle('active');
    }
  },
}
</script>