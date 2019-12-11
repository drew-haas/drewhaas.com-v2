<template>
  <div class="home-container">

    <HeroThree></HeroThree>

    <div class="hero-container">
      <h1>hello world</h1>
    </div>

    <div class="description-container">
      <p>My name’s Drew and I’m a Web Developer currently employed by Critical Mass. Feel free to reach out and talk shop or just shoot the <span>shit</span>.</p>
    </div>

    <Projects></Projects>

  </div>
</template>

<script>
import HeroThree from './HeroThree.vue';
import Projects from './Projects.vue';
import {TweenMax, Expo} from 'gsap';

export default {
  name: "Home",
  components: {
    Projects,
    HeroThree
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  mounted() {
    // set h1 to individual chars
    let title = document.querySelector('h1');
    title.innerHTML = this.wrapString(title.innerHTML).join('');
    TweenMax.staggerTo('.letter', .7, {delay: .5, opacity: 1, y: '0', ease: Expo.easeOut}, .04);
  },
  methods: {
    wrapString(string) {
      let newString = [];
      string = string.split('');
      string.forEach(element => newString.push('<span class="letter">' + element + '</span>'));
      return newString;
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
    height: 100vh;
    width: 100%;

    h1 {
      color: $gray-dark;
      font-size: 100px;
      font-family: $font-extra-light;
      font-style: italic;
      font-weight: lighter;
      position: absolute;
      top: calc(50%);
      transform: translateY(-50%);
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      margin: 0;
      overflow: hidden;
      position: relative;
      pointer-events: none;
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
    position: relative;
  }

  .cement {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: .15;
    background-size: cover;
  }
</style>