<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="main-view-wrapper">
      <router-view></router-view>
    </div>

    <audio id="clickSound">
    <source :src="require('@/assets/sounds/mouse-clicks-1.mp3')" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>

    <audio id="hintSound">
      <source :src="require('@/assets/sounds/hint-sound.mp3')" type="audio/mpeg">
    </audio>
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