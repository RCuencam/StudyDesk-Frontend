import axios from 'axios'

class ZoomApiService {
    http = null
    apiKey = 'c09f94467a264b1a9aff4cb7c808c88b'

    constructor() {
        this.http = axios.create({
            baseURL: 'https://api.zoom.us/v2/users',
            headers: {
                'User-Agent': 'Zoom-Jwt-Request',
                'content-type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjVBX25XaU9CUkZ1eTVJM2x0VTcwT1EiLCJleHAiOjE2MjU3MzY2NzgsImlhdCI6MTYyNTEzMTg3N30.UOPW3TJciHdMa-YdNTRc9jLuRrTQ_zPSHd5BJpk9TiM'
            }
        })
    }

    getTest() {
        // return this.http.get("/users/me")
        return "https://zoom.us/j/1100000"
    }
}

export default new ZoomApiService()

