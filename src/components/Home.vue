<template>
  <div class="home-container">

    <div class="hero-container">
      <h1>Hello World</h1>
    </div>

    <div class="description-container">
      <p>My name’s Drew and I’m a Web Developer currently employed by Critical Mass. I like to travel, play <span>soccer</span>, and enjoy a new <span data-icon=":beer:" data-text="IPA">IPA</span> in my free time. Feel free to reach out and talk shop or just shoot the <span>shit</span>.</p>
    </div>

    <Projects></Projects>

  </div>
</template>

<script>
import Projects from "./Projects.vue";

export default {
  name: "Home",
  components: {
    Projects
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
  .home-container {
    color: #888;
    overflow: hidden;
  }

  .hero-container {
    height: 100vh;
    width: 100%;

    h1 {
      position: absolute;
      top: calc(50%);
      width: 100%;
      transform: translateY(-50%);
      font-size: 100px;
      text-transform: uppercase;
      font-family: $font-extra-light;
      font-style: italic;
      font-weight: lighter;
      color: #888;
      text-align: center;
      margin: 0;
    }

    .name {
      position: absolute;
      left: -22px;
      top: 75%;
      font-family: $font-extra-light;
      font-style: italic;
      opacity: 0.1;
      font-size: 111px;
      transform-origin: 0 0;
      transform: rotate(-90deg);
      line-height: 1;
    }

    .buildings {
      width: 421px;
      height: 693px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;

      .building-1 {
        position: absolute;
        right: 0;
        bottom: 35px;
      }

      .building-2 {
        position: absolute;
        bottom: 31px;
        left: 49px;
      }

      .building-3 {
        position: absolute;
        bottom: 127px;
        left: 0;
      }
    }
  }

  .description-container {
    max-width: 650px;
    margin: 0 auto 100px;
    line-height: 3;
    font-size: 24px;
    font-family: $font-book;
  }
</style>