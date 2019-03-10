import axios from "axios"

const ajax=axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/161222'
}
)

export const getArticleListBeTest = (params=6) => {
    return ajax.post('/api/v1/chartsOne/:monthParams', params)
  }

export const SignOut = (params) => {
    return ajax.post('api/v1/signOut', params)
  }
  export const login = (params) => {
    return ajax.post('api/v1/signIn', params)
  }
  export const checkToken = (params) => {
    return ajax.post('api/v1/tokenChecking', params)
  }