import React, { useState } from "react";
import UserNotas from "../componentForm/UserNotas";
import Swal from "sweetalert2";

const EditarNotas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    semana1: "",
    semana2: "",
    semana3: "",
    semana4: "",
    semana5: "",
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
        title: "Calificaciones editada",
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

    // if (!formData.fecha_Sesion) {
    //   newErrors.fecha_Sesion = "La fecha de la sesion es obligatoria.";
    // }


    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    return newErrors;
  };

  const handleCancel = () => {
    // Aquí puedes manejar la acción de cancelar
    console.log("Formulario cancelado");
    // Podrías limpiar el formulario si lo deseas
    setFormData({
      nombre: "",
      fecha: "",
      descripcion: "",
      enlace: "",
    });
  };

  return (
    <UserNotas
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      titleData="Editar Notas"
      btnTitle="Editar"
      errors={errors}
    />
  );
};

export default EditarNotas;
