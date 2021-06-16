import http from "@/services/http.common";

class TutorsApiService{
    getAll(){
        return http.get('/tutors');
    }
    get(id){
        return http.get(`/tutors/${id}`)
    }
}

export default  new TutorsApiService();