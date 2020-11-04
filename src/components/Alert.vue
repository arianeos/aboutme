<template>
  <v-alert
    border="left"
    elevation="2"
    colored-border
    :type="type"
    v-show="message"
    class="my-12"
  >
    {{ message }}
  </v-alert>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "Alert",
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "success",
      required: false
    }
  }
});
</script>
