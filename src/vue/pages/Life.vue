<template>
  <div class="basic-page-container life-container">

    <div class="hero-container">
      <h1>Life</h1>
    </div>

    <div class="project-container">
      <project-thumbnail
        v-for="(project, index) in lifePosts"
        :index="index"
        :key="project.id"
        :project="project">
        </project-thumbnail>
    </div>

  </div>
</template>

<script>
import ProjectThumbnail from '../components/ProjectThumbnail.vue'

export default {
  name: 'Life',
  components: {
    'project-thumbnail': ProjectThumbnail
  },
  computed: {
    lifePosts () {
      return this.$store.getters.lifePosts
    }
  },
  mounted() {
    this.$store.activeSet = 'life';
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
.basic-page-container {
  margin: 0 auto;
  padding: 0;
  max-width: none;
}

.hero-container {
  width: 100vw;
  height: 100vh;
}

h1 {
  text-transform: uppercase;
  font-size: 130px;
  font-family: $font-extra-light;
  display: inline-block;
  padding: 20px 100px;
  color: $gray-dark;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>