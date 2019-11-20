<template>
  <div class="project-container">
    <Project
    v-for="(project, index) in this.$store.state.projects"
    :index="index"
    :key="project.classSuffix"
    :project="project">
    </Project>
  </div>
</template>

<script>
import Project from './Project.vue'

export default {
    name: 'Projects',
    components: {
      'Project': Project
    },
    data() {
      return {
        projects: [
          {
            title: "Apple",
            description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
            classSuffix: "apple",
            link: "https://apple.com",
            linkText: "apple.com",
            route: '/apple',
            image: "image-1.jpg"
          },
          {
            title: "The Laughing Cow",
            description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
            classSuffix: "laughingcow",
            link: "https://apple.com",
            linkText: "thelaughingcow.com",
            route: '/laughingcow',
            image: "image-2.jpg"
          },
          {
            title: "Design Central",
            description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
            classSuffix: "designcentral",
            link: "https://apple.com",
            linkText: "designcentral.com",
            route: '/designcentral',
            image: "image-3.jpg"
          },
          {
            title: "Tribue Equine Nutrition",
            description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
            classSuffix: "tribute",
            link: "https://apple.com",
            linkText: "tributeequinenutrition.com",
            route: '/tribute',
            image: "image-4.jpg"
          }
        ]
      }
    },
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
  }
</style>