import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import auths from './auths';
import accounts from './accounts';


const home = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Home/Dashboard.vue'),
        meta: {title: 'Dashboard'},
    },
]

const search = [
    {
        path: '',
        name: 'Search-Home',
        component: () => import('../views/Search/SearchView.vue'),
        meta: {title: 'Nipate-search'},
    },
]

const routes = [
    {
        path: "/",
        component: Home,
        redirect: {name: 'Dashboard'},
        meta: {title:"Home"},
        children: home
    },
    {
        path: "/search",
        name: 'Search',
        component: () => import('../views/Search.vue'),
        meta: {title:"Nipate-Search"},
        children: search
    },
    {
        path: '/auth',
        name: 'Auths',
        redirect: {name: 'Login'},
        component: () => import('../views/Auth.vue'),
        children: auths,
    },
    {
        path: '/account',
        name: 'Account',
        redirect: {name: 'User'},
        component: () => import('../views/Account.vue'),
        children: accounts,
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;