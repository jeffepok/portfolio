import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApiUtils, ModelApiUtils} from "./modules/http/api/rest";
import {Connection} from "./modules/http/request";
import {UserMDL, PostMDL} from "./modules/about_me/models/user";
import {GenericRespDataC} from "./modules/http/interfaces/genericResponse";
import HttpConstants from './modules/http/constants';
//
let connection = new Connection("http://localhost:3000", {})

// new ApiUtils().callApi(connection, "/api/v1/user/login", "POST").then(data =>{
//     console.log(data)
// })

let post = new PostMDL()
post.author = 'Irene'
post.title = 'Love You'

new ModelApiUtils<PostMDL, any>(new PostMDL(), null).addObject(connection,
    {url: '/posts', data: post})
    .then((data) => {
        console.log(data)
    })

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
