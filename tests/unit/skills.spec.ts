import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import Skills from "@/components/Skills.vue";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();

Vue.use(Vuetify);
localVue.use(Vuex);

describe("Skills", () => {
  let actions: any;
  let state;
  let store: Store<unknown>;

  beforeEach(() => {
    state = {
      skills: ["Ruby on Rails", "Vuejs"]
    };

    actions = {
      fetchSkills: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        skill: {
          state,
          actions,
          namespaced: true
        }
      }
    });
  });

  it("should renders the component and matches snapshot", () => {
    const wrapper = shallowMount(Skills, { store, localVue });
    expect(wrapper.html()).toMatchSnapshot();
    expect(actions.fetchSkills).toHaveBeenCalled();
  });
});
