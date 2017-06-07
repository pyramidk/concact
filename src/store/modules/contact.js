import * as types from '../mutation-types'

// initial state
const state = {
  personList: [],
  isEmpty: true
}

// getters
const getters = {
  personList: state => state.personList,
  isEmpty: state => state.isEmpty
}

// actions
const actions = {
  addPerson: ({ commit }, data) => {
    commit(types.ADD_PERSON, {para: data})
  },
  delete: ({ commit }, index) => {
    commit(types.DELETE_PERSON, {index: index})
  },
  init: ({ commit }) => {
    commit(types.INIT)
  }
}

// mutations
const mutations = {
  [types.ADD_PERSON] (state, {para}) {
    state.personList.push(para)
    localStorage.setItem('personList', JSON.stringify(state.personList))
    state.isEmpty = false
  },
  [types.DELETE_PERSON] (state, {index}) {
    state.personList.splice(index, 1)
    localStorage.setItem('personList', JSON.stringify(state.personList))
    if (state.personList.length === 0) {
      localStorage.removeItem('personList')
      state.isEmpty = true
    }
  },
  [types.INIT] (state) {
    if (localStorage.getItem('personList')) {
      state.personList = JSON.parse(localStorage.personList)
      state.isEmpty = false
    } else {
      state.isEmpty = true
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
