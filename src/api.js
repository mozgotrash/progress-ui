import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' 
      ?  'http://194.87.93.188/' //'http://localhost:8080' 
      : '/', // Для production
  });

  export default api;