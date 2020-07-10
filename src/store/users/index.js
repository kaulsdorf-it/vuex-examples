import Vue from 'vue'
import users from '../mocks/users'

const state = {
  items: [],
}

// actions
const loadAction = context => {
  if (context.state.items.length === 0) {
    context.commit('receiveUsersMutation', users)
  }
}

const updateAction = (context, user) => {
  context.commit('updateMutation', user)
}

const removeAction = (context, eventId) => {
  context.commit('removeMutation', eventId)
}

const actions = {
  loadAction,
  updateAction,
  removeAction,
}

// mutations
const receiveUsersMutation = (state, users) => {
  state.items = users
}

const updateMutation = (state, user) => {
  const idx = state.items.findIndex(i => i.id === user.id)

  if (idx === -1) {
    state.items.push(user)
  } else {
    Vue.set(state.items, idx, user)
  }
}

const removeMutation = (state, eventId) => {
  const idx = state.events.findIndex(event => event.id === eventId)

  if (idx !== -1) {
    state.events.splice(idx, 1)
  }
}

const mutations = {
  receiveUsersMutation,
  updateMutation,
  removeMutation,
}

// getters
const getters = {
  getAll: state => state.items,
  getById: state => id => state.items.find(item => item.id === id),
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
