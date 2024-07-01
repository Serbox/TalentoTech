import React from 'react';
import DataTable from 'react-data-table-component';
import './TableUsers.css';
// import Editar from '../forms/Editar.jsx';
import Modal from '../forms/formModal.jsx';
import EditarUser from '../forms/ManageUsers/EditarUser.jsx';
import Swal from "sweetalert2";

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
        <Modal Form={<EditarUser/>} ButonTitle={'📝'} btnClass={'btn btn-transparent'}/>
        <button onClick={() => {
          Swal.fire({
            title: '¿Estás seguro de eliminar esta sesión?',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Usuario eliminado', '', 'success')
            } 
          })
        
        }}>🗑️</button>
      </>
    ),
  },
];

const TableUsers = () => {
  return (      

      <DataTable
        title=""
        columns={columns}
        data={users}
        pagination
      />

  );
};

export default TableUsers;
