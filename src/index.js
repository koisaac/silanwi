import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lab from "./pages/Lab"

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Navigation from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <h1 className='App'>실안위 홈페이지 </h1>
      <Navigation/> 
      <Routes>
        <Route path = "/" element ={<App/>}></Route>
        <Route path='/lab/:lab_name' element = {<Lab/>}></Route>
        <Route path='/lab/bac' element = {<App/>}></Route>
        <Route path = '*' element = {<App/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
