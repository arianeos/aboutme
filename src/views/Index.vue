<template>
  <div>
    <Header />
    <Timeline />
    <Skills />
    <ContactMe />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Timeline from "../components/Timeline.vue";
import Header from "../components/Header.vue";
import ContactMe from "../components/ContactMe.vue";
import Skills from "../components/Skills.vue";

export default Vue.extend({
  name: "Index",

  components: {
    Header,
    Timeline,
    ContactMe,
    Skills
  }
});
</script>
