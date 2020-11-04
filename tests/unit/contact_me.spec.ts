import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import ContactMe from "@/components/ContactMe.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import emailjs from "emailjs-com";

const localVue = createLocalVue();

Vue.use(Vuetify);

describe("ContactMe", () => {
  it("should renders the component and matches snapshot", () => {
    const wrapper = shallowMount(ContactMe, { localVue });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("when form is invalid, should not send an email when clicks on send btn", async () => {
    const wrapper = mount(ContactMe, {
      localVue
    });
    jest.spyOn(emailjs, "send");
    wrapper.find("button").trigger("click");
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it("when form is valid, should send an email when clicks on send btn", () => {
    const wrapper = mount(ContactMe, { localVue });
    jest.spyOn(emailjs, "send");
    wrapper.find("#name").setValue("Test One");
    wrapper.find("#email").setValue("test_one@test.com");
    wrapper.find("#subject").setValue("Subject of the email");
    wrapper.find("#message").setValue("Message of the email");
    wrapper.find("button").trigger("click");
    expect(emailjs.send).toHaveBeenCalled();
  });
});
