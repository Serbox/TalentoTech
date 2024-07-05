import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import "./TableAsis.css";
import Modal from "../../forms/formModal.jsx";

import EditarSesion from "../../forms/fromsSesion/EditarSesion";
import Swal from "sweetalert2";
import { getSesion } from '../../../services/APIservices.js';


const columns = [
  { name: "Nombre", selector: (row) => row.nombre, sortable: true },
  { name: "Asignatura", selector: (row) => row.asignatura, sortable: true },
  { name: "Componente", selector: (row) => row.componente, sortable: true },
  { name: "Enlace", selector: (row) => row.enlace, sortable: true },
  { name: "Estado", selector: (row) => row.estado, sortable: true },
  {
    name: "Acciones",
    cell: (row) => (
      <>
        <Modal
          Form={<EditarSesion />}
          ButonTitle={"📝"}
          btnClass={"btn btn-transparent"}
        />
        <button
          onClick={() => {
            Swal.fire({
              title: "¿Estás seguro de eliminar este usuario?",
              showDenyButton: true,
              confirmButtonText: `Eliminar`,
              denyButtonText: `Cancelar`,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Usuario eliminado", "", "success");
              }
            });
          }}
        >
          🗑️
        </button>
      </>
    ),
  },
];

const TableAsis = () => {
  const [asistencia, setAsistencia] = useState([])
      useEffect(() => {
          getSesion()
          .then(res => {
            // Transform the data into an array of key-value pairs
            //*const transformedData = transformData(res); // Transform the data
            setAsistencia(res); // Flatten the transformed data
          })
          .catch(err => console.log(err));
      }, []);
  return (
    <DataTable
      title="Sesiones bootcamp"
      columns={columns}
      data={asistencia}
      pagination
    />
  );
};

export default TableAsis;
