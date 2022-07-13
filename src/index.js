import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import axios from 'axios';


axios.interceptors.request.use(request=>{
    console.log(request.method);
    return request;
}
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

