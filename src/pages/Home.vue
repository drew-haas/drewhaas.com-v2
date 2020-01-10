<template>
  <div class="home-container">
    <div class="hero-container">
      <div class="hero-copy-container">
        <h1 id="hero-title">hello</h1>
        <p class="hero-subtitle">My name's Drew and I'm a Web Developer with a focus on design and animation. Below is a culmination of notable events from my work and adventures outside the office.</p>
      </div>
      <div class="flying-drew-container">

        <FlyingIllustration></FlyingIllustration>

        <div class="scroll-image">
          <img :src="require('@/assets/images/home/img-drew-flying.png')" alt="Drew flying through the website"/>
        </div>
      </div>

    </div>

    <Projects></Projects>
  </div>
</template>

<script>
import HeroThree from "../components/HeroThree.vue";
import Projects from "../components/Projects.vue";
import FlyingIllustration from '../components/FlyingIllustration.vue';
import { TweenMax, TimelineMax, Expo } from "gsap";

export default {
  name: "Home",
  components: {
    Projects,
    HeroThree,
    FlyingIllustration
  },
  beforeCreate() {
    window.scrollTo(0, 0);
    this.illustrationTl = new TimelineMax();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.rotationEl = document.querySelector(".scroll-image");

    // this.$store.activeSet = 'all'; // TODO: create active set to cycle through when enabling work/life filters

    // set h1 to individual chars
    if (document.getElementById("hero-title")) {
      let title = document.querySelector("h1");
      title.innerHTML = this.wrapString(title.innerHTML).join("");
      var tl = new TimelineMax();
      tl.staggerTo(
        ".letter",
        0.7,
        { delay: 0.2, opacity: 1, y: "0", ease: Expo.easeOut },
        0.04
      ).to(
        ".hero-subtitle",
        0.7,
        { opacity: 1, y: "0", ease: Expo.easeOut },
        "-=0.6"
      );
    }

    // this.illustrationTl
    //   .staggerTo('.plus-icon', .5, {opacity: 1}, .01)
    //   .to('.cls-2', .5, {scale: 1, opacity: 1});
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    wrapString(string) {
      let newString = [];
      string = string.split("");
      string.forEach(element =>
        newString.push('<span class="letter">' + element + "</span>")
      );
      return newString;
    },
    handleScroll(event) {
      let scrollTop = event.target.scrollingElement.scrollTop,
        itemRotation = scrollTop * 0.2,
        opacity = 1 - itemRotation / 100;

      TweenMax.to(this.rotationEl, 2, {
        x: itemRotation * 1.75 + "px",
        y: itemRotation * 1.5 + "px",
        opacity: opacity,
        rotation: itemRotation,
        ease: Expo.easeOut
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  color: #888;
  overflow: hidden;
}

.hero-container {
  min-height: 100vh;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: $bp-s) {
    flex-direction: column-reverse;
    height: auto;
    min-height: 0;
    margin-bottom: 80px;
  }

  .hero-copy-container {
    max-width: 500px;
    text-align: left;
    padding: 0 55px;

    @media screen and (max-width: $bp-s) {
      padding: 0 20px;
    }
  }

  .hero-subtitle {
    opacity: 0;
    transform: translateY(20px);

    @media screen and (max-width: $bp-s) {
      font-size: 16px;
    }
  }

  h1 {
    background-color: #000;
    color: #fff;
    display: inline;
    font-size: 100px;
    font-family: $font-extra-light;
    font-style: italic;
    font-weight: lighter;
    text-transform: uppercase;
    margin: 0;
    overflow: hidden;
    position: relative;
    pointer-events: none;

    @media screen and (max-width: $bp-s) {
      font-size: 50px;
      background-color: transparent;
      color: $gray-dark;
      font-weight: bold;
      letter-spacing: 20px;
    }
  }
}

.flying-drew-container {
  width: 50vw;
  position: relative;
  left: 30px;

  @media screen and (max-width: $bp-s) {
    width: 80%;
    margin-bottom: 120px;
  }

  .illustration-container {
    width: 100%;
    position: absolute;
    top: 109px;
    left: -75px;
    transform: translate(0,0);
  }
}

.scroll-image {
  z-index: 1;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  img {
    width: 100%;
  }
}
</style>