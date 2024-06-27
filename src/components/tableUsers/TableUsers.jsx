import React from 'react';
import DataTable from 'react-data-table-component';
import './TableUsers.css';
import Editar from '../forms/Editar.jsx';
import Modal from '../Modal/modal';
import RegisterUser from '../forms/RegisterUser';

const users = [
  { name: 'Invitación pendiente', email: '', role: '', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Administrador', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Administrador', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Operador SAC', sites: 'Algunos sitios' }
];

const columns = [
    {
        name: '',    
        cell: row => (
          <>
            <div className='img-users-table'>
                <img src="" alt="" />
            </div>
          </>
        ),
      },
  { name: 'Nombre', selector: row => row.name, sortable: true },
  { name: 'Email', selector: row => row.email, sortable: true },
  { name: 'Rol', selector: row => row.role, sortable: true },
  { name: 'Promedio', selector: row => row.sites, sortable: true },
  {
    name: 'Acciones',    
    cell: row => (
      <>
        <button> 
         <Modal Title={"✏️"} Form={<Editar/>}/>
        </button>
        <button onClick={() => alert('Eliminar')}>🗑️</button>
      </>
    ),
  },
];

const TableUsers = () => {
  return (

      
      <div className="container-table-users">
      <h1 className='title-admi-users'>Administración de Usuarios</h1>
      <div className="btn-add-users">

       
      </div>
      <DataTable
        title="Usuarios del bootcamp"
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
};

export default TableUsers;
