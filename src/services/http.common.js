
import axios from "axios"

const http=axios.create({
    baseURL:'http://localhost:37353/api',
    headers:{
        'Content-type':'application/json',
        
    }
})

export default http;

