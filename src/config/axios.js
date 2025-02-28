import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'http://localhost:2222'
})

export default axiosInstance;