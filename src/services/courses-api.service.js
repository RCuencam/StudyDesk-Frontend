import http from './http.common';

class CoursesApiService{
    getAll(careerId) {
        return http.get(`/career/${careerId}/courses`);
    }
}

export default new CoursesApiService();