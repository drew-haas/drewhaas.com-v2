<template>
  <div class="navigation-container">
    <div class="nav-bar">
      <div class="logo-container" v-on:click="routeTo('/')">
        <img :src="require('@/assets/images/dru-logo-02.svg')" alt="Dru" class="logo">
      </div>
      <div class="menu-icon" v-on:click="toggleNavigation">
        <div class="menu-bg"></div>
        <div class="bar-container">
          <span class="menu-bar bar-1"></span>
          <span class="menu-bar bar-2"></span>
        </div>
      </div>
    </div>
    <nav class="navigation">
      <ul>
        <li class="nav-item nav-item-large" data-filter="work" v-on:click="filterPage('work')">
          <span class="nav-item-wrapper">Work</span>
        </li>
        <li class="nav-item nav-item-large link-green" data-filter="life" v-on:click="filterPage('life')">
          <span class="nav-item-wrapper">Life</span>
        </li>
        <li class="nav-item nav-item-small">
          <span class="nav-item-wrapper">
            <a href="mailto:andrewfhaas@gmail.com?Subject=Hey%20There" target="_top"><code>andrewfhaas@gmail.com</code></a>
          </span>
        </li>
        <li class="nav-item nav-item-small">
          <span class="nav-item-wrapper" v-on:click="routeTo('/credits')">
            <code>credits</code>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from "gsap";

export default {
  name: "Navigation",
  mounted: function() {
    // global vars for this component
    this.state = {
      navigationOpen: false,
      filteredBy: "all"
    };

    this.navBg = this.$el.querySelector(".menu-bg");
    this.navigation = document.querySelector(".navigation");
    this.menuIcon = document.querySelector(".menu-icon");
    this.body = document.querySelector("body");
    this.menuTl = new TimelineMax({ paused: true });

    this.createTimeline();
  },
  methods: {
    // TODO: on window resize re-init the timeline to avoid animation glitch
    createTimeline() {
      this.menuTl = new TimelineMax({ paused: true });
      this.menuTl
        .to(this.navBg, 0.5, { width: "100vw", ease: Expo.easeInOut })
        .to(
          this.navBg,
          0.5,
          { height: "100vh", ease: Expo.easeInOut },
          "-=0.15"
        )
        .staggerTo(
          document.querySelectorAll(".nav-item-wrapper"),
          0.5,
          { y: 0, opacity: 1, ease: Expo.easeOut },
          0.1,
          "-=.3"
        );
    },

    routeTo(path) {
      if (this.state.navigationOpen) {
        this.closeNav();
      }

      this.$router.push(path).catch(err => {});
    },

    // TODO: create work/life filter
    filterPage(filter) {
      if (filter === 'work') {
        this.$store.projects = this.$store.getters.workItems;
      } else if (filter === 'life') {
        this.$store.projects = this.$store.getters.lifeItems;
      }

      this.$router.push('/').catch(err => {});
      this.closeNav();
    },

    openNav() {
      this.navigation.classList.add('open');
      this.menuIcon.classList.add('open');
      this.body.classList.add('disable-scrolling');
      this.state.navigationOpen = true;
      this.menuTl.play();
    },

    closeNav() {
      this.navigation.classList.remove('open');
      this.menuIcon.classList.remove('open');
      this.body.classList.remove('disable-scrolling');
      this.state.navigationOpen = false;
      this.menuTl.reverse();
    },

    toggleNavigation() {
      return this.state.navigationOpen ? this.closeNav() : this.openNav();
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: $gray-dark;
}

.navigation-container {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.nav-bar {
  min-height: $navbar-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.logo-container {
  // width: $navbar-height;
  // height: $navbar-height;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  // background-color: #fff;
  z-index: 10;

  .circle {
    width: 20px;
    height: 20px;
    background-color: $green;
    border-radius: 50%;
    position: relative;

    &:before {
      content: '';
      width: 8px;
      background-color: $red;
      height: 100%;
      position: absolute;
      left: 0;
    }
  }

  .logo {
    width: 80px;
    padding-left: 17px;
  }
}

.menu-icon {
  width: $navbar-height;
  height: $navbar-height;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  .menu-bg {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
  }

  &:hover {
    .menu-bar {
      background-color: $red;
      transition: all 0.3s;
    }
  }

  &.open {
    .bar-1 {
      transform: rotate(45deg);
    }

    .bar-2 {
      transform: rotate(-45deg);
    }
  }
}

.bar-container {
  width: 20px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  padding: 20px;

  .menu-bar {
    width: 100%;
    height: 1px;
    background-color: $gray-dark;
    display: block;
    transition: background-color 0.3s;
    transform-origin: 18% 0;
    transition: 0.3s transform;
  }
}

.navigation {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
  display: flex;
  justify-content: center;

  &.open {
    pointer-events: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-item {
    display: block;
    overflow: hidden;
    cursor: pointer;

    &-large {
      @extend .edition;
      font-size: 170px;
      text-transform: uppercase;
    }

    &-small {
      font-size: 17px;
      margin-top: 20px;

      &:hover {
        color: $red;
      }
    }

    &.link-green {
      .nav-item-wrapper {
        &:before {
          background-color: $green;
        }

        &:hover {
          color: $green;
        }
      }
    }

    &-wrapper {
      display: block;
      transform: translateY(100%);
      opacity: 0;
      position: relative;
      transition: color .4s;

      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        top: 50%;
        background-color: $red;
        transform: translate(-100%, -50%);
      }

      &:hover {
        color: $red;
        transition: color .4s;
        transition-delay: .1s;

        &:before {
          transform: translate(100%, -50%);
          transition: transform .35s cubic-bezier(.86, 0, .07, 1);
        }
      }
    }
  }
}
</style>