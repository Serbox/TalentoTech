import React, { useState } from "react";
import UserCalificaciones from "../componentForm/UserCalificaciones";
import Swal from "sweetalert2";

const CrearSesion = () => {
  const [formData, setFormData] = useState({
    nombreActividad: "",
    descripcion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Convertir los errores en una lista HTML
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
      // Aquí puedes manejar el submit del formulario
      console.log("Formulario enviado", formData);
      Swal.fire({
        icon: 'success',
        title: 'Sesion creada',
        showConfirmButton: false,
        timer: 1500
      });
      setErrors({});
    }
  };

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nombreActividad) {
      newErrors.nombreActividad = "El nombre es obligatorio.";
    }
    return newErrors;
  };

  const handleCancel = () => {
    // Aquí puedes manejar la acción de cancelar
    console.log("Formulario cancelado");
    // Podrías limpiar el formulario si lo deseas
    setFormData({
      nombreActividad: "",
      descripcion: "",
    });
  };

  return <UserCalificaciones formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  handleCancel={handleCancel} titleData="Crear Actividad" btnTitle="Registrar" errors={errors} />;

};

export default CrearSesion;
