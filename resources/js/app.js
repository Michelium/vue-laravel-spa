import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "../assets/views/App.vue";
import Home from "../assets/views/Home.vue"
import About from "../assets/views/About.vue"
import UsersIndex from "../assets/views/UsersIndex.vue"
import UsersEdit from "../assets/views/UsersEdit.vue"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
