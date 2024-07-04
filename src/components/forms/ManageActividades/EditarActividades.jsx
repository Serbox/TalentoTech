import React, { useState } from "react";
import UserCalificaciones from "../componentForm/UserCalificaciones";
import Swal from "sweetalert2";

const EditarUser = () => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
    descripcion: "",
    nombreActividad: "",
 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Convertir los errores en una lista HTML
      const errorsHtml = Object.values(validationErrors).map(error => `<li>${error}</li>`).join('');
      Swal.fire({
        icon: 'error',
        title: 'Errores en el formulario',
        html: `<ol style="text-align: center; list-style-position: inside;">${errorsHtml}</ol>`,
        confirmButtonText: 'Aceptar'
      });
    } else {
      // Aquí puedes manejar el submit del formulario
      Swal.fire({
        icon: 'success',
        title: 'Actividad editada',
        showConfirmButton: false,
        timer: 1500
      });
      console.log("Formulario enviado", formData);
      setErrors({});
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const handleCancel = () => {
    // Aquí puedes manejar la acción de cancelar
    console.log("Formulario cancelado");
    // Podrías limpiar el formulario si lo deseas
    setFormData({
    descripcion: "",
    nombreActividad: "",
   
    });
  };

  return <UserCalificaciones formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  handleCancel={handleCancel} titleData="Editar Actividad" btnTitle="Editar" errors={errors} />;
};


export default EditarUser;
