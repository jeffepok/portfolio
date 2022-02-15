import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApiUtils} from "./modules/http/api/rest";
import {Connection} from "./modules/http/request";


let connection = new Connection("http://localhost:8000",
    {
    'Authorization': 'Token f2f808d2c026a6c073dd91088b9a3f1925bdba1c'})

new ApiUtils().callApi(connection, "/api/v1/items/category/", "GET").then(data =>{
    console.log(data)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
