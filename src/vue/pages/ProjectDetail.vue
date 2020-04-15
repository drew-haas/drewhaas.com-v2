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
                <a :href="project.link" target="_blank" class="fade-up-item btn-box btn-link">VIEW THE SITE</a>
            </div>

            <div v-if="project.tags" class="tags-container">
                <div class="btn-round fade-up-item" v-for="(tag, index) in project.tags" v-bind:key="index">{{tag}}</div>
            </div>

            <!-- Loop through Sections -->
            <div v-if="project.sections" class="sections-container">
                <div class="section" v-for="(section, index) in project.sections" :key="index" :class="section.section">
                    <div class="images-container">
                        <div class="image-wrapper" v-for="(image, index) in section.images" :key="index">
                        <!-- <div class="image-wrapper" v-for="(image, index) in section.images" :key="index" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + project.id + '/' + image) + ')'}"> -->
                            <img class="image" :src="require('@/assets/images/projects/' + project.id + '/' + image)">
                        </div>
                    </div>

                    <div v-if="section.caption" class="caption">
                        <p>{{section.caption}}</p>
                    </div>
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
  name: 'ProjectDetail',
  computed: { // updates data
    project () {
      return this.$store.state.posts.allPosts[this.$store.state.posts.acitveProject]
    },
    prevProject () {
      return this.$store.state.posts.allPosts[this.$store.state.posts.prevProject]
    },
    nextProject () {
      return this.$store.state.posts.allPosts[this.$store.state.posts.nextProject]
    }
  },
  beforeCreate() {
    // before dom elements and injections have been created
    window.scrollTo(0, 0);

    // check if url matches active project
    // if no match then update active project index
    // TODO: this needs to be redirect to 404 if it doesn't match any project
    if (this.$store.state.posts.allPosts[this.$store.state.posts.acitveProject].id !== this.$route.params.projectId) {
      this.$store.state.posts.allPosts.forEach((el, i) => {
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
    openProject(direction) {
      // TODO: use index as function argument instead of direction
      // grab all animating objects
      const backgrounds = document.querySelectorAll('.project-detail-background');
      let index = direction === 'previous' ? this.$store.state.posts.prevProject : this.$store.state.posts.nextProject; // update new active index
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
        this.$router.push('/projects/' + this.$store.state.posts.allPosts[index].id).catch(err => {}); // changes the url
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