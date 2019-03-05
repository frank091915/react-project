import {Article,DashBoar,Mine,Setting,Edit} from "./index"

const Routes=[
    {
        path:"/admin/dashBoar",
        component:DashBoar,
        title:"仪表盘",
        exact:false,
        isNav:true,
        iconType:"dashboard"
    },
    {
        path:"/admin/article",
        component:Article,
        title:"文章",
        exact:true,
        isNav:true,
        iconType:"form"
    }
    ,
    {
        path:"/admin/article/edit/:id",
        component:Edit,
        exact:false,
        isNav:false,
    },
    {
        path:"/admin/setting",
        component:Setting,
        title:"设置",
        exact:false,
        isNav:true,
        iconType:"setting",
    },
    {
        path:"/admin/mine",
        component:Mine,
        title:"个人中心",
        exact:false,
        isNav:true,
        iconType:"user"
    },
]

export {Routes}