import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import main from './components/main.vue';
import card from './components/card';
import success from './components/success';
import history from './components/history.vue';


const routes = [
    {path: '/', component: main,redirect:'/pay',name:'main', children:[
        { path:'pay',component: card, name:'pay' },
        { path: 'history',component: history, name:'history'},
        { path:'success',component: success, name:'success',beforeEnter: (to,from,next) =>{
            if(from.path != '/pay' ){
                next('/pay');
            }else{
                next();
            }
        }}

    ]},
    
];



export default new VueRouter({
    mode:'history',
    routes
})