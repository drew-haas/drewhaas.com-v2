<template>
  <div class="home-container">
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from "./Projects.vue";

export default {
  name: "Home",
  components: {
    Projects
  }
};
</script>

<style lang="scss" scoped>
  .home-container {
    h1 {
      font-size: 50px;
      font-family: 'Abel';
      text-transform: uppercase;
    }
  }
</style>