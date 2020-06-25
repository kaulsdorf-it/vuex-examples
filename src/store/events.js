import getMockEvents from './mocks/random-events'

const state = {
  events: [],
}

// actions
const loadAction = (context, numberOfEvents) => {
  context.commit('receiveEventsMutation', getMockEvents(numberOfEvents))
}

const setTypeAction = (context, { eventId, type }) => {
  context.commit('setTypeMutation', { eventId, type })
}

const removeAction = (context, eventId) => {
  context.commit('removeMutation', eventId)
}

const confirmAction = (context, eventId) => {
  context.commit('confirmMutation', eventId)
}

const actions = {
  loadAction,
  setTypeAction,
  removeAction,
  confirmAction,
}

// mutations
const receiveEventsMutation = (state, events) => {
  state.events = events
}

const setTypeMutation = (state, { eventId, type }) => {
  const idx = state.events.findIndex(event => event.id === eventId)

  if (idx !== -1) {
    state.events[idx].type = type
  }
}

const removeMutation = (state, eventId) => {
  const idx = state.events.findIndex(event => event.id === eventId)

  if (idx !== -1) {
    state.events.splice(idx, 1)
  }
}

const confirmMutation = (state, eventId) => {
  const idx = state.events.findIndex(event => event.id === eventId)

  if (idx !== -1) {
    state.events[idx].confirmed = true
  }
}

const mutations = {
  receiveEventsMutation,
  setTypeMutation,
  removeMutation,
  confirmMutation,
}

// getters
const getTotalByType = state => eventType => state.events.filter(event => event.type === eventType).length

const getTypes =
  state =>
    state.events.map(i => i.type).unique().sort()

const getters = {
  getAll: state => state.events,
  getTypes,
  getTotalByType,
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
