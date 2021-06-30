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
}

export default new ReservetionsApiService();