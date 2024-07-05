import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import './TablaActividades.css';
import Modal from '../../forms/formModal.jsx';
import EditarActividad from '../../forms/ManageActividades/EditarActividades.jsx';
import Swal from "sweetalert2";
import { getActividad } from '../../../services/APIservices.js';


const columns = [
  { name: 'ID Actividad', selector: row => row.id_actividad, sortable: true },
  { name: 'Nombre Bootcamp', selector: row => row.nombre, sortable: true },
  { name: 'Nombre Actividad', selector: row => row.nombre_actividad, sortable: true },
  { name: 'Descripcion Actividad', selector: row => row.descripcion_actividad, sortable: true },
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
  const [actividad, setActividad] = useState([])
      useEffect(() => {
          getActividad()
          .then(res => {
            // Transform the data into an array of key-value pairs
            //*const transformedData = transformData(res); // Transform the data
            setActividad(res); // Flatten the transformed data
          })
          .catch(err => console.log(err));
      }, []);
  return (
    <DataTable
      columns={columns}
      data={actividad}
      pagination
    />
  );
}

export default TableAsis;
