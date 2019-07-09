import axios from "axios";

const state = {
  comps: []
};

const getters = {
  allComponents: state => state.comps
};

const actions = {
  async fetchComps({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    commit("setComp", response.data);
  },
  async addComp({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );

    commit("newComp", response.data);
  },
  async deleteComp({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("delComp", id);
  },
  async filterComp({ commit }, e) {
    // Get number of select element
    const limit = parseInt(e.target.value);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setComp", response.data);
  },
  async updateComp({ commit }, newObj) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${newObj.id}`,
      newObj
    );

    commit("updateComp", response.data);
  }
};

const mutations = {
  setComp: (state, dados) => (state.comps = dados),
  newComp: (state, dado) => state.comps.unshift(dado),
  delComp: (state, id) =>
    (state.comps = state.comps.filter(comp => comp.id !== id)),
  updateComp: (state, newObj) => {
    const index = state.comps.findIndex(comp => comp.id === newObj.id);

    if (index >= 0) {
      state.comps.splice(index, 1, newObj);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
