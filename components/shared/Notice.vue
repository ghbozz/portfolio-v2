<template>
  <transition name="side-slide" mode="out-in" appear>
    <div id="notice" class="w-1/4 h-20 rounded-lg p-4 absolute bg-secondary-light flex items-center justify-start">
      <div class="border-r-2 icon" :class="status()">
        <i v-if="status() === 'success'" class="far fa-check-circle mr-4 text-primary-green"></i>
        <i v-else-if="status() === 'invalid'" class="fas fa-exclamation-circle mr-4 text-primary-orange"></i>
        <i v-else class="far fa-times-circle mr-4 text-primary-red"></i>    
      </div>
      <div>
        <p v-if="status() === 'success'" class="ml-4">Your message has been sent successfully !</p>
        <p v-else-if="status() === 'invalid'" class="ml-4">Please make sure to complete the form with valid informations</p>
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
    status() {
      return this.$store.state.notice.status
    }
  }
}
</script>

<style scoped lang="scss">
  #notice {
    top: 5rem;
    right: 3.5rem;

    .icon {
      &.success {
        border-color: #05a672;
      }

      &.invalid {
        border-color: #fbbf24;
      }

      &.failure {
        border-color: #dc3d3b;
      }
    }

    i {
      font-size: 1.5rem;
    }
  }
</style>