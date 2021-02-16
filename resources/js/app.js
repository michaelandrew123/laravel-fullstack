require('./bootstrap');


window.Vue = require('vue')
//import Vue from 'vue'
import mainapp from './components/mainapp'
import router from './router'


// Vue.component('mainapp', require('./components/mainapp').default)

const app = new Vue({
    el: "#app", 
    components: {mainapp},
    router
})
 