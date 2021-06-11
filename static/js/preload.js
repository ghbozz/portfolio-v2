window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".preload").forEach(item => {
      item.classList.remove("preload");
    });
  }, 600);
});
