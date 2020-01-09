<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="main-view-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main-view-wrapper {
  overflow: hidden;
}
</style>