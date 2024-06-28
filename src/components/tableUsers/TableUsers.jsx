import React from 'react';
import DataTable from 'react-data-table-component';
import './TableUsers.css';
// import Editar from '../forms/Editar.jsx';
import Modal from '../forms/formModal.jsx';
import EditarUser from '../forms/ManageUsers/EditarUser.jsx';
import RegisterUser from '../forms/ManageUsers/RegisterUser.jsx';
import { Link } from 'react-router-dom';
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
        <Modal Form={<EditarUser/>} ButonTitle={'editar'} btnClass={'btn btn-danger'}/>
        <button onClick={() => {
          Swal.fire({
            title: '¿Estás seguro de eliminar este usuario?',
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
      <div className="container-table-users">
      <h1 className='title-admi-users'>Administración de Usuarios</h1>
      <div className="flex justify-evenly align-middle mt-4 mb-4">
      <div className='flex'>
      <Modal Form={<RegisterUser/>} ButonTitle={'Registrar'} btnClass={'btn-add-users self-center'}/>
      </div>
      <div className='flex'>
      <button className='bg-red-500 w-[150px] h-[40px] rounded-[10px] text-white font-bold self-center'>
        <Link to='/'>Regresar</Link>
        </button>
      </div>
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
