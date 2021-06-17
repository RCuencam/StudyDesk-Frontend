
import TutorsDescription from "@/views/tutors-description";
import TutorsCourses from "@/views/tutors-courses";
import TutorProfile from "@/views/tutors-profile";

import Home from "@/views/home";
import Documents from "@/views/documents-search";
import Search from "@/views/search";
import DocumentInformation from "@/views/document-information";
import TutorInformation from "@/views/tutor-information";
import Tutors from "@/views/tutors-search";

const routes=[
    {path:'/', component:Home},
    {path:'/search',component: Search},
    {path:'/search/documents', component: Documents},
    {path:'/search/documents/:id', component: DocumentInformation},
    {path:'/search/tutors', component:Tutors},
    {path:'/search/tutors/:id', component:TutorInformation},
    {path:'/documents', component: Documents},
    {path:'/tutorsdescription',component: TutorsDescription},
    {path:'/tutorscourses',component: TutorsCourses},
    {path:'/tutorprofile',component:TutorProfile},
    {path:'/documents', component: Documents},
    {
        path: '/studyMaterials/new',
        name: 'add-studyMaterial',
        component: () => import('../components/add-study-material')
    }
]

export default routes;