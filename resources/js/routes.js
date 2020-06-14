import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';
import Teste from '@/js/components/Teste';



const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/teste',
        name: 'teste',
        component: Teste
    }
];

const router = new VueRouter
({
    mode: 'history',
    routes
});

Vue.use(VueRouter);
export default router;