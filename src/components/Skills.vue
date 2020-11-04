<template>
  <div class="text-center my-16">
    <h2 class="pink--text text--lighten-1 pb-12 text-h2">
      Skills
    </h2>
    <v-chip
      v-for="skill in skills"
      :key="skill"
      large
      class="ma-2"
      color="blue darken-1"
      text-color="white"
    >
      {{ skill }}
    </v-chip>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "Skills",
  created() {
    this.fetchSkills().catch(error => {
      console.error("An error occurred when fetching skills", error);
    });
  },
  computed: {
    ...mapState("skill", ["skills"])
  },
  methods: {
    ...mapActions("skill", ["fetchSkills"])
  }
});
</script>
