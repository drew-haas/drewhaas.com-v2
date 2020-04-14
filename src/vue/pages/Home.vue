<template>
    <div class="home-container">
        <div class="hero-container">
            <div class="sliding-text" aria-hidden="true">
                <span>DrewHaas <span class="main">DrewHaas</span> DrewHaas DrewHaas DrewHaas DrewHaas</span>
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

            <div class="scroll-image">
                <img  :src="require('@/assets/images/home/img-drew-flying.png')" alt="Drew flying through the website">
            </div>
        </div>

        <!-- Include Projects -->
        <Projects></Projects>

    </div>
</template>

<script>
import Projects from '../components/Projects.vue';
import { TweenMax, TimelineMax, Expo } from 'gsap';

export default {
    name: 'Home',
    components: {
        Projects,
    },

    beforeCreate() {
        // Make sure the page starts at the top
        window.scrollTo(0, 0);
    },

    mounted() {
        // Define dom elements
        this.rotationEl = document.querySelector('.scroll-image');
        this.dividerLine = document.querySelector('.g-line');
        this.slidingText = document.querySelector('.sliding-text');

        let r = this.dividerLine.getBoundingClientRect();
        this.scrollCatch = r.top;

        // Add Event Listeners
        window.addEventListener('scroll', this._handleScroll);
        window.addEventListener('resize', this._handleResize);

        // Initialize Home Page
        // this._initHome();
    },

    methods: {
        /*
        * Handle Scroll Animations
        */
        _handleScroll(event) {
            if (window.scrollY >= this.scrollCatch) {
                return
            } else {
                let scrollTop = event.target.scrollingElement.scrollTop;
                let itemRotation = scrollTop * 0.2;
                let opacity = 1 - itemRotation / 100;
                let slideX = scrollTop;

                TweenMax.to(this.rotationEl, 2, {
                    x: itemRotation * 1.75 + "px",
                    y: itemRotation * 1.5 + "px",
                    opacity: opacity,
                    rotation: itemRotation,
                    ease: Expo.easeOut
                });

                TweenMax.to(this.slidingText, 2, {
                    x: -scrollTop ,
                    opacity: opacity,
                    ease: Expo.easeOut
                })
            }
        },

        /*
        * Handle Resize
        */
        _handleResize(event) {
            let r = this.dividerLine.getBoundingClientRect();
            this.scrollCatch = r.top;
        }
    }
};
</script>

<style lang="scss">
.scroll-image {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
}
</style>