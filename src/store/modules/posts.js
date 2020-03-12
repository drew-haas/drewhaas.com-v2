import posts from '@/api/posts.js';

// initial state
const state = {
    activeSet: 'all', // TODO: make this selectable from any category
    acitveProject: 0,
    prevProject: 2,
    nextProject: 1,
    allPosts: posts
}

// getters
const getters = {
    // TODO: return projects with tag that matches tag
    // getProjectsByTag: (state) => (tag) => {},

    getProjectsById: (state) => (id) => {
        return state.allPosts.find(project => project.id === id);
    }
}

// actions
// const actions = {}

// mutations
const mutations = {
    updateActiveProject (state, index) {
        state.acitveProject = index;
        state.prevProject = index - 1 < 0 ? state.allPosts.length - 1 : index - 1; // loopable to end
        state.nextProject = index + 1 > state.allPosts.length - 1 ? 0 : index + 1; // loopable to beginning
    }
}

// export everything
export default {
    // namespaced: true,
    state,
    getters,
    mutations
}