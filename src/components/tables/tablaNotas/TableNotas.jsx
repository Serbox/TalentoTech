import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './TableNotas.css';
import Modal from '../../forms/formModal.jsx';
import EditarNotas from '../../forms/ManageNotas/EditarNotas.jsx';
import Swal from "sweetalert2";
import {getNota} from "../../../services/APIservices.js"



const users = [
  { name: 'Juan Sevastian', semana1: '4.0', semana2: '4.0', semana3: '3.5', semana4: '3.0',semana5:'4.0',promedio:'3.8'},
  { name: 'Juan Mafa', semana1: '5.0', semana2: '5.0', semana3: '5.0', semana4: '5.0',semana5:'5.0',promedio:'5.0'},
  { name: 'Sylvanas Hayase', semana1: '2.0', semana2: '2.0', semana3: '2.0', semana4: '2.0',semana5:'2.0',promedio:'2.0'},
  { name: 'Camila Mikan', semana1: '5.0', semana2: '5.0', semana3: '5.0', semana4: '5.0',semana5:'5.0',promedio:'5.0'}
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
  { name: 'Nombre', selector: row => row.nombre, sortable: true },
  { name: 'Semana 1', selector: row => row.nota1, sortable: true },
  { name: 'Semana 2', selector: row => row.nota2, sortable: true },
  { name: 'Semana 3', selector: row => row.nota3, sortable: true },
  { name: 'Semana 4', selector: row => row.nota4, sortable: true },
  { name: 'Semana 5', selector: row => row.nota5, sortable: true },
  { name: 'Promedio', selector: row => row.promedio, sortable: true },
  {
    name: 'Acciones',    
    cell: row => (
      <>
        <Modal Form={<EditarNotas/>} ButonTitle={'📝'} btnClass={'btn btn-transparent'}/>
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
  const [notas, setNotas] = useState([])
      useEffect(() => {
          getNota()
          .then(res => {
            // Transform the data into an array of key-value pairs
            //*const transformedData = transformData(res); // Transform the data
            setNotas(res); // Flatten the transformed data
          })
          .catch(err => console.log(err));
      }, []);
  return (
    <DataTable
      columns={columns}
      data={notas}
      pagination
    />
  );
}

export default TableAsis;
