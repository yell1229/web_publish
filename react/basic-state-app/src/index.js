import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppAirbnb from './components/airbnb/AppAirbnb.jsx';
// import Avatar from './components/avatar/Avatar.jsx';
// import AppCounter from './components/counter/AppCounter.jsx';
// import AppBestSeller from './components/yes24/AppBestSeller.jsx';
// import AppCounter from './components/yes242/AppCounter.jsx';
// import AppShopping from './components/shopping/AppShopping.jsx';
// import AppOlive from './components/olive/AppOlive.jsx';
// import AppCount from './components/count2/AppCount.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppAladin2 from './components/aladin2/AppAladin2.jsx';
// import AppForm from './components/form/AppForm.jsx';
import AppBookStore from './components/bookstore/AppBookStore.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBookStore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
