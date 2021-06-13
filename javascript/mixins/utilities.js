export default {
  methods: {
    // START PRELOAD
    remove_preload(item) {
      item.classList.remove("preload");
    },
    clear_preloads(items = false) {
      if (items) {
        items.forEach(item => this.remove_preload(item));
        return
      }
      
      document.querySelectorAll(".preload").forEach(item => {
        this.remove_preload(item);
      });
    },
    preload(delay, items = false) {
      setTimeout(() => { this.clear_preloads(items) }, delay);
    }
    // END PRELOAD
  }
};
