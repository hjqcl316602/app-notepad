import Vue from 'vue';
const filters = {
  strMoney(value) {
    return value + '';
  }
};
Object.keys(filters).forEach((key, i) => {
  Vue.filter(key, filters[key]);
});
