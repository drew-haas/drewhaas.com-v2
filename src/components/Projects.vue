<template>
  <div class="project-container">
    <project-thumbnail
    v-for="(project, index) in projects"
    :index="index"
    :key="project.id"
    :project="project">
    </project-thumbnail>
  </div>
</template>

<script>
import ProjectThumbnail from './ProjectThumbnail.vue'

export default {
  name: 'Projects',
  components: {
    'project-thumbnail': ProjectThumbnail
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-container {
    width: 100%;
    height: 100%;
    padding: 200px 5% 100px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;

    @media screen and (max-width: $bp-m) {
      display: block;
    }
  }
</style>