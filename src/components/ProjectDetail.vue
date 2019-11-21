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

      <div v-if="project.images" class="images-container">
        <div class="image-wrapper fade-up-item" v-for="(image, index) in project.images" :key="index">
          <img class="image" :src="require('@/assets/images/projects/' + project.id + '/' + image)">
        </div>
      </div>

    </div>

    <div class="project-detail-navigation">
      <div class="navigation-item-wrapper previous"></div>
      <div class="navigation-item-wrapper next"></div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo, Power1, Elastic, Back } from "gsap";

export default {
  name: "ProjectDetail",
  data() {
    return {
      project: this.$store.state.projects[this.$store.state.acitveProject],
      nextProject: this.$store.state.projects[this.$store.state.activeProject + 1],
    }
  },
  beforeCreate: function() {
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
    TweenMax.staggerTo(document.querySelectorAll('.fade-up-item'), 1, {opacity: 1, y: 0, ease: Expo.easeOut}, .1);
  }
};
</script>

<style lang="scss" scoped>

.project-detail-container {
  width: 100%;
  position: absolute;
  overflow: auto;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

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
</style>