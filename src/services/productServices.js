import axios from './customizeAxios'

const productServices = {
  get: (id = '') => {
    id = id && `/${id}`
    return axios.get('products' + id)
  },
  post: (data) => axios.post('/products', data),
  put: ({ id, ...data }) => axios.put(`/products/${id}`, data),
  patch: ({ id, ...data }) => axios.patch(`/products/${id}`, data),
  delete: (id) => axios.delete(`/products/${id}`),
}

export default productServices
