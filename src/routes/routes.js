
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
    {path:'/search/tutors/:id', component:TutorInformation}
]

export default routes;