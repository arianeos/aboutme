<template>
  <v-container class="pa-12" fluid id="timeline-container">
    <div class="text-center pa-12" v-show="fetching">
      <v-progress-circular
        :size="100"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-timeline v-show="events.length > 0">
      <v-timeline-item
        v-for="event in events"
        :key="event.id"
        color="pink lighten-2"
        :icon="event.icon"
        fill-dot
        large
      >
        <v-card
          class="elevation-2"
          color="indigo lighten-2"
          style="color: white"
        >
          <v-card-title class="headline title">
            {{ event.title }}
          </v-card-title>
          <v-card-text class="white text--primary pa-6 card-text">
            {{ event.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Timeline",
  created() {
    this.loadEvents();
  },
  data() {
    return {
      fetching: false
    };
  },
  computed: {
    ...mapState("event", ["events"])
  },
  methods: {
    ...mapActions("event", ["fetchEvents"]),
    loadEvents() {
      this.fetching = true;
      this.fetchEvents()
        .then(() => (this.fetching = false))
        .catch(error => {
          this.fetching = false;
          console.error("An error occurred when fetching events", error);
        });
    }
  }
};
</script>
<style>
.card-text {
  font-size: 1rem;
}
</style>
