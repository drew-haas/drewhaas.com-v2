<template>
  <div class="home-container">

    <div class="hero-container">
      <div class="hero-copy-container">
        <h1 id="hero-title">hello world</h1>
        <p class="hero-subtitle">My name’s Drew and I’m a Web Developer currently employed by Critical Mass (on site at Apple) in Sunnyvale, CA. Feel free to reach out and talk shop or shoot the <span>shit</span>.</p>
      </div>
    </div>

    <Projects></Projects>

  </div>
</template>

<script>
import HeroThree from './HeroThree.vue';
import Projects from './Projects.vue';
import {TweenMax, TimelineMax, Expo} from 'gsap';

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
    if (document.getElementById('hero-title')) {
      let title = document.querySelector('h1');
      title.innerHTML = this.wrapString(title.innerHTML).join('');
      var tl = new TimelineMax();
      tl.staggerTo('.letter', .7, {delay: .2, opacity: 1, y: '0', ease: Expo.easeOut}, .04)
        .to('.hero-subtitle', .7, {opacity: 1, y: '0', ease: Expo.easeOut}, '-=0.6');
    }
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
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-copy-container {
      max-width: 700px;
      text-align: left;
      padding: 0 55px;
    }

    .hero-subtitle {
      opacity: 0;
      transform: translateY(20px);

      @media screen and (max-width: $bp-s) {
        font-size: 16px;
      }
    }

    h1 {
      color: $gray-dark;
      font-size: 100px;
      font-family: $font-extra-light;
      font-style: italic;
      font-weight: lighter;
      text-transform: uppercase;
      width: 100%;
      margin: 0;
      overflow: hidden;
      position: relative;
      pointer-events: none;

      @media screen and (max-width: $bp-s) {
        font-size: 50px;
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
</style>