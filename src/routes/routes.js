import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Documents from "@/views/Documents";
import TutorsDescription from "@/views/tutors-description";
import TutorsCourses from "@/views/tutors-courses";

Vue.use(VueRouter)

const routes=[
    {path:'/', component:Home},
    {path:'/documents', component: Documents},
    {path:'/tutorsdescription',component: TutorsDescription},
    {path:'/tutorscourses',component: TutorsCourses}
]

export default routes;