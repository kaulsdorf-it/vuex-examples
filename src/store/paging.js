const state = {
  page: 1,
  itemsPerPage: 10
}

// mutations
const setPageMutation = (state, page) => {
  state.page = page
}

const setItemsPerPageMutation = (state, itemsPerPage) => {
  state.itemsPerPage = itemsPerPage
}

const mutations = {
  setPageMutation,
  setItemsPerPageMutation,
}

// getters
const getters = {
  getPage: state => state.page,
  getItemsPerPage: state => state.itemsPerPage,
  getNumberOfPages: state => numberOfItems => Math.ceil(numberOfItems / state.itemsPerPage),
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
