<template>
  <div class="navigation-container">
    <div class="nav-bar">
      <div class="logo-container" v-on:click="routeTo('/', 'clickSound')">
        <img :src="require('@/assets/images/dru-logo-02.svg')" alt="Dru" class="logo">
      </div>
      <div class="menu-icon" v-on:click="toggleNavigation('clickSound')">
        <div class="menu-bg"></div>
        <div class="bar-container">
          <span class="menu-bar bar-1"></span>
          <span class="menu-bar bar-2"></span>
        </div>
      </div>
    </div>
    <nav class="navigation">
      <ul>
        <!-- <li class="nav-item nav-item-large" data-filter="work" v-on:click="routeTo('/work')">
          <span class="nav-item-wrapper">Work</span>
        </li>
        <li class="nav-item nav-item-large link-blue" data-filter="life" v-on:click="routeTo('/life')">
          <span class="nav-item-wrapper">Life</span>
        </li> -->
        <li class="nav-item nav-item-small">
          <span class="nav-item-wrapper">
            <a href="mailto:andrewfhaas@gmail.com?Subject=Hey%20There" target="_top"><code>andrewfhaas@gmail.com</code></a>
          </span>
        </li>
        <li class="nav-item nav-item-small">
          <span class="nav-item-wrapper" v-on:click="routeTo('/credits', 'clickSound')">
            <code>credits</code>
          </span>
        </li>
      </ul>
      <div class="social-list">
        <div class="icon icon-instagram"><a href="https://www.instagram.com/beepboopbop/" alt="instagram" target="_blank"><svg role="img" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a></div>
        <div class="icon icon-github"><a href="https://github.com/drew-haas" target="_blank"><svg role="img" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div>
        <div class="icon icon-codepen"><a href="https://codepen.io/drewhaas" target="_blank"><svg role="img" viewBox="0 0 24 24"><path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"></path></svg></a></div>
        <div class="icon icon-linkedin"><a href="https://www.linkedin.com/in/drewhaas/" target="_blank"><svg role="img" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div>
        <div class="icon icon-gmail"><a href="mailto:andrewfhaas@gmail.com" target="_blank"><svg role="img" viewBox="0 0 24 24"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path></svg></a></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from "gsap";

export default {
  name: 'Navigation',
  created() {
    window.addEventListener('resize', this.resizeHandler);
  },
  mounted() {
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
        .to(this.navBg, 0.5, { width: '100vw', ease: Expo.easeInOut })
        .to(this.navBg, 0.5, { height: '100vh', ease: Expo.easeInOut }, '-=0.15')
        .staggerTo(document.querySelectorAll('.nav-item-wrapper'), 0.5, { y: 0, opacity: 1, ease: Expo.easeOut }, .1, '-=.3')
        .staggerTo(document.querySelectorAll('.social-list .icon'), .5, {y: 0, opacity: 1, ease: Expo.easeOut }, .1, '-=.5');
    },

    routeTo(path, soundId) {
      this.playSound(soundId);

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

    toggleNavigation(soundId) {
      this.playSound(soundId);
      return this.state.navigationOpen ? this.closeNav() : this.openNav();
    },

    playSound(soundId) {
      document.getElementById(soundId).play();
    },

    resizeHandler() {
      this.createTimeline();
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: $gray-dark;

  &:hover {
    color: $green;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
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
      font-size: 90px;
      text-transform: uppercase;
      font-family: $font-extra-light;

      @media screen and (max-width: $bp-s) {
        font-size: 50px;
        margin-bottom: 20px;
      }
    }

    &-small {
      font-size: 17px;
      margin-top: 20px;

      &:hover {
        color: $green;
      }

      @media screen and (max-width: $bp-s) {
        font-size: 14px;
      }
    }

    &.link-blue {
      .nav-item-wrapper {
        &:before {
          background-color: $blue;
        }

        &:hover {
          color: $blue;
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
        background-color: $green;
        transform: translate(-100%, -50%);
      }

      &:hover {
        color: $green;
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

.social-list {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .icon {
    opacity: 0;
    transform: translateY(20px);
    padding: 10px;
    margin: 0 10px;
    width: 28px;
    height: 29px;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        path {
          fill: $gray-darkest;
          transition: fill .3s;
        }
      }
    }

    svg {
      width: 80%;

      path {
        fill: $gray-dark;
        transition: fill .3s;
      }
    }
  }
}
</style>