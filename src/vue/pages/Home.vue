<template>
    <div class="home-container">
        <div class="hero-container">
            <HeroThree/>

            <div class="sliding-text" aria-hidden="true">drewhaas drewhaas drewhaas drewhaas drewhaas drewhaas</div>

            <div class="hero-copy-container">
                <h1 class="hero-text visually-hidden">Drew Haas</h1>
                <p class="hero-text">Web Developer, Designer, Creative</p>
                <p class="hero-text">Columbus, OH - San Francisco, CA</p>
                <p class="hero-text">1992 - Present</p>
            </div>

            <div class="logo-abstract">
                <img :src="require('@/assets/images/logo-abstract.svg')" alt="Abstract Logo Shapes">
            </div>

            <div class="posts-text">
                <p>{{ filterText }} Posts Below</p>
            </div>

            <div class="g-line"></div>

            <div class="scroll-image">
                <img  :src="require('@/assets/images/home/img-drew-flying.png')" alt="Drew flying through the website">
            </div>
        </div>

        <div class="actions-container">
            <div class="filter filter-all active" v-on:click="updateCurrentPosts('all', $event)">All</div>
            <div class="filter filter-work" v-on:click="updateCurrentPosts('work', $event)">Work</div>
            <div class="filter filter-life" v-on:click="updateCurrentPosts('life', $event)">Life</div>
        </div>

        <!-- Include Projects -->
        <Projects></Projects>

    </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from 'gsap';
import Projects from '../components/Projects.vue';
import HeroThree from '../components/HeroThree';

export default {
    name: 'Home',
    components: {
        Projects,
        HeroThree
    },
    data: function () {
        return {
            filterText: 'All'
        }
    },

    beforeCreate() {
        // Make sure the page starts at the top
        window.scrollTo(0, 0);
    },

    mounted() {
        // Define dom elements
        this.filters = document.querySelectorAll('.filter');
        this.updateCurrentPosts('all');
    },

    methods: {
        updateCurrentPosts(postsFilter, e) {
            // update filter classes
            this.filters.forEach(el => {el.classList.remove('active')});

            if (e != undefined) {
                e.target.classList.add('active');
                this.filterText = e.target.innerHTML;
            } else {
                // default to all
                let allFilter = document.querySelector('.filter-all');
                allFilter.classList.add('active');
            }

            // run mutation
            this.$store.commit('updateCurrentPosts', postsFilter);
        }
    }
};
</script>