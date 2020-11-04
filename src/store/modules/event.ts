import axios from "axios";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import EventModel from "../../models/event";

@Module({ namespaced: true })
class Event extends VuexModule {
  public events: Array<EventModel> = [];
  @Mutation
  public setEvents(events: EventModel[]): void {
    this.events = events;
  }
  @Action
  public fetchEvents() {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/events`)
      .then(response => {
        this.context.commit("setEvents", response.data);
      });
  }
}
export default Event;
