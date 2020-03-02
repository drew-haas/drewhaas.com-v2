<template>
  <div class="credits-container basic-page-container">
    <div class="tech-stack">
      <div class="title">
        <h1 class="fade-up-item">Tech Stack</h1>
      </div>
      <p class="paragraph-smaller fade-up-item">The core technologies used to create&nbsp;this&nbsp;website.</p>
      <div class="icons-container">
        <a
        class="icon fade-up-item"
        :class="item.class"
        v-for="(item, index) in techStack"
        :key="index"
        :href="item.url"
        target="_blank"
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
    <div class="extra-credit-container">
      <div class="title">
        <h2 class="fade-up-item">Credits</h2>
      </div>
      <p class="paragraph-smaller fade-up-item">Companies responsible for some of the posts on&nbsp;this&nbsp;website.</p>
      <div class="icons-container">
        <a
        class="icon fade-up-item"
        :class="item.class"
        v-for="(item, index) in extraCredits"
        :key="index"
        :href="item.url"
        target="_blank"
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
    <div class="tech-title"></div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap';

export default {
  name: 'Credits',
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
        {name: 'Zeit', class: 'zeit', icon: 'zeit.svg', url: 'https://zeit.co/'},
      ],
      extraCredits: [
        {name: 'Bonfire Red', class: 'bonfirered', icon: 'bonfirered.svg', url: 'https://www.bonfirered.com/'},
        {name: 'SKYCATCHFIRE', class: 'skycatchfire', icon: 'skycatchfire.svg', url: 'https://www.skycatchfire.com/'},
        {name: 'Apple', class: 'apple', icon: 'apple.svg', url: 'https://www.apple.com/'},
        {name: 'Critical Mass', class: 'criticalmass', icon: 'criticalmass.svg', url: 'https://www.criticalmass.com/'}
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

p {
  max-width: 550px;
}

.fade-up-item {
  opacity: 0;
  transform: translateY(40px);
}

.tech-stack {
  margin-bottom: 100px;
}

.icons-container {
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: $bp-s) {
    justify-content: space-evenly;
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
    width: 46%;
    margin: 0 0 10px;
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