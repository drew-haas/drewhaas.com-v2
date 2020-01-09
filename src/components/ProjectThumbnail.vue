<template>
  <div
    class="project-item"
    :class="'project-item-' + project.id"
    @mouseenter.self="hoverAnimation('mouseenter')"
    @mousemove.self="parallaxAnimation"
    @mouseleave.self="hoverAnimation('mouseleave')"
    v-on:click="openProject(index, project.id, 'hintSound')"
  >
    <div class="project-bg"></div>

    <div class="project-item_title">
      <h2>{{project.title}}</h2>
    </div>

    <div class="image-wrapper">
      <div
        class="project-item_image"
        :style="{backgroundImage: 'url(' + require('@/assets/images/projects/' + project.featureImage) + ')'}"
      ></div>
    </div>

    <div class="project-item_number">
      <span v-if="index < 9" class="number">0</span>
      <span class="number">{{index + 1}}</span>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo, Power1, Elastic, Back } from 'gsap';
import VueRouter from 'vue-router';
import ProjectDetail from '../pages/ProjectDetail';

export default {
  name: 'Project',
  props: ['project', 'index'],
  created() {
    /*
     * Global Vars and functions for this Component
     */
    this.body = document.body;
    this.docEl = document.documentElement;
    this.isAnimating = false; // used for opening project

    // parallax 'tilt' configuration
    this.allowtilt = true;
    this.tilt = {};
    this.tiltconfig = {
      title: { translation: { x: [-8, 8], y: [4, -4] } },
      number: { translation: { x: [-5, 5], y: [-10, 10] } },
      img: { translation: { x: [-30, 30], y: [-20, 20] } }
    };

    // reference of all visible project items
    this.projectItems = [];

    // The content items
    this.contents = [];

    // Window sizes.
    this.winsize = {};
    this.calcWinsize = () =>
      (this.winsize = { width: window.innerWidth, height: window.innerHeight });
    this.calcWinsize();
    window.addEventListener("resize", this.calcWinsize);

    /*
     * Helper Functions:
     * - mouse position
     * - reset tilt config
     */
    this.getMousePos = e => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;

      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      return { x: posx, y: posy };
    };

    this.resetTilt = () => {
      for (let key in this.tilt) {
        TweenMax.to(this.tilt[key], 2, { ease: Expo.easeOut, x: 0, y: 0 });
      }
    };

    // Based on https://stackoverflow.com/q/25481717
    this.distance = (p1, p2) => Math.hypot(p2.x - p1.x, p2.y - p1.y);
    this.sortByDist = (refPoint, itemsArray) => {
      let distancePairs = [];
      let output = [];

      for (let i in itemsArray) {
        const rect = itemsArray[i].getBoundingClientRect();
        distancePairs.push([
          this.distance(refPoint, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          }),
          i
        ]);
      }

      distancePairs.sort((a, b) => a[0] - b[0]);

      for (let p in distancePairs) {
        const pair = distancePairs[p];
        output.push(itemsArray[pair[1]]);
      }

      return output;
    };
    // Calculates the offsetTop or offsetLeft of an element relative to the viewport
    // (not counting with any transforms the element might have)
    this.getOffset = (elem, axis) => {
      let offset = 0;
      const type = axis === "top" ? "offsetTop" : "offsetLeft";
      do {
        if (!isNaN(elem[type])) {
          offset += elem[type];
        }
      } while ((elem = elem.offsetParent));

      return offset;
    };
    // get size and position of element
    this.getSizePosition = (el, scrolls = true) => {
      const scrollTop =
        window.pageYOffset || this.docEl.scrollTop || this.body.scrollTop;
      const scrollLeft =
        window.pageXOffset || this.docEl.scrollLeft || this.body.scrollLeft;
      return {
        width: el.offsetWidth,
        height: el.offsetHeight,
        left: scrolls
          ? this.getOffset(el, "left") - scrollLeft
          : this.getOffset(el, "left"),
        top: scrolls
          ? this.getOffset(el, "top") - scrollTop
          : this.getOffset(el, "top")
      };
    };
  },

  mounted: function() {
    this.projectItems = document.querySelectorAll(".project-item");
  },

  methods: {
    /*
     * Show or Hide all projet Items
     */
    showAllItems(exclude, withAnimation = true) {
      this.toggleAllItems(exclude, withAnimation, true);
    },
    hideAllItems(exclude, withAnimation = true) {
      this.toggleAllItems(exclude, withAnimation, false);
    },
    toggleAllItems(exclude, withAnimation, show) {
      if (!withAnimation) {
        this.projectItems
          .filter(item => item !== exclude)
          .forEach((item, pos) => item[show ? "show" : "hide"](withAnimation));
      } else {
        const refrect = exclude.getBoundingClientRect();
        const refPoint = {
          x: refrect.left + refrect.width / 2,
          y: refrect.top + refrect.height / 2
        };
        let itemsArray = Array.from(this.projectItems);
        let staggerDelay = 0;
        this.sortByDist(
          refPoint,
          itemsArray.filter(item => item !== exclude)
        ).forEach(function(item) {
          setTimeout(function() {
            let itemBg = item.querySelector(".project-bg");
            let itemImg = item.querySelector(".project-item_image");
            let itemTitle = item.querySelector(".project-item_title");
            let itemNumbers = item.querySelector(".project-item_number");
            TweenMax.to(itemBg, 0.5, {
              scale: 0.5,
              opacity: 0,
              delay: 0.2,
              ease: Expo.easeInOut
            });
            TweenMax.to(itemImg, 0.5, {
              scale: 0.5,
              opacity: 0,
              ease: Expo.easeInOut
            });
            TweenMax.to(itemTitle, 0.5, {
              y: "15px",
              opacity: 0,
              delay: 0.1,
              ease: Expo.easeInOut
            });
            TweenMax.to(itemNumbers, 0.5, {
              y: "15px",
              opacity: 0,
              delay: 0.1,
              ease: Expo.easeInOut
            });
          }, staggerDelay);
          staggerDelay += 200;
        });
      }
    },

    /*
     * Open Clicked Project
     */
    openProject(index, projectId, soundId) {

      if (this.isAnimating) return;

      document.getElementById(soundId).play();

      document.querySelector('body').classList.add('disable-scrolling', 'opening-project');
      event.target.classList.add('active');

      this.allowtilt = false;
      this.isAnimating = true;

      // Get the current scroll position.
      this.scrollPos = window.scrollY;

      // set up reusable vars
      let itemBg = event.target.querySelector(".project-bg");
      let itemTitle = event.target.querySelector(".project-item_title");
      let itemNumber = event.target.querySelector(".project-item_number");
      let itemImg = event.target.querySelector(".project-item_image");

      // hide all items on page except clicked project
      this.hideAllItems(event.target);

      // hide text of current item
      TweenMax.to(itemTitle, 0.4, {
        y: "20px",
        delay: 0.2,
        opacity: 0,
        ease: Expo.easeInOut
      });
      TweenMax.to(itemNumber, 0.4, {
        y: "20px",
        delay: 0.2,
        opacity: 0,
        ease: Expo.easeInOut
      });

      // Get the "grid_item-bg" width and height and set it explicitly,
      // also set its top and left respective to the page.
      const itemDim = this.getSizePosition(event.target);
      const itemBgDim = this.getSizePosition(itemBg);
      const d = Math.hypot(this.winsize.width, this.winsize.height);

      TweenMax.to(itemBg, 1.2, {
        ease: Expo.easeInOut,
        delay: 0.2,
        backgroundColor: "#e8e8e8",
        scale: 1,
        x: -itemBgDim.left,
        y: -itemBgDim.top,
        width: this.winsize.width,
        height: this.winsize.height,
        rotation: -1 * event.target.angle * 2
      });

      const imgRect = event.target
        .querySelector(".image-wrapper")
        .getBoundingClientRect();

      TweenMax.to(itemImg, 1.2, {
        ease: Expo.easeInOut,
        delay: 0.55,
        width: this.winsize.width, // TODO: make this more responsive
        height: "400px", // TODO: make this more responsive
        x: -imgRect.left,
        y: -imgRect.top,
        rotation: 0,
        scale: 1,
        onComplete: () => {
          /*
          * Route to clicked Project Item!
           */
          document.querySelector('body').classList.remove('disable-scrolling', 'opening-project');
          this.$store.commit('updateActiveProject', index); // use mutation to track state
          this.$router.push({ path: '/projects/' + projectId});
        }
      });
    },

    /*
     * One Time animation on hover (mouseenter and mouseout)
     */
    hoverAnimation(type) {
      if (!this.allowtilt) return;

      // dom elements
      let projectItem = event.target;
      let projecTitle = projectItem.querySelector(".project-item_title");
      let projectBg = projectItem.querySelector(".project-bg");
      let projectNumbers = projectItem.querySelectorAll(".number");

      // animate title and background
      TweenMax.to(projecTitle, 1, {
        scale: type === "mouseenter" ? 1.15 : 1,
        ease: Expo.easeOut
      });
      TweenMax.to(projectBg, 1, {
        scale: type === "mouseenter" ? 1.1 : 1,
        ease: Expo.easeOut
      });

      // animate numbers
      TweenMax.staggerTo(
        projectNumbers,
        0.2,
        {
          ease: Power1.easeIn,
          y: type === "mouseenter" ? "-50%" : "50%",
          opacity: 0
        },
        "-0.1",
        () => {
          TweenMax.staggerTo(
            projectNumbers,
            type === "mouseenter" ? 0.6 : 1,
            {
              ease:
                type === "mouseenter"
                  ? Expo.easeOut
                  : Elastic.easeOut.config(1, 0.4),
              startAt: {
                y: type === "mouseenter" ? "70%" : "-70%",
                opacity: 0
              },
              y: "0%",
              opacity: 1
            },
            "-0.1"
          );
        }
      );

      // reset tilt
      if (type === "mouseleave") {
        this.resetTilt();
      }
    },

    /*
     * Parallax animation based on mouse movement
     */
    parallaxAnimation() {
      if (!this.allowtilt) return;

      // items to animate
      let projectItem = event.target;
      this.tilt.img = projectItem.querySelector(".project-item_image");
      this.tilt.title = projectItem.querySelector(".project-item_title");
      this.tilt.number = projectItem.querySelector(".project-item_number");

      // Get mouse position.
      const mousepos = this.getMousePos();

      const docScrolls = {
        left: this.body.scrollLeft + this.docEl.scrollLeft,
        top: this.body.scrollTop + this.docEl.scrollTop
      };
      const bounds = projectItem.getBoundingClientRect();
      // Mouse position relative to the main element (this.DOM.el).
      const relmousepos = {
        x: mousepos.x - bounds.left - docScrolls.left,
        y: mousepos.y - bounds.top - docScrolls.top
      };

      // Movement settings for the tilt elements.
      for (let key in this.tilt) {
        let t = this.tiltconfig[key].translation;
        // Animate each of the elements..
        TweenMax.to(this.tilt[key], 2, {
          ease: Expo.easeOut,
          x: ((t.x[1] - t.x[0]) / bounds.width) * relmousepos.x + t.x[0],
          y: ((t.y[1] - t.y[0]) / bounds.height) * relmousepos.y + t.y[0]
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-item {
  width: 90%;
  max-width: 670px;
  margin: 0 auto 170px;
  height: 50vh;
  max-height: 500px;
  position: relative;
  text-align: left;
  cursor: pointer;
  font-family: $font-book;

  body.opening-project & {
    pointer-events: none;
  }

  &.active {
    .image-wrapper {
      filter: grayscale(0%);
    }
  }

  @media screen and (max-width: $bp-s) {
    width: 75%;
    height: 300px;
    margin-bottom: 100px;
  }

  &:nth-child(even) {
    .project-item_image {
      transform: rotate(2deg);
    }
  }

  &:nth-child(odd) {
    .project-item_image {
      transform: rotate(-2deg);
    }
  }

  &:hover {
    .image-wrapper {
      filter: grayscale(0%);
      transition: filter 0.3s;
    }
  }

  &_title {
    position: absolute;
    top: 0;
    left: -37px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: $font-light;

    @media screen and (max-width: $bp-s) {
      left: -34px;
    }

    h2 {
      font-size: 20px;
      margin: 0;
      color: $gray-dark;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: bold;

      @media screen and (max-width: $bp-s) {
        font-size: 16px;
      }
    }
  }

  &_description {
    max-width: 430px;
  }

  .image-wrapper {
    width: 85%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: grayscale(100%);
    transition: filter 0.3s;
    pointer-events: none;

    .project-item_image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
    }
  }

  &_number {
    line-height: 1;
    font-size: 82px;
    font-family: $font-light;
    color: $gray-medium;
    position: absolute;
    bottom: -40px;
    right: -40px;

    .number {
      display: inline-block;
    }
  }
}

.project-bg {
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
  // position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>