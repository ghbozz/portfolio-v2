<template>
  <form class="w-10/12 md:w-2/3">
    <div class="flex flex-col text-1xl">
      <label class="relative vim-mode" for="email">email</label>
      <input v-model="email" @focus="focus" type="text" name="email">
    </div>
    <div class="flex flex-col text-1xl">
      <label class="relative vim-mode" for="body">message</label>
      <textarea v-model="message" @focus="focus" name="body"></textarea>
    </div>
    <div class="flex justify-center items-center mt-2">
      <button @click="send" class="main-btn relative text-lg xl:text-2xl">
        send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      labels: null,
      email: '',
      message: '',
    }
  },
  methods: {
    focus(evt) {
      document.querySelectorAll('.vim-mode')
              .forEach((item) => item.classList.remove('active'))

      evt.target.closest('div')
                .querySelector('label')
                .classList.add('active')
    },
    clear() {
      this.labels.forEach(label => label.classList.remove('active'))
    },
    async send(evt) {
      evt.preventDefault();

      if (!this.validate()) {
        this.$store.commit('notice/open_notice', 'invalid')
        this.close_notice();
        return
      }

      const response = await this.$axios.$post('/contact', { email: this.email, message: this.message })

      if (response.status === 'success') this.$store.commit('notice/open_notice', 'success')
      if (response.status === 'failure') this.$store.commit('notice/open_notice', 'failure')

      this.clear_form();
      this.close_notice();
    },
    close_notice() {
      setTimeout(() => {
        this.$store.commit('notice/close_notice')
      }, 5000)
    },
    clear_form() {
      this.email = '';
      this.message = '';
    },
    validate() {
      return /.+@.+/.test(this.email) && /.+/.test(this.message)
    }
  },
  mounted() {
    this.labels = this.$el.querySelectorAll('label')
  }
}
</script>

<style lang="scss">
</style>