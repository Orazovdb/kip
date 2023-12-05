export const state = () => ({
  imageURL: process.env.IMAGE_URL,
  isPopup: false,
});

export const getters = {
  imageURL(state) {
    return state.imageURL;
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
