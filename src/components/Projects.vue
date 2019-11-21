<template>
  <div class="project-container">
    <ProjectThumbnail
    v-for="(project, index) in this.$store.state.projects"
    :index="index"
    :key="project.classSuffix"
    :project="project">
    </ProjectThumbnail>
  </div>
</template>

<script>
import ProjectThumbnail from './ProjectThumbnail.vue'

export default {
  name: 'Projects',
  components: {
    'ProjectThumbnail': ProjectThumbnail
  }
}
</script>

<style lang="scss" scoped>
  .project-container {
    width: 100%;
    height: 100%;
    padding: 200px 5%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;

    @media screen and (max-width: $bp-m) {
      display: block;
    }
  }
</style>