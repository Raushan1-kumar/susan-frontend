import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user.context';
import Navbar from './Screen/Navbar';
import Footer from './Screen/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Navbar/>
    <App />
    <Footer/>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();