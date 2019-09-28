const wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const state = {
  tasks: JSON.parse(sessionStorage.getItem('tasks') || '[]')
};

const actions = {
  async add({ commit }, payload) {
    await wait(500);
    commit('ADD_TASK', payload);
  },
  async rem({ commit }, payload) {
    await wait(500);
    commit('REMOVE_TASK', payload);
  }
};

const mutations = {
  ADD_TASK(state, payload) {
    state.tasks.push(payload);
    sessionStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  REMOVE_TASK(state, payload) {
    state.tasks.splice(payload, 1);
  }
};

export default {
  state,
  actions,
  mutations
};
