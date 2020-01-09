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