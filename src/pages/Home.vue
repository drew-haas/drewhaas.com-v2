<template>
  <div class="home-container">

    <div class="hero-container">
      <div class="scroll-image">
        <img :src="require('@/assets/images/img-drew-flying.png')" alt="Drew flying through the website">
      </div>
      <div class="hero-copy-container">
        <h1 id="hero-title">hello</h1>
        <p class="hero-subtitle">My name's Drew and I'm a Web Developer with a focus on design and animation. Work - Life Balance below.</p>
      </div>
    </div>

    <Projects></Projects>

  </div>
</template>

<script>
import HeroThree from '../components/HeroThree.vue';
import Projects from '../components/Projects.vue';
import {TweenMax, TimelineMax, Expo} from 'gsap';

export default {
  name: 'Home',
  components: {
    Projects,
    HeroThree
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.rotationEl = document.querySelector('.scroll-image');

    // this.$store.activeSet = 'all'; // TODO: create active set to cycle through when enabling work/life filters

    // set h1 to individual chars
    if (document.getElementById('hero-title')) {
      let title = document.querySelector('h1');
      title.innerHTML = this.wrapString(title.innerHTML).join('');
      var tl = new TimelineMax();
      tl.staggerTo('.letter', .7, {delay: .2, opacity: 1, y: '0', ease: Expo.easeOut}, .04)
        .to('.hero-subtitle', .7, {opacity: 1, y: '0', ease: Expo.easeOut}, '-=0.6');
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    wrapString(string) {
      let newString = [];
      string = string.split('');
      string.forEach(element => newString.push('<span class="letter">' + element + '</span>'));
      return newString;
    },
    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop,
            itemRotation = scrollTop * .2,
            opacity = 1 - (itemRotation / 100);

        TweenMax.to(this.rotationEl, 2, {x: itemRotation * 1.75 + 'px', y: itemRotation * 1.5 + 'px', opacity: opacity, rotation: itemRotation, ease: Expo.easeOut});
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
    position: relative;

    .hero-copy-container {
      max-width: 500px;
      text-align: left;
      padding: 0 55px;
      top: 50%;
      left: 0%;
      transform: translate(0, -50%);
      position: absolute;

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

.scroll-image {
  position: absolute;
  right: 20px;
  top: 10%;
  max-width: 50vw;

  img {
    width: 100%;
  }
}
</style>