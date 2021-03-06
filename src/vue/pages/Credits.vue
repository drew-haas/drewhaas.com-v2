<template>
    <div class="credits-container basic-page-container">
        <!-- Include Meta Balls THREE.js -->
        <HeroThree></HeroThree>

        <div class="credits-row-container">
            <div class="title">
                <h1 class="typography-title fade-up-item">Tech Stack</h1>
            </div>

            <p class="credit-description typography-body-reduced fade-up-item">The core technologies used to create&nbsp;this&nbsp;website.</p>

            <div class="icons-container">
                <a class="icon fade-up-item" :class="item.class" v-for="(item, index) in techStack" :key="index" :href="item.url" target="_blank"
                    @mouseenter.self="hoverAnimation('mouseenter', $event)"
                    @mousemove="titleFollow"
                    @mouseleave.self="hoverAnimation('mouseleave', $event)"
                    :data-title="item.name">

                    <div class="icon-image">
                        <img :src="require('@/assets/images/credits/' + item.icon)" :alt="item.name">
                    </div>
                </a>
            </div>
        </div>

        <div class="credits-row-container">
            <div class="title">
                <h2 class="typography-title fade-up-item">Credits</h2>
            </div>

            <p class="credit-description typography-body-reduced fade-up-item">Companies responsible for some of the posts on&nbsp;this&nbsp;website. And a special thanks to Codrops for the animation and design inspiration.</p>

            <div class="icons-container">
                <a class="icon fade-up-item" :class="item.class" v-for="(item, index) in extraCredits" :key="index" :href="item.url" target="_blank"
                    @mouseenter.self="hoverAnimation('mouseenter', $event)"
                    @mousemove="titleFollow"
                    @mouseleave.self="hoverAnimation('mouseleave', $event)"
                    :data-title="item.name">

                    <div class="icon-image">
                        <img :src="require('@/assets/images/credits/' + item.icon)" :alt="item.name">
                    </div>
                </a>
            </div>
        </div>

        <div class="credits-row-container">
            <div class="title">
                <h2 class="typography-title fade-up-item">Additional Projects</h2>
            </div>

            <p class="credit-description typography-body-reduced fade-up-item">Here are some additional websites I have played a large role on and enjoyed creating.</p>

            <div class="icons-container">
                <a class="icon fade-up-item" :class="item.class" v-for="(item, index) in extraProjects" :key="index" :href="item.url" target="_blank"
                    @mouseenter.self="hoverAnimation('mouseenter', $event)"
                    @mousemove="titleFollow"
                    @mouseleave.self="hoverAnimation('mouseleave', $event)"
                    :data-title="item.name">

                    <div class="icon-image">
                        <img :src="require('@/assets/images/credits/' + item.icon)" :alt="item.name">
                    </div>
                </a>
            </div>
        </div>

        <!-- Hover Element -->
        <div class="tech-title"></div>
    </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap';
import HeroThree from '../components/HeroThree.vue';

export default {
    name: 'Credits',
    components: {
        HeroThree
    },

    data: function () {
        return {
            techStack: [
                {name: 'Vue', class: 'vue', icon: 'vue.svg', url: 'https://vuejs.org/'},
                {name: 'Vanilla JS', class: 'vanillajs', icon: 'js.svg', url: 'http://vanilla-js.com/'},
                {name: 'Sass', class: 'sass', icon: 'sass.svg', url: 'https://sass-lang.com/'},
                {name: 'GSAP', class: 'gsap', icon: 'gsap.svg', url: 'https://greensock.com/gsap/'},
                // {name: 'WebGl', class: 'webgl', icon: 'webgl.svg', url: 'https://greensock.com/gsap/'},
                {name: 'THREE', class: 'three', icon: 'three.png', url: 'https://greensock.com/gsap/'},
                {name: 'Node', class: 'node', icon: 'node.svg', url: 'https://nodejs.org/'},
                {name: 'GitHub', class: 'github', icon: 'github.svg', url: 'https://github.com/'},
                {name: 'Zeit', class: 'zeit', icon: 'zeit.svg', url: 'https://zeit.co/'}
            ],

            extraCredits: [
                {name: 'Bonfire Red', class: 'bonfirered', icon: 'bonfirered.svg', url: 'https://www.bonfirered.com/'},
                {name: 'SKYCATCHFIRE', class: 'skycatchfire', icon: 'skycatchfire.svg', url: 'https://www.skycatchfire.com/'},
                {name: 'Apple', class: 'apple', icon: 'apple.svg', url: 'https://www.apple.com/'},
                {name: 'Critical Mass', class: 'criticalmass', icon: 'criticalmass.svg', url: 'https://www.criticalmass.com/'},
                {name: 'codrops', class: 'codrops', icon: 'codrops.svg', url: 'https://tympanus.net/codrops/'},
            ],

            extraProjects: [
              {name: 'Bonfire Red', class: 'bonfirered', icon: 'bonfirered.svg', url: 'https://www.bonfirered.com/'},
              {name: 'NetJets', class: 'netjets', icon: 'netjets.png', url: 'https://www.netjets.com/en-us/'},
              {name: 'MaskMakers', class: 'maskmakers', icon: 'maskmakers.svg', url: 'https://beamaskmaker.org/'},
            ]
        }
    },

    beforeCreate() {
        window.scrollTo(0, 0);
    },

    beforeMount() {
        TweenMax.set('.fade-up-item', {opacity: 0, y: '40px'});
    },

    mounted() {
        TweenMax.staggerTo('.fade-up-item', .5, {delay: .5, opacity: 1, y: 0, ease: Expo.easeOut}, .1);
    },

    methods: {
        titleFollow(event) {
            let title = document.querySelector('.tech-title');
            title.innerHTML = event.target.parentElement.parentElement.dataset.title;

            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            };

            let relmousepos = {
                x: event.clientX - docScrolls.left + 20,
                y: event.clientY + docScrolls.top + 20
            };

            TweenMax.to(title, 0.001, {x: relmousepos.x, y: relmousepos.y});

        },

        hoverAnimation(type, event) {
            let title = document.querySelector('.tech-title');

            if (type === 'mouseenter') {
                title.classList.add('active');
            } else {
                title.classList.remove('active');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.basic-content-container {
  margin-top: 150px;
}

.credit-description {
  margin: 10px 0 40px;
  max-width: 550px;
}

.fade-up-item {
  opacity: 0;
  transform: translateY(40px);
}

.credits-row-container {
  margin-bottom: 100px;
}

.icons-container {
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: $bp-s) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
}

.icon {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border-radius: 6px;
  margin: 0 10px 10px 0;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: visible;

  @media screen and (max-width: $bp-s) {
      width: auto;
    margin: 0;
  }

  &-image {
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    @media screen and (max-width: $bp-s) {
        margin: 0 auto;
        width: auto;
        max-width: 84%;
    }
  }

  &.skycatchfire {
    img {
      padding: 14px;
    }
  }

  &.apple {
    img {
      padding: 23px;
    }
  }

  &.criticalmass {
    img {
      padding: 2px;
    }
  }

  &.bonfirered {
    img {
      padding: 3px;
      margin-top: 17px;
    }
  }

  &.webgl {
    img {
      padding: 12px;
    }
  }

  &.maskmakers {
    img {
      padding: 8px;
    }
  }

  &.netjets {
    .icon-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      padding: 12px;
      width: 100%;
      height: auto;
    }
  }

  &.codrops {
    .icon-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      padding: 11px;
      width: 100%;
      height: auto;
    }
  }
}

.tech-title {
  z-index: 10;
  opacity: 0;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  padding: 11px 13px;
  background-color: #fff;
  color: $gray-dark;
  font-family: $font-medium;
  text-transform: uppercase;
  font-family: $font-medium;
  letter-spacing: 3.5px;
  font-size: 12px;
  display: inline-block;
  pointer-events: none;

  &.active {
    opacity: 1;
  }
}
</style>