import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterUser from './components/forms/RegisterUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './pages/Userpage/UsersPage';
import AsistenciaPage from './pages/AsistenciaPage/AsistenciaPage';
import Usuario from './pages/usuario';
import Bootcamp from './pages/bootcamp';
import PQR from './pages/pqr';
import Hackatones from './pages/hackathon';
import JobConnection from './pages/jobConnection';
import Marketplace from './pages/marketplace';

const router = createBrowserRouter([

  {path: '/',
    element: <App/>
  },
  {path: '/users',
    element: <UsersPage/>
  },{
    path: '/asistencia',
    element: <AsistenciaPage/>
  }
  ,
  {path: '/usuario',
    element: <Usuario/>
  }
  ,
  {path: '/bootcamp',
    element: <Bootcamp/>
  }
  ,
  {path: '/pqr',
    element: <PQR/>
  }
  ,
  {path: '/hackatones',
    element: <Hackatones/>
  }
  ,
  {path: '/jobconnections',
    element: <JobConnection/>
  }
  ,
  {path: '/marketplace',
    element: <Marketplace/>
  }


])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
