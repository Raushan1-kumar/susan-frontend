import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'https://susan-backend.onrender.com'
})

export default axiosInstance;