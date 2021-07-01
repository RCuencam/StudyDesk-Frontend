import http from "@/services/http.common";

class TutorsApiService{
    getAll(){
        return http.get('/tutors');
    }
    get(id){
        return http.get(`/tutors/${id}`)
    }
    getTutorByCareerId(careerId) {
        return http.get(`/careers/${careerId}/tutors`)
    }
}

export default  new TutorsApiService();