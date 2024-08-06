import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { DataBinding } from './databinding/databinding';
// import { EventDemo } from './event-demo/EventDemo';
// import { Product } from './ClassComponent/Product';
// import { Product1 } from './ClassComponent/Product1';
// import { Product2 } from './Api-requests/Product2';
// import { SideBar } from './Api-requests/sidebar';
import { FakestoreIndex } from './fakestore/fakestore-index';
// import  $  from  "jquery";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakestoreIndex/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
