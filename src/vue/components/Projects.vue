<template>
    <div class="project-container">
        <project-thumbnail v-for="(project, index) in projects" :index="index" :key="project.id" :project="project"></project-thumbnail>
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
        // TODO: add functionality to grab TYPES of projects
        projects () {
            return this.$store.state.posts.allPosts
        }
    }
}
</script>