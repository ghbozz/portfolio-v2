export const state = () => ({
  notice: false,
  status: null
});

export const mutations = {
  open_notice(state, status) {
    state.status = status;
    state.notice = true;
    console.log(state.notice, state.status);
  }
};
