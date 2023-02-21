import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './Context/UserContext/UserContext';
import ServicesContext from './Context/ServicesContext/ServicesContext';
import 'react-toastify/dist/ReactToastify.css';
import OrderContext from './Context/OrderContext/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContext>
    <ServicesContext>
      <OrderContext>
        <App />
      </OrderContext>
    </ServicesContext>
  </UserContext>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
