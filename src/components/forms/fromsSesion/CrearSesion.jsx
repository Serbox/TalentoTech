import React, { useState } from "react";
import UserForm from "../componentForm/useSesionForm";
import Swal from "sweetalert2";

const CrearSesion = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    fecha_Sesion: "",
    descripcion: "",
    enlace: "",
    componente: "",
    estado_sesion: "activo",
    bootcamp: "",
    horario: "", 
  });

  // Estado para almacenar las sesiones creadas
  const [sessions, setSessions] = useState([]);

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Valida los datos del formulario
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores, muestra un mensaje de error
      const errorsHtml = Object.values(validationErrors)
        .map((error) => `<li>${error}</li>`)
        .join("");
      Swal.fire({
        icon: "error",
        title: "Errores en el formulario",
        html: `<ol style="text-align: center; list-style-position: inside;">${errorsHtml}</ol>`,
        confirmButtonText: "Aceptar",
      });
    } else {

      setSessions([...sessions, formData]);
      Swal.fire({
        icon: 'success',
        title: 'Sesión creada',
        showConfirmButton: false,
        timer: 1500
      });
     // Resetea el formulario
      setFormData({
        nombre: "",
        fecha_Sesion: "",
        descripcion: "",
        enlace: "",
        componente: "",
        estado_sesion: "activo",
        bootcamp: "",
        horario: "", 
      });
      setErrors({});
    }
  };

  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Valida los datos del formulario
  const validate = () => {
    const newErrors = {};

    if (!formData.fecha_Sesion) {
      newErrors.fecha_Sesion = "La fecha de la sesión es obligatoria.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const inputDate = new Date(formData.fecha_Sesion);
      if (inputDate < today) {
        newErrors.fecha_Sesion = "La fecha no puede ser anterior a la fecha actual.";
      }
    }

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.enlace) {
      newErrors.enlace = "El enlace de la sesión es obligatorio.";
    }

    if (!formData.horario) {
      newErrors.horario = "El horario de la sesión es obligatorio.";
    }

    return newErrors;
  };

  // Resetea el formulario
  const handleCancel = () => {
    setFormData({
      nombre: "",
      fecha_Sesion: "",
      descripcion: "",
      enlace: "",
      componente: "",
      estado_sesion: "activo",
      bootcamp: "",
      horario: "", 
    });
  };

  return  <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        titleData="Crear Sesión"
        btnTitle="Registrar"
        errors={errors}
      />

};

export default CrearSesion;

