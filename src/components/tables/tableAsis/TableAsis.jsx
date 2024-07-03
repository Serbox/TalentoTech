import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./TableAsis.css";
import CrearSesion from "../../forms/fromsSesion/CrearSesion";
import Modal from "../../forms/formModal.jsx";

import EditarSesion from "../../forms/fromsSesion/EditarSesion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const users = [
  {
    fecha: "10/06/2024",
    name: "Sesion de ingles",
    enlace: "meet/xyz",
    componente: "Ingles",
    estado: "Activa",
    bootcamp: "Desarrollo web full stack basico",
  },
  {
    fecha: "10/06/2024",
    name: "Sesion de bootstrap",
    enlace: "meet/abc",
    componente: "Tecnico",
    estado: "proximamente",
    bootcamp: "Desarrollo web full stack intermedio",
  },
  {
    fecha: "3/07/2024",
    name: "Sesion de react side server",
    enlace: "meet/def",
    componente: "Tecnico",
    estado: "Activa",
    bootcamp: "Desarrollo web full stack avanzado",
  },
  {
    fecha: "2/07/2024",
    name: "Sesion de Power skills",
    enlace: "",
    componente: "Power skills",
    estado: "finalizada",
    bootcamp: "Analisis de datos",
  },
  {
    fecha: "20/10/2024",
    name: "Sesion de ingles",
    enlace: "meet/xyz",
    componente: "Ingles",
    estado: "Proximamente",
    bootcamp: "Inteligencia artificial basico",
  },
  {
    fecha: "30/07/2024",
    name: "Sesion de estadistica",
    enlace: "meet/abc",
    componente: "Tecnico",
    estado: "Activa",
    bootcamp: "Inteligencia artificial intermedio",
  },

];

const columns = [
  { name: "Fecha", selector: (row) => row.fecha, sortable: true },
  { name: "Nombre", selector: (row) => row.name, sortable: true },
  { name: "Enlace", selector: (row) => row.enlace, sortable: true },
  { name: "Estado", selector: (row) => row.estado, sortable: true },
  { name: "Bootcamp", selector: (row) => row.bootcamp, sortable: true },
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
  return (
    <DataTable
      title="Sesiones bootcamp"
      columns={columns}
      data={users}
      pagination
    />
  );
};

export default TableAsis;
