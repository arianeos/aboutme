<template>
  <div class="grape-background">
    <v-row>
      <v-col
        cols="12"
        lg="6"
        class="px-6 d-flex flex-column justify-center align-center text-center"
      >
        <div class="large-text">Hi, I'm Ariane</div>
        <div class="medium-text">I'm a Full Stack Engineer</div>
        <v-btn
          x-large
          class="ma-16"
          @click="$vuetify.goTo('#timeline-container')"
        >
          Click's here to know more about me
        </v-btn>
      </v-col>
      <v-col cols="6" contain class="d-none d-lg-block pr-6 pt-0">
        <v-img src="../image.png" max-width="900px"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
.grape-background {
  background: linear-gradient(#ce6fb0, #280340);
  color: white;
  font-family: "Indie Flower";
  padding: 38px 0;
}
.large-text {
  font-size: 160px;
}
.medium-text {
  font-size: 80px;
}
</style>
