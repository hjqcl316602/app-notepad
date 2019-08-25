let basis = {};

basis.state = {
  name: 'The app is a vue project!'
};

basis.mutations = {
  ['change/name'](state, name) {
    state.name = name;
  }
};
basis.actions = {};
basis.getters = {};

export default basis;
