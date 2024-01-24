import axios from 'axios';


const ins = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export default ins;