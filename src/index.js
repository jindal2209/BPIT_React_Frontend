import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.baseURL = 'http://65.0.124.138:8000/api/';


const token = localStorage.getItem('token');


if (token){
	axios.defaults.headers.common['Authorization'] = 'Token ' + token;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
