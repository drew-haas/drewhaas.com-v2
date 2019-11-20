<template>
  <div class="home-container">
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from "./Projects.vue";

export default {
  name: "Home",
  components: {
    Projects
  }
  // computed: {
  //   username() {
  //     // We will see what `params` is shortly
  //     return this.$route.params.username;
  //   }
  // },
  // methods: {
  //   goBack() {
  //     window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
  //   }
  // }
};
</script>