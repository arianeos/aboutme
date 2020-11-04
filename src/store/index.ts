import Vue from "vue";
import Vuex from "vuex";
import event from "./modules/event";
import skill from "./modules/skill";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    skill,
    event
  }
});
