<template>
    <div class="home-container">
        <HeroThree/>

        <div class="hero-container">
            <div class="hero-copy-container">
                <h1 class="hero-title visually-hidden">Drew Haas personal website and portfolio.</h1>
                <p class="hero-copy"><span class="typography-title">Hello,</span>{{decoder(heroCopy)}}</p>
            </div>

            <div class="logo-abstract">
                <img :src="require('@/assets/images/logo-abstract.svg')" alt="Abstract Logo Shapes">
            </div>

            <div class="posts-text">
                <p class="typography-subtitle"><span>{{ filterText }}</span> Posts Below</p>
            </div>

            <div class="g-line"></div>

            <div class="scroll-image">
                <img :src="require('@/assets/images/home/img-drew-flying.png')" alt="Drew flying through the website">
            </div>
        </div>

        <div class="actions-container">
            <div class="btn-round filter filter-all active" v-on:click="updateCurrentPosts('all', $event)">All</div>
            <div class="btn-round filter filter-work" v-on:click="updateCurrentPosts('work', $event)">Work</div>
            <div class="btn-round filter filter-life" v-on:click="updateCurrentPosts('life', $event)">Life</div>
        </div>

        <!-- Include Projects -->
        <Projects></Projects>
    </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from 'gsap';
import Projects from '../components/Projects.vue';
import HeroThree from '../components/HeroThree';
import decoder from '../../helpers/decoder';

export default {
    name: 'Home',
    components: {
        Projects,
        HeroThree
    },
    data: function () {
        return {
            decoder,
            filterText: "All",
            heroCopy: "my name is Drew. I'm a web developer and digital creative currently living in San Francisco. This website is a playground to bolster my development skills and a chance to share my interests and&nbsp;projects."
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