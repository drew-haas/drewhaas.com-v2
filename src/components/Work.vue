<template>
  <div class="home-container">

    <div class="hero-container">
      <h1>Work</h1>
    </div>

  </div>
</template>

<script>
import Projects from "./Projects.vue";

export default {
  name: "Work",
  components: {
    Projects
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
};
</script>