import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import Timeline from "@/components/Timeline.vue";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();

Vue.use(Vuetify);
localVue.use(Vuex);

describe("Timeline", () => {
  let actions: any;
  let state;
  let store: Store<unknown>;

  beforeEach(() => {
    state = {
      events: [
        {
          id: 1,
          title: "Title 1",
          description: "Description 1",
          icon: "mdi-baby-carriage"
        },
        {
          id: 2,
          title: "Title 2",
          description: "Description 2",
          icon: "mdi-school"
        }
      ]
    };

    actions = {
      fetchEvents: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        event: {
          state,
          actions,
          namespaced: true
        }
      }
    });
  });

  it("should renders the component and matches snapshot", () => {
    const wrapper = shallowMount(Timeline, { store, localVue });
    expect(wrapper.html()).toMatchSnapshot();
    expect(actions.fetchEvents).toHaveBeenCalled();
  });
});
