import http from './http.common';

class TopicsApiService{
    getAll(courseId) {
        return http.get(`/courses/${courseId}/topics`);
    }
}

export default new TopicsApiService();