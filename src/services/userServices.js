import axios from './customizeAxios'

const userServices = {
  register: (data) => axios.post('/register', data),
  login: (data) => axios.post('/login', data),
}

export default userServices
