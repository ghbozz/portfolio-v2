<template>
  <transition name="side-slide" mode="out-in" appear>
    <div id="notice" class="w-1/4 h-20 rounded-lg p-4 absolute bg-secondary-light flex items-center justify-start">
      <div>
        <i v-if="is_success()" class="far fa-check-circle mr-8 text-primary-green"></i>
        <i v-else class="far fa-times-circle mr-8"></i>    
      </div>
      <div>
        <p v-if="is_success()">Your message has been sent !</p>
        <p v-else>An error occured plz reach me out at romain.sanson@hey.com</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    is_success() {
      return this.$store.state.notice.status === 'success'
    }
  }
}
</script>

<style scoped lang="scss">
  #notice {
    top: 5rem;
    right: 3.5rem;

    i {
      font-size: 1.5rem;
    }
  }
</style>