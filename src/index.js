import React from 'react';
import ReactDOM from 'react-dom';


import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider} from "react-redux"


import store from "./store/store"
import  SupremeRoutesComponent from "./pages/supremeRoutesComponent"


import "./index.less"
ReactDOM.render(
    // 使所有组件都可以拿到store
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
           <SupremeRoutesComponent/>
        </LocaleProvider>
    </Provider>
    , document.getElementById('root')
    );

