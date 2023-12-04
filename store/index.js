export const state = () => ({
  //   baseURL: process.env.baseURL,
  isPopup: false,
});

export const getters = {
  baseURL(state) {
    //  return state.baseURL;
  },
  isPopup(state) {
    return state.isPopup;
  },
};

export const mutations = {
  updateTitleValues(state, payload) {
    state.main.title;
  },
  openPopup(state, status) {
    state.isPopup = status;
  },
};
