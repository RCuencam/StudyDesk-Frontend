import http from "@/services/http.common";

class DocumentsApiService{
    getAll(){
        return http.get('/documents');
    }
    get(id){
        return http.get(`/documents/${id}`)
    }
}

export default new DocumentsApiService();