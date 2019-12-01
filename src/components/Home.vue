<template>
  <div class="home-container">
    <div class="edition">Drew Haas</div>
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
    padding-top: 60px;

    h1 {
      font-size: 50px;
      font-family: 'Abel';
      text-transform: uppercase;
    }
  }

  .edition {
    font-size: 45vh;
    transform: rotate(-90deg) translate(-76%, 106px);
    transform-origin: left;
    display: inline-block;
    position: absolute;
    color: $gray-medium;
    top: 0;
    left: 0;
    opacity: .5;
  }
</style>