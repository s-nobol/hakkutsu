import Vue from 'vue'
import Router from 'vue-router'


// // view
import index from './pages/Index.vue'
import about from './pages/About.vue'
import create from './pages/Create.vue'
import search from './pages/Search.vue'
import login from './pages/Login.vue'
import profile from './pages/Profile.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: index  },
        { path: '/about', component: about },
        { path: '/create', component: create },
        { path: '/login', component: login },
        { path: '/search', component: search },
        
        { path: '/users/:id', component: profile }
    ],
    
    base: process.env.BASE_URL,  // これ
    mode: 'history', // ★ 追加
})