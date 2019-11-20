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
        title: "Apple",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        classSuffix: "apple",
        link: "https://apple.com",
        linkText: "apple.com",
        route: '/apple',
        image: "image-1.jpg"
      },
      {
        title: "The Laughing Cow",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        classSuffix: "laughingcow",
        link: "https://apple.com",
        linkText: "thelaughingcow.com",
        route: '/laughingcow',
        image: "image-2.jpg"
      },
      {
        title: "Design Central",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        classSuffix: "designcentral",
        link: "https://apple.com",
        linkText: "designcentral.com",
        route: '/designcentral',
        image: "image-3.jpg"
      },
      {
        title: "Tribue Equine Nutrition",
        description: "Copper mug synth letterpress heirloom. Bitters you probably haven't heard of them chia ethical. Hexagon hella next level swag.",
        classSuffix: "tribute",
        link: "https://apple.com",
        linkText: "tributeequinenutrition.com",
        route: '/tribute',
        image: "image-4.jpg"
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