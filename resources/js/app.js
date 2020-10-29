import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "../assets/views/App";
import Home from "../assets/views/Home"
import About from "../assets/views/About"

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
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
