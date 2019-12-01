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

      <div v-if="project.link" class="link fade-up-item">
        <a :href="project.link" target="_blank">{{project.linkText}}</a>
      </div>

      <div v-if="project.images" class="images-container fade-up-item">
        <div class="image-wrapper" v-for="(image, index) in project.images" :key="index">
          <img class="image" :src="require('@/assets/images/projects/' + project.id + '/' + image)">
        </div>
      </div>

    </div>

    <div class="project-detail-navigation">
      <div class="navigation-item-wrapper previous fade-up-item" v-on:click="openProject('prev')">
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + prevProject.featureImage) + ')'}">
          <h2 class="nav-title">Previous</h2>
          <!-- <h2 class="nav-title">{{prevProject.title}}</h2> -->
        </div>
      </div>
      <div class="navigation-item-wrapper next fade-up-item" v-on:click="openProject('next')">
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + nextProject.featureImage) + ')'}">
          <h2 class="nav-title">Next</h2>
          <!-- <h2 class="nav-title">{{nextProject.title}}</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from "gsap";

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
  beforeCreate: function() {
    console.log('before create');
    // check if url matches active project
    // if no match then update active project index
    if (this.$store.state.projects[this.$store.state.acitveProject].id !== this.$route.params.projectId) {
      this.$store.state.projects.forEach((el, i) => {
        if (el.id === this.$route.params.projectId) {
          this.$store.commit('updateActiveProject', i); // use mutation to track state
        }
      });
    }
  },
  mounted: function() {
    console.log('mounted');
    TweenMax.staggerTo(document.querySelectorAll('.fade-up-item'), 1, {opacity: 1, y: 0, ease: Expo.easeOut}, .1);
  },
  methods: {
    openProject(direction) { // TODO: use index as function argument instead
      let index = direction === 'prev' ? this.$store.state.prevProject : this.$store.state.nextProject;
      /*
        * Route to clicked Project Item!
          */
        // this.$store.commit('updateActiveProject', index); // use mutation to track state
        // this.$router.push('/projects/' + this.$store.state.projects[this.$store.state.acitveProject].id).catch(err => {});

      // // TODO: fix animation
      TweenMax.to(document.querySelector('.featured-image-wrapper'), 1, {opacity: 0});
      TweenMax.staggerTo(document.querySelectorAll('.fade-up-item'), 1, {opacity: 0, y: 50, ease: Expo.easeInOut}, '-.2', () => {
        /*
        * Route to clicked Project Item!
          */
        this.$store.commit('updateActiveProject', index); // use mutation to track state
        this.$router.push('/projects/' + this.$store.state.projects[this.$store.state.acitveProject].id).catch(err => {});

        window.scrollTo(0, 0);

        TweenMax.set(document.querySelectorAll('.fade-up-item'), {opacity: 1, y: 0});
        TweenMax.set(document.querySelector('.featured-image-wrapper'), {opacity: 1});
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.project-detail-content-container {
  margin: 100px auto 200px;
  max-width: 900px;
  width: 90%;
  box-sizing: border-box;

  @media screen and (max-width: $bp-s) {
    margin: 60px auto;
  }

  @media screen and (max-width: $bp-xs) {
    width: 100%;
  }

  a {
    color: $gray-dark;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
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
  font-family: 'Abel';
  text-transform: uppercase;

  @media screen and (max-width: $bp-s) {
    max-width: 100%;
  }

  h1 {
    font-size: 70px;
    margin: 0 0 22px;
    mix-blend-mode: screen;
    color: $gray-dark;
    line-height: 1;
  }
}

.description {
  max-width: 500px;
  margin-bottom: 40px;

  p {
    font-size: 18px;
    line-height: 1.7;
  }
}

.images-container {
  margin-top: 160px;

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

.fade-up-item {
  opacity: 0;
  transform: translateY(20px);
}

.project-detail-navigation {
  display: flex;
  color: #fff;

  .navigation-item-wrapper {
    width: 50%;
    cursor: pointer;
    padding: 20px 40px 40px;

    &:hover {
      .navigation-image {
        filter:grayscale(0%);
        transition: all .3s;
      }
    }
  }

  .nav-title {
    font-family: 'editionregular';
    font-size: 88px;
    font-weight: lighter;
    margin: 0;
    text-align: center;
  }

  .navigation-image {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 11px;
    transition: all .3s;
  }
}
</style>