import axios from "axios";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class Skill extends VuexModule {
  public skills: Array<string> = [];
  @Mutation
  public setSkills(skills: string[]): void {
    this.skills = skills;
  }
  @Action
  public fetchSkills() {
    return axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/skills`)
      .then(response => {
        this.context.commit("setSkills", response.data);
      });
  }
}
export default Skill;
