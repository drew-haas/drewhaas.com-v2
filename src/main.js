import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { mapState } from 'vuex'
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
    projects: [
      {
        title: "GitHub Universe",
        description: "I was fortunate enough to attend the GitHub Universe conference in November of 2019. I learned a lot about the new features in GitHub and how to apply those to production level projects. I also learned about some cool new tooling systems such as Zeit, Percy.io, Tailwind CSS and many more. Here are some snapshots I got of the conference:",
        id: "github",
        featureImage: "github/featured.jpg",
        images: [
          'github-1.jpg',
          'github-2.jpg',
          'github-3.jpg'
        ]
      },
      {
        title: "Apple Product Launch 2019",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        id: "apple-fall-2019",
        link: "https://apple.com/watch",
        linkText: "apple.com/watch",
        featureImage: "image-1.jpg"
      },
      {
        title: "The Laughing Cow",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        id: "laughingcow",
        link: "https://www.thelaughingcow.com/",
        linkText: "thelaughingcow.com",
        featureImage: "image-2.jpg"
      },
      {
        title: "Design Central",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        id: "designcentral",
        link: "https://www.designcentral.com/",
        linkText: "designcentral.com",
        featureImage: "image-3.jpg"
      },
      {
        title: "Tribue Equine Nutrition",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        id: "tribute",
        link: "https://tributeequinenutrition.com/",
        linkText: "tributeequinenutrition.com",
        featureImage: "image-4.jpg"
      }
    ]
  },
  mutations: {}
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