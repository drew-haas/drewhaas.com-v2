import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './pages/Home.vue'
import Projects from './components/Projects.vue'
import ProjectDetail from './pages/ProjectDetail.vue'
import Credits from './pages/Credits.vue'
import Work from './pages/Work.vue'
import Life from './pages/Life.vue'
import 'es6-promise/auto'
// import createPersistedState from 'vuex-persistedstate'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeSet: 'all', // all, work, or life
    acitveProject: 0,
    prevProject: 2,
    nextProject: 1,
    projects: [
      {
        title: 'Lake Tahoe',
        description: 'I love me some Tahoe. Hike up the mountains in the summer and ski down them in the winter.',
        id: 'tahoe',
        featureImage: 'tahoe/featured.jpg',
        life: true,
        tags: [
          'life',
          'adventure',
          'snow',
          'hike'
        ],
        images: [
          'tahoe-paddleboarder.jpg',
          'tahoe-snow-trees.jpg'
        ]
      },
      {
        title: "GitHub Universe",
        description: "I attended the GitHub Universe conference in November of 2019. I learned a lot about the new features in GitHub and how to apply those to production level projects. I also learned about some cool new tooling systems such as Zeit, Percy.io, Tailwind CSS and many more.",
        id: "github",
        featureImage: "github/featured.jpg",
        work: true,
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
        description: "Very fortunate to work on custom animations and layouts for one of the largest websites in the world.",
        id: "apple-product-2019",
        reachout: true,
        work: true,
        link: "https://apple.com/watch",
        featureImage: "apple-product-2019/featured.png",
        images: [
          'apple-1.png',
          'apple-2.png'
        ],
        tags: [
          'website',
          'animation',
          'front end',
          'javascript'
        ]
      },
      {
        title: "Road Trip 2019",
        description: "An Epic road trip hitting some national parks in the wild west.",
        id: "road-trip-2019",
        featureImage: "road-trip-2019/featured.jpg",
        life: true,
        tags: [
          'road trip',
          'life',
          'mountains'
        ],
        images: [
          'road-trip-1.jpg',
          'road-trip-2.jpg',
          'road-trip-3.jpg'
        ]
      },
      {
        title: "The Laughing Cow",
        description: "New and old techniques used on this playful website for this well known dairy company. 3D animations using sprites for the product pages. Gooey SVG animation for the navigation.",
        id: "laughingcow",
        reachout: true,
        work: true,
        link: "https://www.thelaughingcow.com/",
        featureImage: "laughingcow/featured.jpg",
        tags: [
          'website',
          'animation',
          'front end',
          'drupal',
          '3D',
          'svg',
          'sprites',
          'javascript animations'
        ],
        images: [
          'image-home.jpg',
          'image-project-detail.jpg'
        ]
      },
      {
        title: "Design Central",
        description: "An Interactive website for a product design and engineering company. Created with Drupal and custom Javascript animations and solutions.",
        id: "designcentral",
        link: "https://www.designcentral.com/",
        featureImage: "designcentral/featured.jpg",
        work: true,
        reachout: true,
        images: [
          'image-home.jpg',
          'image-2.jpg',
          'image-capabilities.jpg'
        ],
        tags: [
          'website',
          'animation',
          'front end',
          'drupal',
          'javascript animations',
          'pattern animation'
        ]
      },
      {
        title: 'Yosemite',
        description: 'There\'s not much to say other than this place is magical. It\'s hard to take a bad photo in this National Park.',
        id: 'yosemite',
        life: true,
        featureImage: 'yosemite/featured.jpg',
        tags: [
          'life',
          'adventure',
          'mountains',
          'hikes'
        ],
        images: [
          'glacier-point-3.jpg',
          'tenaya-lake-1.jpg',
          'glacier-point-2.jpg',
          'clouds-rest-1.jpg',
          'tenaya-lake-2.jpg',
          'clouds-rest-2.jpg'
        ]
      },
      {
        title: "Tribue Equine Nutrition",
        description: "The coolest horse feed website you'll find. A lot of custom solutions went into this such as a product locator, a nutrition selector to determine which feed is right for your horse, and some custom animations.",
        id: "tribute",
        reachout: true,
        work: true,
        link: "https://tributeequinenutrition.com/",
        featureImage: "tribute/featured.jpg",
        tags: [
          'website',
          'animation',
          'front end',
          'nutrition selector',
          'product locator',
          'drupal',
          'google maps api'
        ],
        images: [
          'image-home.jpg',
          'image-nutrition.jpg'
        ]
      }
    ]
  },
  getters: {
    lifePosts: state => {
      return state.projects.filter(project => project.life);
    },
    workPosts: state => {
      return state.projects.filter(project => project.work);
    },
    lifePostCount: (state, getters) => {
      return getters.lifePosts.length;
    },
    workPostCount: (state, getters) => {
      return getters.workPosts.length;
    },
    getProjectsById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    }
  },
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
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/life',
    component: Life,
  },
  {
    path: '/credits',
    component: Credits,
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

console.log('%cThanks for visiting :)', 'color: #fff; background-color: #000; line-height: 1.7; padding: 5px 10px;');

