import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://127.0.0.1:9001',
  baseURL: 'http://server.guoezhan.h-fish.store',
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    console.log('response', response)
    if(response.status == 202) return Promise.reject(response.data)
    const res = response.data
      return res
  },
  error => {
    return Promise.reject(error.data)
  }
)

export default service
