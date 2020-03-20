<template>
    <div class="home-container">
        <div class="hero-container">
            <HeroThree></HeroThree>

            <div class="sliding-text" aria-hidden="true">
                <span>DrewHaas DrewHaas DrewHaas DrewHaas DrewHaas DrewHaas</span>
            </div>

            <div class="hero-copy-container">
                <h1 class="hero-text visually-hidden">Drew Haas</h1>
                <p class="hero-text">Front End Developer</p>
                <p class="hero-text">Columbus, OH - San Francisco, CA</p>
                <p class="hero-text">1992 - Present</p>
            </div>

            <div class="logo-abstract">
                <img :src="require('@/assets/images/logo-abstract.svg')" alt="Abstract Logo Shapes">
            </div>

            <div class="posts-text">
                <p>Posts Below</p>
            </div>

            <div class="g-line"></div>
        </div>

        <!-- Include Projects -->
        <Projects></Projects>

    </div>
</template>

<script>
import HeroThree from '../components/HeroThree';
import Projects from '../components/Projects.vue';
import { TweenMax, TimelineMax, Expo } from 'gsap';

export default {
    name: 'Home',
    components: {
        HeroThree,
        Projects,
    },

    beforeCreate() {
        // Make sure the page starts at the top
        window.scrollTo(0, 0);
    },

    mounted() {
        // Add Event Listeners
        window.addEventListener('scroll', this._handleScroll);

        // Initialize Home Page
        this._initHome();
    },

    methods: {
        /*
        * Initialize Home
        */
        _initHome() {
        },

        /*
        * Handle Scroll Animations
        */
        _handleScroll(event) {
        }
    }
};
</script>