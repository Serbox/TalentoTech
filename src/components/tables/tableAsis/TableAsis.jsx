import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './TableAsis.css';
import CrearSesion from '../../forms/fromsSesion/CrearSesion';
import Editar from '../../forms/Editar';
import Modal from '../../Modal/modal';
import EditarSesion from '../../forms/fromsSesion/EditarSesion';



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
        <button onClick={() => alert('Reenviar')}>Reenviar</button>
        <button onClick={() => alert('Editar')}>✏️</button>
        <button onClick={() => alert('Eliminar')}>🗑️</button>
      </>
    ),
  },
];

const TableAsis = () => {
  return (
    <div className="container">
      <h1 className='mt-[80px]'>Administración de Sesiones</h1>
      <button className="add-user-btn" >
        Crear Sesión
      </button>
      {/* <Modal Title={"Crear"} Form={<CrearSesion/>}/>  */}
      {/* <Modal Title={"Editar"} Form={<EditarSesion/>}></Modal> */}
      <button>Editar</button>
      <DataTable
        title="Todas las aplicaciones"
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
}

export default TableAsis;
