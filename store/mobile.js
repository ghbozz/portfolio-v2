export const state = () => ({
  menu: false
});

export const mutations = {
  toggle(state) {
    state.menu = !state.menu;
  }
};
