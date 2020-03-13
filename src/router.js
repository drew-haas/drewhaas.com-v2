import Vue from 'vue';
import Router from 'vue-router';
import Home from './vue/pages/Home.vue'
import Projects from './vue/components/Projects.vue'
import ProjectDetail from './vue/pages/ProjectDetail.vue'
import Credits from './vue/pages/Credits.vue'

Vue.use(Router);

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
		path: '/credits',
		component: Credits,
	}
];

const router = new Router({
	mode: 'history',
	routes: routes
});

export default router