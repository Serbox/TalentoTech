import React, { useState } from "react";
import UserForm from "../componentForm/UserForm";
import Swal from "sweetalert2";

const EditarUser = () => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    ciudad: "",
    fecha_nacimiento: "",
    correo: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    rol: "",
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
      console.log("Formulario enviado", formData);
      setErrors({});
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();


    if (!formData.cedula) {
      newErrors.cedula = "La cédula es obligatoria.";
    }

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.ciudad) {
      newErrors.ciudad = "La ciudad es obligatoria.";
    }

    if (!formData.fecha_nacimiento) {
      newErrors.fecha_nacimiento = "La fecha de nacimiento es obligatoria.";
    }else {
      const birthDate = new Date(formData.fechaNacimiento);
      const age = currentYear - birthDate.getFullYear();
      if (age < 18 || (age === 18 && currentDate < new Date(birthDate.setFullYear(currentYear)))) {
        errors.fechaNacimiento = "Debes ser mayor de 18 años";
      }
    }

    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio.";
    }else if (!/^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]+$/.test(formData.correo)) {
      errors.correo = "Correo no es válido";
    }

    if (!formData.telefono) {
      newErrors.telefono = "El número de teléfono es obligatorio.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if (!formData.rol) {
      newErrors.rol = "El rol es obligatorio.";
    }

    return newErrors;
  };


  const handleCancel = () => {
    // Aquí puedes manejar la acción de cancelar
    console.log("Formulario cancelado");
    // Podrías limpiar el formulario si lo deseas
    setFormData({
      cedula: "",
      nombre: "",
      ciudad: "",
      fecha_nacimiento: "",
      correo: "",
      telefono: "",
      password: "",
      confirmPassword: "",
      rol: "",
    });
  };

  return <UserForm formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  handleCancel={handleCancel} titleData="Editar Usuario" btnTitle="Crear Usuario" errors={errors} />;
};


export default EditarUser;
