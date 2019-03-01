import {Article,DashBoar,Mine,Setting} from "./index"

const Routes=[
    {
        path:"/admin/dashBoar",
        component:DashBoar,
        title:"仪表盘",
        exact:false
    },
    {
        path:"/admin/article",
        component:Article,
        title:"文章",
        exact:false
    },
    {
        path:"/admin/setting",
        component:Setting,
        title:"设置",
        exact:false
    },
    {
        path:"/admin/mine",
        component:Mine,
        title:"个人中心",
        exact:false
    },
]

export {Routes}