import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/firstPage'
import secondPage from './components/pages/secondPage'
const routes = [
    {
        path: '/my-new-page',
        component: firstPage 
    },
    {
        path: '/my-second-page',
        component: secondPage
    }
]

 

export default new Router({
    mode: 'history',
    routes
})