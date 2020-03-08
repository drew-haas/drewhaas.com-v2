<template>
    <div class="home-container">
        <!-- Include Meta Balls THREE.js -->
        <!-- <HeroThree></HeroThree> -->

        <div class="hero-container">
            <div class="hero-copy-container">
                <h1 id="hero-title">Hello</h1>
                <p class="hero-subtitle">My name's Drew and I'm a Web Developer with a focus on design and animation. Feel free to reach out and talk shop or shoot the shit. Currently Employed by <a href="https://www.criticalmass.com/" target="_blank">Critical Mass</a> in Sunnyvale, California.</p>
            </div>

            <div class="flying-drew-container">
                <!-- Include SVG -->
                <FlyingIllustration></FlyingIllustration>

                <div class="scroll-image">
                    <img :src="require('@/assets/images/home/img-drew-flying.png')" alt="Drew flying through the website"/>
                </div>
            </div>
        </div>

        <!-- Include Projects -->
        <Projects></Projects>

    </div>
</template>

<script>
import HeroThree from "../components/HeroThree.vue";
import Projects from "../components/Projects.vue";
import FlyingIllustration from '../components/FlyingIllustration.vue';
import { TweenMax, TimelineMax, Expo } from "gsap";

export default {
    name: "Home",
    components: {
        Projects,
        HeroThree,
        FlyingIllustration
    },

    beforeCreate() {
        // Make sure the page starts at the top
        window.scrollTo(0, 0);
    },

    mounted() {
        // Add Event Listeners
        window.addEventListener("scroll", this._handleScroll);

        // Global Page Variables
        this.rotationEl = document.querySelector('.scroll-image');
        this.illustrationTl = new TimelineMax();

        // Initialize Home Page
        this._initHome();
    },

    destroyed() {
        window.removeEventListener("scroll", this._handleScroll);
    },

    methods: {
        /*
        * Initialize Home
        */
        _initHome() {
            // set h1 to individual chars and animate
            if (document.getElementById('hero-title')) {
                let title = document.querySelector('h1');
                title.innerHTML = this._wrapString(title.innerHTML).join('');

                var tl = new TimelineMax();
                tl.staggerTo('.letter', 0.7, { delay: 0.2, opacity: 1, y: '0', ease: Expo.easeOut }, 0.04)
                    .to('.hero-subtitle', 0.7, { opacity: 1, y: '0', ease: Expo.easeOut }, '-=0.6');
            }
        },

        /*
        * Wrap String characters into individual spans
        */
        _wrapString(string) {
            let newString = [];
            string = string.split('');
            string.forEach(element => newString.push('<span class="letter">' + element + '</span>'));

            return newString;
        },

        /*
        * Handle Scroll Animations
        */
        _handleScroll(event) {
            let scrollTop = event.target.scrollingElement.scrollTop;
            let itemRotation = scrollTop * 0.2;
            let opacity = 1 - itemRotation / 100;

            TweenMax.to(this.rotationEl, 2, {
                x: itemRotation * 1.75 + "px",
                y: itemRotation * 1.5 + "px",
                opacity: opacity,
                rotation: itemRotation,
                ease: Expo.easeOut
            });
        }
    }
};
</script>