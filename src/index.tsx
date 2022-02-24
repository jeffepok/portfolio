import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ApiUtils, ModelApiUtils} from "./modules/http/api/rest";
// import {Connection} from "./modules/http/request";
// import {UserMDL} from "./modules/about_me/models/user";
// import {GenericRespDataC} from "./modules/http/interfaces/genericResponse";
//
// let connection = new Connection("http://localhost:8000",
//     {}
// )

// new ApiUtils().callApi(connection, "/api/v1/user/login", "POST").then(data =>{
//     console.log(data)
// })

// new ModelApiUtils<any, any>(new UserMDL(), null).callApi(connection,
//     '/api/v1/about-me/projects/', 'GET')
//     .then((data: GenericRespDataC<UserMDL>) => {
//         console.log(data.rawBody)
//     })

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
