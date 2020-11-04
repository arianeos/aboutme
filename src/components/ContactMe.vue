<template>
  <div class="white--text indigo lighten-3 mt-12">
    <v-container class="pa-12">
      <Alert :type="type" :message="alertMessage" v-show="alertMessage" />
      <h2 align="center" class="pb-6 text-h2">CONTACT ME</h2>
      <v-form ref="form">
        <v-text-field
          v-model="contact.name"
          id="name"
          label="*Name"
          :rules="requiredRules"
          required
          solo
          filled
          background-color="white"
          color="white"
        ></v-text-field>
        <v-text-field
          v-model="contact.email"
          id="email"
          label="*Email"
          :rules="emailRules"
          required
          solo
          filled
          background-color="white"
          color="white"
        ></v-text-field>
        <v-text-field
          v-model="contact.subject"
          id="subject"
          label="Subject"
          solo
          filled
          background-color="white"
          color="white"
        ></v-text-field>
        <v-textarea
          v-model="contact.message"
          label="*Message"
          id="message"
          :rules="requiredRules"
          required
          solo
          filled
          background-color="white"
        ></v-textarea>
        <v-btn right class="mr-4" @click="send">
          Send
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>
<script lang="ts">
import emailjs from "emailjs-com";
import Vue from "vue";
import Alert from "../components/Alert.vue";

export default Vue.extend({
  name: "ContactMe",
  components: {
    Alert
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      requiredRules: [(v: any) => !!v || "This field is required"],
      emailRules: [
        (v: any) => !!v || "E-mail is required",
        (v: any) => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      alertMessage: "",
      type: "success"
    };
  },
  computed: {
    isFormValid(): boolean {
      return (this.$refs.form as Vue & { validate: () => boolean }).validate();
    }
  },
  methods: {
    send(): void {
      if (!this.isFormValid) {
        return;
      }

      emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          this.contact,
          process.env.VUE_APP_USER_ID
        )
        .then(_ => {
          this.alertMessage = "Email successfully sent";
          this.cleanAlertMessage();
        })
        .catch(error => {
          console.error("FAILED...", error);
        });
    },
    cleanAlertMessage() {
      setTimeout(() => {
        this.alertMessage = "";
      }, 10000);
    }
  }
});
</script>
