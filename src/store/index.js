import Vuex from "vuex";
import Vue from "vue";
import module1 from "./modules/module1";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    module1
  }
});
