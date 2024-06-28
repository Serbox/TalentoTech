import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AsistenciaPage,
  Bootcamp,
  Hackathon,
  JobConnection,
  Marketplace,
  PQR,
  Usuario,
  UsersPage
} from './pages';

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
  }
  ,
  {
    path: '/usuario',
    element: <Usuario />
  }
  ,
  {
    path: '/bootcamp',
    element: <Bootcamp />
  }
  ,
  {
    path: '/pqr',
    element: <PQR />
  }
  ,
  {
    path: '/hackatones',
    element: <Hackathon/>
  }
  ,
  {
    path: '/jobconnections',
    element: <JobConnection />
  }
  ,
  {
    path: '/marketplace',
    element: <Marketplace />
  }
  ,
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
