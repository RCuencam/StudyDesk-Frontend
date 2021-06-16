import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Documents from "@/views/Documents";

Vue.use(VueRouter)

const routes=[
    {path:'/', component:Home},
    {path:'/documents', component: Documents},
    {
        path: '/studyMaterials/new',
        name: 'add-studyMaterial',
        component: () => import('../components/add-study-material')
    }
]

export default routes;