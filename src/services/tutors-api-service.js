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

    postTutor(careerId,data){
        return http.post(`/careers/${careerId}/tutors`,data,{'token': `${data.password}`})
    }

    getSchedules(tutorId){
        return http.get(`/tutors/${tutorId}/schedules`)
    }
}

export default  new TutorsApiService();