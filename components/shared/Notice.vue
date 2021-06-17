<template>
  <transition name="side-slide" mode="out-in" appear>
    <div id="notice" class="w-1/4 h-20 rounded-lg p-4 absolute bg-secondary-light flex items-center justify-start">
      <div class="border-r-2"
           :class="is_success() ? 'border-primary-green' : 'border-primary-red'">
        <i v-if="is_success()" class="far fa-check-circle mr-4 text-primary-green"></i>
        <i v-else class="far fa-times-circle mr-4 text-primary-red"></i>    
      </div>
      <div>
        <p v-if="is_success()" class="ml-4">Your message has been sent !</p>
        <p v-else class="ml-4">An error occured please reach me out at 
          <a href="mailto:romain.sanson@hey.com" class="text-primary-green">romain.sanson@hey.com</a>
        </p>
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

    .fa-times-circle {
      color: rgba(220, 38, 38, 0.9);
    }

    i {
      font-size: 1.5rem;
    }
  }
</style>