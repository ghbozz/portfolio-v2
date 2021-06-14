<template>
  <form class="w-10/12 md:w-2/3">
    <div class="flex flex-col text-1xl">
      <label class="relative vim-mode" for="email">email</label>
      <input @focus="focus" type="text" name="email">
    </div>
    <div class="flex flex-col text-1xl">
      <label class="relative vim-mode" for="body">message</label>
      <textarea @focus="focus" name="body"></textarea>
    </div>
    <div class="flex justify-center items-center mt-2">
      <button class="main-btn relative text-lg xl:text-2xl">
        send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      labels: null
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
    }
  },
  mounted() {
    this.labels = this.$el.querySelectorAll('label')
  }
}
</script>

<style lang="scss">
</style>