import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './TableAsis.css';
import CrearSesion from '../../forms/fromsSesion/CrearSesion';
import Modal from '../../forms/formModal.jsx';

import EditarSesion from '../../forms/fromsSesion/EditarSesion';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



const users = [
  { name: 'Invitación pendiente', email: '', fecha: '', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', fecha: '26/06/2024', sites: 'Sesion 45' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', fecha: '26/06/2024', sites: 'Sesion 30' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', fecha: '26/06/2024', sites: 'Sesion 35' }
];

const columns = [
  { name: 'Nombre', selector: row => row.name, sortable: true },
  { name: 'Email', selector: row => row.email, sortable: true },
  { name: 'Fecha', selector: row => row.fecha, sortable: true },
  { name: 'Sesion', selector: row => row.sites, sortable: true },
  {
    name: 'Acciones',    
    cell: row => (
      <>
        <Modal Form={<EditarSesion/>} ButonTitle={'editar'} btnClass={'btn btn-danger'}/>
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

const TableAsis = () => {
  return (
    <div className='flex justify-center align-middle'>
      <div className="container-table-users mt-[120px]">
    <h1 className='title-admi-users'>Administración de Usuarios</h1>
    <div className="flex justify-evenly align-middle mt-9 mb-4 ">
    <div className='flex'>
    <Modal Form={<CrearSesion/>} ButonTitle={'Registrar'} btnClass={'btn-add-users self-center'}/>
    </div>
    <div className='flex'>
    <button className='bg-red-500 w-[150px] h-[40px] rounded-[10px] text-white font-bold self-center'>
      <Link to='/'>Regresar</Link>
      </button>
    </div>
    </div>
    <DataTable
      title="Sesiones bootcamp"
      columns={columns}
      data={users}
      pagination
    />

  </div>
    </div>
  );
}

export default TableAsis;
