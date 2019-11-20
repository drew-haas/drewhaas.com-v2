<template>
  <div class="project-detail-container">
    <div
        class="image-wrapper"
        :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + project.image) + ')'}"
      ></div>

    <div class="content-container">
      <div class="title">
        <h1>{{project.title}}</h1>
      </div>
      <div class="description">{{project.description}}</div>
      <div class="slideshow"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectDetail",
  data() {
    return {
      project: this.$store.state.projects[this.$store.state.acitveProject]
    }
  },
  mounted: function() {
    console.log(this.$store.state.acitveProject);
  },
  created () {},
  watch: {},
  methods: {}
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

.image-wrapper {
  width: $imageW;
  height: $imageH;
  background-size: cover;
  background-position: center;
}
</style>