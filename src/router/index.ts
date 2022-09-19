import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';


const home = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Home/Dashboard.vue'),
        meta: {title: 'Dashboard'},
    }
]

const routes = [
    {
        path: "/",
        component: Home,
        redirect: {name: 'Dashboard'},
        meta: {title:"Home"},
        children: home
      },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;