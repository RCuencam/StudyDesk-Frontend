import http from "@/services/http.common";

class StudentsApiService{
    getId(id){
        return http.get(`/students/${id}`)
    }
}

export default new StudentsApiService;