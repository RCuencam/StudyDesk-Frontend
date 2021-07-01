import http from './http.common';

class ReservetionsApiService{
    getAll() {
        return http.get('/reservations');
    }
    /*get(id) {
        return http.get(`/institutes/${id}`);
    }

    create(data) {
        return http.post("/institutes", data);
    }

    update(id, data) {
        return http.put(`/institutes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/institutes/${id}`);
    }*/
    getReservationByTutorId(tutorId){
        return http.get(`/tutors/${tutorId}/students`);
    }

    getReservationByStudentId(studentId){
        return http.get(`/students/${studentId}/tutors`)
    }

    updateReservation(id,studentId,tutorId,data){
        console.log('dta',data);
        return http.put(`students/${studentId}/tutors/${tutorId}?id=${id}`,data)
    }
    
}

export default new ReservetionsApiService();