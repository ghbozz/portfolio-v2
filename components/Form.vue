<template>
  <form class="w-10/12 md:w-2/3 opacity-0 duration-2000">
    <div class="flex flex-col text-1xl">
      <label class="relative" for="email">email</label>
      <input @focus="focus" type="text" name="email">
    </div>
    <div class="flex flex-col text-1xl">
      <label class="relative" for="body">message</label>
      <textarea @focus="focus" name="body"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    focus(evt) {
      document.querySelectorAll('.vim-mode').forEach((item) => item.classList.remove('active'))
      evt.target.closest('div').querySelector('label').classList.add('vim-mode')
      evt.target.closest('div').querySelector('label').classList.add('active')
    }
  }
}
</script>

<style scoped>

</style>