import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

instance.interceptors.response.use(
  (response) => (response.data ? response.data : response.status),
  (error) => Promise.reject(error),
)

export default instance
