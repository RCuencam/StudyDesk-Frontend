import http from './http.common';

class StudyMaterialsApiService{

    getAll() {
        return http.get('/studyMaterials');
    }
    get(id) {
        return http.get(`/studyMaterials/${id}`);
    }

    create(data) {
        return http.post("/studyMaterials", data);
    }

    update(id, data) {
        return http.put(`/studyMaterials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/studyMaterials/${id}`);
    }

    findByTitle(title) {
        return http.get(`/studyMaterials?title=${title}`);
    }
}
export default new StudyMaterialsApiService();