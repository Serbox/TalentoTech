import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './TableUsers.css';
//import Editar from '../forms/Editar.jsx';
import Modal from '../../forms/formModal.jsx';
import EditarUser from '../../forms/ManageUsers/EditarUser.jsx';
import Swal from "sweetalert2";
import { getFunction } from '../../../services/APIservices.js';
import Deleteform from '../../forms/componentForm/deleteform.jsx';


const columns = [
  { name: 'Cedula', selector: row => row.id_usuario, sortable: true },
  { name: 'Nombre', selector: row => row.nombre, sortable: true },
  { name: 'fecha de nacimiento', selector: row => row.fecha_nacimiento, sortable: true },
  { name: 'correo', selector: row => row.correo, sortable: true },
  { name: 'telefono', selector: row => row.telefono, sortable: true },
  {
    name: 'Acciones',    
    cell: row => (
      <>
        <Modal Form={<EditarUser/>} ButonTitle={'📝'} btnClass={'btn btn-transparent'}/>
        <Modal Form={<Deleteform/>} ButonTitle={'🗑️'} btnClass={'btn btn-transparent'}></Modal>
      </>
    ),
  },
];

const TableUsers = () => {
    const [usuario, setUsuario] = useState([])
      useEffect(() => {
          getFunction()
          .then(res => {
            // Transform the data into an array of key-value pairs
            //*const transformedData = transformData(res); // Transform the data
            setUsuario(res); // Flatten the transformed data
          })
          .catch(err => console.log(err));
      }, [usuario]);

  return (      

      <DataTable
        title=""
        columns={columns}
        data={usuario}
        pagination
        className="w-100 h-100"
      />

  );
};

export default TableUsers;


