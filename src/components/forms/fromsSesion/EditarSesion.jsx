import React, { useState } from "react";
import UserForm from "../componentForm/useSesionForm";
import Swal from "sweetalert2";

const EditarSesion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    fecha_Sesion: "",
    componente: "",
    enlace: "",
    estado: "",
    bootcamp: "",
    horario: "", // Añadir campo horario
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
        icon: "success",
        title: "Sesión editada",
        showConfirmButton: false,
        timer: 1500,
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

    if (!formData.fecha_Sesion) {
      newErrors.fecha_Sesion = "La fecha de la sesión es obligatoria.";
    } else {
      // Obtener la fecha actual y establecer la hora a 0
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Convertir la fecha ingresada a objeto Date
      const inputDate = new Date(formData.fecha_Sesion);

      // Comparar la fecha ingresada con la fecha actual
      if (inputDate < today) {
        newErrors.fecha_Sesion =
          "La fecha no puede ser anterior a la fecha actual.";
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

  const handleCancel = () => {
    // Aquí puedes manejar la acción de cancelar
    console.log("Formulario cancelado");
    // Podrías limpiar el formulario si lo deseas
    setFormData({
      nombre: "",
      fecha_Sesion: "",
      componente: "",
      enlace: "",
      estado: "",
      bootcamp: "",
      horario: "", // Resetear el campo horario
    });
  };

  return (
    <UserForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      titleData="Editar Sesión"
      btnTitle="Editar"
      errors={errors}
    />
  );
};

export default EditarSesion;
