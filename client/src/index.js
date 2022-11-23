import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HttpClient } from './network/http';
import { AuthService } from './service/authservice';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
export const authService = new AuthService(httpClient);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
