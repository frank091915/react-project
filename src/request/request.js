import axios from "axios"

const ajax=axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/160659'
}
)

export const getArticleListBeTest = (params) => {
    return ajax.post('/api/v1/articleListBeTest', params)
  }
export const deleteArticleById = (id) => {
    return ajax.post(`/api/v1/article/delete/${id}`)
  }
export const getArticleById = (id) => {
    return ajax.post(`/api/v1/getArticle/${id}`)
  }
  export const login = (params) => {
    return ajax.post('/api/v1/login', params)
  }
