import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res.data
    } else {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message))
    }
  },
  error => {
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default request

// 博客 API
export const blogApi = {
  list: (params) => request.get('/blog/page', { params }),
  detail: (id) => request.get(`/blog/${id}`),
  save: (data) => request.post('/blog', data),
  update: (data) => request.put('/blog', data),
  delete: (id) => request.delete(`/blog/${id}`),
  like: (id) => request.post(`/blog/${id}/like`)
}

// 分类 API
export const categoryApi = {
  list: () => request.get('/category/list'),
  save: (data) => request.post('/category', data),
  update: (data) => request.put('/category', data),
  delete: (id) => request.delete(`/category/${id}`)
}

// 标签 API
export const tagApi = {
  list: () => request.get('/tag/list'),
  save: (data) => request.post('/tag', data),
  update: (data) => request.put('/tag', data),
  delete: (id) => request.delete(`/tag/${id}`)
}

// 评论 API
export const commentApi = {
  listByBlog: (blogId) => request.get(`/comment/blog/${blogId}`),
  list: (params) => request.get('/comment/page', { params }),
  save: (data) => request.post('/comment', data),
  delete: (id) => request.delete(`/comment/${id}`)
}

// 登录 API
export const loginApi = {
  login: (data) => request.post('/auth/login', data)
}
