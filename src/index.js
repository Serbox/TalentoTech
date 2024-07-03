import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bd from './components/BD/bd.jsx';
import AsistenciaPage from './pages/AsistenciaPage/AsistenciaPage.jsx';
import UsersPage from './pages/Userpage/UsersPage.jsx';
import CalificacionPage from './pages/CalificacionPage/CalificacionPage.jsx';  

import Login from './components/Login/Login';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />
  },
  {
    path: '/users',
    element: <UsersPage />
  }, {
    path: '/asistencia',
    element: <AsistenciaPage />
  }, {
    path: '/calificacion',
    element: <CalificacionPage/>
  }
  ,
  {
    path: '/bd',
    element: <Bd/>
  },
  {
    path: '/login',
    element: <Login />
  },


])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
