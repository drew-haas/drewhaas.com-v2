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
      <div class="navigation-item-wrapper previous" v-on:click="openProject('prev')">
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + prevProject.featureImage) + ')'}">
          <h2 class="nav-title">Previous</h2>
        </div>
      </div>
      <div class="navigation-item-wrapper next" v-on:click="openProject('next')">
        <div class="navigation-image" :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + nextProject.featureImage) + ')'}">
          <h2 class="nav-title">Next</h2>
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
  beforeCreate() {
    window.scrollTo(0, 0);
    console.log('before create');

    // check if url matches active project
    // if no match then update active project index
    // TOOD: this needs to be redirect to 404 if it doesn't match any project
    if (this.$store.state.projects[this.$store.state.acitveProject].id !== this.$route.params.projectId) {
      this.$store.state.projects.forEach((el, i) => {
        if (el.id === this.$route.params.projectId) {
          this.$store.commit('updateActiveProject', i); // use mutation to track state
        }
      });
    }
  },
  created() {
    console.log('created');
  },
  beforeUpdate() {
    console.log('before update');
    TweenMax.set('.fade-up-item', {opacity: 0, y: '20px'}); // ran when index gets updated (next and prev buttons)
  },
  updated() {
    console.log('updated');
    TweenMax.staggerTo('.fade-up-item', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2); // ran when index gets updated (next and prev buttons)
  },
  beforeMount() {
    console.log('before mount');
    TweenMax.set('.fade-up-item', {opacity: 0, y: '20px'});
  },
  mounted() {
    console.log('mounted');
    TweenMax.staggerTo('.fade-up-item', 1, {delay: .1, opacity: 1, y: 0, ease: Expo.easeOut}, .2);
  },
  methods: {
    openProject(direction) { // TODO: use index as function argument instead
      let index = direction === 'prev' ? this.$store.state.prevProject : this.$store.state.nextProject; // update new Acti index

      this.$store.commit('updateActiveProject', index); // update active project
      window.scrollTo(0, 0);
      this.$router.push('/projects/' + this.$store.state.projects[index].id).catch(err => {}); // changes the url
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
    font-size: 10px;
    display: inline-block;
  }

  .main-link {
    padding: 11px 13px;
    background-color: #fff;
  }

  .tags-container {
    margin-top: 70px;
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
    font-size: 70px;
    margin: 0 0 22px;
    color: $gray-dark;
    line-height: 1;
    font-family: $font-light;
    font-weight: lighter;
    line-height: 1.2;
  }
}

.description {
  max-width: 500px;
  margin-bottom: 60px;

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

    @media screen and (max-width: $bp-s) {
      padding: 0;
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