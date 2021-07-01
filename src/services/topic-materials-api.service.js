import http from './http.common';

class TopicMaterialsApiService{
    getAll(topicId) {
        return http.get(`/topics/${topicId}/materials`);
    }
}

export default new TopicMaterialsApiService();