import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import 'es6-promise/auto'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    acitveProject: 0,
    prevProject: 0,
    nextProject: 0,
    projects: [
      {
        title: "GitHub Universe",
        description: "I was fortunate enough to attend the GitHub Universe conference in November of 2019. I learned a lot about the new features in GitHub and how to apply those to production level projects. I also learned about some cool new tooling systems such as Zeit, Percy.io, Tailwind CSS and many more. Here are some snapshots I got of the conference:",
        id: "github",
        work: true,
        featureImage: "github/featured.jpg",
        images: [
          'github-1.jpg',
          'github-2.jpg',
          'github-3.jpg'
        ],
        tags: [
          'work',
          'conference',
          'social'
        ]
      },
      {
        title: "Apple Product Launch 2019",
        description: "While (currently) employed by Critical Mass I work on site at Apple's Headquarters in Sunnyvale, CA, I was a developer on the Product Launch team for Apple Watch when we released the website for Series 5, Edition, and some other miscelaneous pages.",
        id: "apple-product-2019",
        reachout: true,
        work: true,
        link: "https://apple.com/watch",
        linkText: "apple.com/watch",
        featureImage: "apple-product-2019/featured.png",
        images: [
          'apple-1.png',
          'apple-2.png'
        ],
        tags: [
          'work',
        ]
      },
      {
        title: "Road Trip 2019",
        description: "Las Vegas - Zion National Park - Page, AZ - Monument Valley - Flagstaff, AZ",
        id: "road-trip-2019",
        featureImage: "road-trip-2019/featured.jpg"
      },
      {
        title: "The Laughing Cow",
        description: "My first taste of 3D animation... I got to create 3D animations for almost all of the products that The Laughing Cow cheese has to offer. Working closely with their product team and 3D artist I was able to create massive sprites that I could then animate based on javascript events. This was a fun one. However if I could do it now I would try to get the models into something like THREE.js. The 'gooey' nav was also a treat to animate.",
        id: "laughingcow",
        reachout: true,
        link: "https://www.thelaughingcow.com/",
        linkText: "thelaughingcow.com",
        featureImage: "laughingcow/featured.jpg"
      },
      {
        title: "Design Central",
        description: "I would say this is some of my cleanest development and animation on a website. I got to animate the geometrical pattern dispersed throughout the site. I also got to animate the large capabilities infographic which is almost all done in svg. This was also a time to fine tune some of my more used animations by writing some dynamic code to perform parallaxing text, fading and sliding.",
        id: "designcentral",
        link: "https://www.designcentral.com/",
        linkText: "designcentral.com",
        featureImage: "designcentral/featured.jpg",
        images: [
          'image-2.jpg'
        ]
      },
      {
        title: "Tribue Equine Nutrition",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        id: "tribute",
        reachout: true,
        link: "https://tributeequinenutrition.com/",
        linkText: "tributeequinenutrition.com",
        featureImage: "tribute/featured.jpg"
      }
    ]
  },
  getters: {},
  // plugins: [createPersistedState()],
  mutations: {
    updateActiveProject (state, index) {
      state.acitveProject = index;
      state.prevProject = index - 1 < 0 ? state.projects.length - 1 : index - 1; // loopable to end
      state.nextProject = index + 1 > state.projects.length - 1 ? 0 : index + 1; // loopable to beginning
    }
  }
})

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/projects/:projectId',
    component: ProjectDetail,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('%cThanks for visiting :)', 'color: #fff; background-color: #000; line-height: 1.7; padding: 5px 10px;')