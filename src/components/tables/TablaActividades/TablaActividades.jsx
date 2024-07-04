import React from 'react';
import DataTable from 'react-data-table-component';

import './TablaActividades.css';
import Modal from '../../forms/formModal.jsx';
import EditarActividad from '../../forms/ManageActividades/EditarActividades.jsx';
import Swal from "sweetalert2";



const users = [
  { name: 'REPASO HTML Y CSS', descripcion:"Realize un login usando css para manipular los estilos de los componentes"},
  { name: 'APRENDIENDO REACT', descripcion:"Realize un hola mundo por medio de la interfaz de react"},
  { name: 'USANDO JAVASCRIPT', descripcion:"Realiz auna funcion que use While y do While"},
  { name: 'REPASO BALSAMIC', descripcion:"Maquetado de paginas spotify"}
];

const columns = [
  { name: 'Nombre Actividad', selector: row => row.name, sortable: true },
  { name: 'Descripcion Actividad', selector: row => row.descripcion, sortable: true },
  {
    name: 'Acciones',    
    cell: row => (
      <>
        <Modal Form={<EditarActividad/>} ButonTitle={'📝'} btnClass={'btn btn-transparent'}/>
        <button onClick={() => {
          Swal.fire({
            title: '¿Estás seguro de eliminar estas notas?',
            showDenyButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Nota eliminada', '', 'success')
            } 
          })
        
        }}>🗑️</button>
      </>
    ),
  },
];

const TableAsis = () => {
  return (
    <DataTable
      columns={columns}
      data={users}
      pagination
    />
  );
}

export default TableAsis;
