<template>
  <div class="project-detail-container" :class="'project-detail-' + project.id">

    <div class="featured-image-wrapper" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + project.featureImage) + ')'}" ></div>

    <div class="project-detail-content-container content-container">
      <div class="title fade-up-item">
        <h1>{{project.title}}</h1>
      </div>

      <div class="description fade-up-item">
        <p>{{project.description}}</p>
        <p v-if="project.reachout === true">Please reach out to learn more about the project and my role.</p>
      </div>

      <div v-if="project.link" class="link-container">
        <a :href="project.link" target="_blank" class="fade-up-item main-link">VIEW THE SITE</a>
      </div>

      <div v-if="project.tags" class="tags-container">
        <div class="tag fade-up-item" v-for="(tag, index) in project.tags" v-bind:key="index">{{tag}}</div>
      </div>

      <div v-if="project.images" class="images-container">
        <div class="image-wrapper" v-for="(image, index) in project.images" :key="index">
          <img class="image" :src="require('@/assets/images/projects/' + project.id + '/' + image)">
        </div>
      </div>
    </div>

    <div class="project-detail-navigation">
      <div class="navigation-item-wrapper previous" v-on:click="openProject('previous')">
        <div class="project-detail-background"></div>
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + prevProject.featureImage) + ')'}"></div>
        <h2 class="navigation-title">Previous</h2>
      </div>
      <div class="navigation-item-wrapper next" v-on:click="openProject('next')">
        <div class="project-detail-background"></div>
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + nextProject.featureImage) + ')'}"></div>
        <h2 class="navigation-title">Next</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from 'gsap';

export default {
  name: "ProjectDetail",
  computed: { // updates data
    project () {
      return this.$store.state.projects[this.$store.state.acitveProject]
    },
    prevProject () {
      return this.$store.state.projects[this.$store.state.prevProject]
    },
    nextProject () {
      return this.$store.state.projects[this.$store.state.nextProject]
    }
  },
  beforeCreate() {
    // before dom elements and injections have been created
    window.scrollTo(0, 0);

    // check if url matches active project
    // if no match then update active project index
    // TOOD: this needs to be redirect to 404 if it doesn't match any project
    if (this.$store.state.projects[this.$store.state.acitveProject].id !== this.$route.params.projectId) {
      this.$store.state.projects.forEach((el, i) => {
        if (el.id === this.$route.params.projectId) {
          this.$store.commit('updateActiveProject', i); // use mutation to update state
        }
      });
    }
  },
  created() {
    // global vars to be used later
    this.tl = null;
    this.windowH = window.innerHeight;
    this.windowW = window.innerWidth;
    this.images = document.querySelectorAll('.image-wrapper');
  },
  beforeUpdate() {
    // all styles that have changed need to be reset here
    TweenMax.set('.fade-up-item', {opacity: 0, y: '20px'}); // ran when index gets updated (next and prev buttons)
    TweenMax.set('.project-detail-content-container', {opacity: 1});
    TweenMax.set('.image-wrapper', {opacity: 0, y: '20px'});

    document.querySelectorAll('.navigation-image').forEach(e => {e.classList.remove('active')});
  },
  updated() {
    // ran when index (or global state) gets updated (next and previous buttons)
    this.images = document.querySelectorAll('.image-wrapper');

    // tweens to be updated
    TweenMax.staggerTo('.fade-up-item', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2);
    TweenMax.staggerTo('.image-wrapper', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2);
  },
  mounted() {
    TweenMax.staggerTo('.fade-up-item', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2);
    TweenMax.staggerTo('.image-wrapper', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2);
  },
  methods: {
    openProject(direction, ev) {
      // TODO: use index as function argument instead of direction
      // grab all animating objects
      const backgrounds = document.querySelectorAll('.project-detail-background');
      let index = direction === 'previous' ? this.$store.state.prevProject : this.$store.state.nextProject; // update new active index
      let image = document.querySelector('.' + direction + ' .navigation-image');
      let title = document.querySelector('.' + direction + ' .navigation-title');
      let rect = image.getBoundingClientRect();
      let oppositeImage = direction === 'previous' ? document.querySelectorAll('.next .navigation-image') : document.querySelectorAll('.previous .navigation-image');
      let oppositeTitle = direction === 'previous' ? document.querySelectorAll('.next .navigation-title') : document.querySelectorAll('.previous .navigation-title');
      let resetItems = [image, title, oppositeImage, oppositeTitle, document.querySelector('.featured-image-wrapper'), backgrounds];

      // disable scrolling
      document.querySelector('body').classList.add('disable-scrolling', 'opening-project');
      image.classList.add('active');

      this.tl = new TimelineMax({onComplete:() => {
        this.$store.commit('updateActiveProject', index); // update the state - active project
        window.scrollTo(0, 0); // making sure we go to top of document
        this.$router.push('/projects/' + this.$store.state.projects[index].id).catch(err => {}); // changes the url
        TweenMax.set(resetItems, {clearProps:"all"}); // resets all item styles
        document.querySelector('body').classList.remove('disable-scrolling', 'opening-project'); // enables scrolling
      }});

      // create and play animation on click
      this.tl.to('.project-detail-content-container', .5, {opacity: 0})
             .to('.featured-image-wrapper', .5, {opacity: 0}, '-=.5')
             .to(oppositeImage, .5, {opacity: 0, y: 20}, '-=0.5')
             .to(oppositeTitle, .5, {opacity: 0, y: 20}, '-=0.4')
             .to(title, .3, {opacity: 0}, '-=0.5')
             .to(backgrounds, .7, {opacity: 0, scale: .2, ease: Expo.easeInOut}, '-=0.5')
             .to(image, 1, {
              x: -(rect.left),
              y: -(rect.top),
              rotation: 0,
              width: window.innerWidth + 1,
              height: '400px',
              ease: Expo.easeInOut
             }, '-=0.5');
    }
  }
};
</script>

<style lang="scss" scoped>
.project-detail-content-container {
  margin: 100px auto 200px;
  padding: 0 60px;
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: $bp-s) {
    margin: 60px auto;
    padding: 0 20px;
  }

  .main-link, .tag {
    color: $gray-dark;
    font-family: $font-medium;
    text-transform: uppercase;
    font-family: $font-medium;
    letter-spacing: 3.5px;
    font-size: 11px;
    display: inline-block;

    @media screen and (max-width: $bp-s) {
      font-size: 10px;
    }
  }

  .main-link {
    padding: 11px 13px;
    background-color: #fff;
    position: relative;
    transition: .5s color;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scaleX(0);
      transition: .4s transform cubic-bezier(0.165, 0.84, 0.44, 1);
      background-color: #000;
      z-index: -1;
    }

    &:hover {
      color: #fff;
      transition: .5s color;

      &:before {
        transform: scaleX(1);
        transition: .4s transform cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }
  }

  .tags-container {
    margin-top: 40px;
  }

  .tag {
    background: #e0e0e0;
    border-radius: 20px;
    padding: 12px 14px 10px 16px;
    margin: 0 15px 15px 0;
  }
}

.featured-image-wrapper {
  width: 100%;
  height: $imageH;
  background-size: cover;
  background-position: center;
}

.title {
  max-width: 80%;
  font-family: $font-medium;
  text-transform: uppercase;

  @media screen and (max-width: $bp-s) {
    max-width: 100%;
  }

  h1 {
    font-size: 65px;
    margin: 0 0 22px;
    color: $gray-dark;
    line-height: 1;
    font-family: $font-light;
    font-weight: lighter;
    line-height: 1.2;

    @media screen and (max-width: $bp-s) {
      font-size: 50px;
    }
  }
}

.description {
  max-width: 700px;
  margin-bottom: 60px;

  p {
    font-size: 18px;
    line-height: 2;

    @media screen and (max-width: $bp-s) {
      font-size: 16px;
    }
  }
}

.images-container {
  margin-top: 160px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: $bp-s) {
    margin-top: 80px;
  }
}

.image-wrapper {
  width: 100%;
  margin: 0 auto;
  margin: 0 0 140px;

  @media screen and (max-width: $bp-s) {
    margin-bottom: 30px;
  }

  .image {
    display: block;
    width: 100%;
  }
}

.fade-up-item, .image-wrapper {
  opacity: 0;
  transform: translateY(20px);
}

.project-detail-navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  color: $gray-medium;
  margin: 0 auto 60px;
  width: calc(100% - 120px);
  max-width: 1400px;

  @media screen and (max-width: $bp-s) {
    margin-bottom: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    display: block;
  }

  .navigation-item-wrapper {
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    height: 230px;

    @media screen and (max-width: $bp-s) {
      padding: 0;
      height: 120px;
      margin-bottom: 20px;
    }

    &:hover {
      .navigation-image {
        &:not(.active) {
          opacity: 1;
          transition: opacity .3s;
        }
      }
    }

    .project-detail-background {
      background-color: $gray-medium;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .navigation-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    opacity: 0;

    &.active {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .navigation-title {
    font-family: $font-light;
    font-weight: lighter;
    font-size: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    position: relative;
    font-style: italic;
    transition: transform .3s;
    display: inline-block;
    color: #fff;

    @media screen and (max-width: $bp-s) {
      font-size: 40px;
    }
  }
}
</style>