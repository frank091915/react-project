import axios from "axios"

const ajax=axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/160659'
}
)
const getArticle=()=>{
    return ajax.post('/api/v1/articleList')
}

export default getArticle