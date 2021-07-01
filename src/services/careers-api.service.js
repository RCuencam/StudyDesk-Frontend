import http from './http.common';

class CareersApiService{
    getAll(instituteId) {
        return http.get(`/institutes/${instituteId}/careers`);
    }
}

export default new CareersApiService();