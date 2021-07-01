export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        console.log(`Bearer ${user.token}`);
        return { 'Authorization': `Bearer ${user.token}`};
    } else {
        console.log('No token available');
        return {};
    }
}


// example of use in a service:

/*
import authHeader from "@/services/auth-header";

const API_URL = 'https://localhost:5001/api/users';

class UserService {
    getAll() {
        console.log(authHeader());
        return axios.get(API_URL, { headers: authHeader() }); // colocando el token en el header
    }
}

export default new UserService();
* */