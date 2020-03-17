<template>
    <div class="sliding-text-container">
        <div class="text-wrapper" v-for="(item, index) in textItems" :key="index">
            <span class="first">{{item}}</span>
            <span class="second">{{item}}</span>
        </div>
        <div class="hover-bg"></div>
    </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo, Power2, Power4 } from "gsap";

export default  {
    name: 'SlidingText',
    components: {},
    props: [],
    mounted() {
        this.scrollPosCache = 0;
        this.ticking = false;
        this.windowSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.textEls = document.querySelectorAll('.text-wrapper');
        this.textFirsts = document.querySelectorAll('.text-wrapper .first');
        this.textWidths = [];

        this._initSlidingText();
    },
    data() {
        return {
            textItems: [
                "I wish that I knew what i know now when i was younger I wish that I knew what i know now when i was younger ",
                "Gosto muito de te ver leãozinho Caminhando sob o sol Gosto muito de você leãozinho ",
                "O we dont give a damn for the whole state of Michigan The whole state of Michigan the whole state of Michigan We dont give a damn for the whole state of Michigan were from Ohio ",
                "The mind tricks the body tricks The mind tricks the body tricks The mind tricks the body tricks The body tricks the mind ",
                "Welcome to my playground. I'm a web developer with a focus on design and animation. ",
                "Born and raised in Columbus Ohio currently living in San Francisco and Working in Sunnyvale. ",
                "I wish that I knew what i know now when i was younger I wish that I knew what i know now when i was younger ",
                "Gosto muito de te ver leãozinho Caminhando sob o sol Gosto muito de você leãozinho ",
                "O we dont give a damn for the whole state of Michigan The whole state of Michigan the whole state of Michigan We dont give a damn for the whole state of Michigan were from Ohio ",
                "The mind tricks the body tricks The mind tricks the body tricks The mind tricks the body tricks The body tricks the mind ",
                "Welcome to my playground. I'm a web developer with a focus on design and animation. ",
                "Born and raised in Columbus Ohio currently living in San Francisco and Working in Sunnyvale. ",
            ]
        }
    },
    methods: {
        _initSlidingText() {

            // go through text items
            this.textFirsts.forEach((e) => {
                let r = e.getBoundingClientRect();
                this.textWidths.push(r.width);

                // mouseover event listener
                window.addEventListener('mouseenter', this._handleMouseEnter);
            });

            // call functions
            this._createTimelines();

            // Scroll Event Listener
            // with throttle
            window.addEventListener('scroll', () => {
                this.scrollPosCache = window.scrollY;

                if (!this.ticking) {
                    window.requestAnimationFrame(() => {
                        this._handleScroll();
                        this.ticking = false;
                    });

                    this.ticking = true;
                }
            });
        },

        _createTimelines() {
            // initial fade/slide in
            let tl = new TimelineMax();

            // move it the amount
            this.textEls.forEach((e, i) => {
                let tl = new TimelineMax({repeat: -1});
                tl.to(this.textEls[i], 40, {x: '-' + this.textWidths[i], ease: Power0.easeNone});
            })
            // set it back to 0 instantly
            // repeat

            // TweenMax.set('.text-wrapper', {opacity: 0});

            // tl.to('.text-wrapper', 3.5, {x: 0, ease: Power4.easeOut})
            //   .staggerTo('.text-wrapper', 1, {opacity: 1}, '0.08', '-=3.3');
            //   .to('.text-wrapper:nth-of-type(even)', 5, {x: '-100%'}, '-=2');
            //   .to('.text-wrapper:nth-of-type(odd)', slideFullTime, {x: '100%'}, '-=' + slideFullTime);
        },
        /*
        * Handle Scroll Animations
        */
        _handleScroll(event) {
            let percent = (this.scrollPosCache / this.windowSize.h) * 100;
            let inversePercent =  100 - percent;

            TweenMax.to('.text-wrapper', 1, {opacity: inversePercent / 100});
        },

        _handleMouseEnter(event) {
            console.log(event);
        },

        _handleResize(event) {
            this.windowSize.w = window.innerWidth;
            this.windowSize.h = window.innerHeight;
        }
    },
    computed: {

    }
}
</script>