import React, { useState } from 'react';
import DeleteUserForm from '../DeleteForm/DeleteUserForm'; // Ajusta la ruta según donde tengas el componente
import Swal from 'sweetalert2';
import { deleteUsuario } from '../../../services/APIservices';

const Deleteform = () => {
  const [formData, setFormData] = useState({
    cedula: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      const errorsHtml = Object.values(validationErrors).map(error => `<li>${error}</li>`).join('');
      Swal.fire({
        icon: 'error',
        title: 'Errores en el formulario',
        html: `<ol style="text-align: center; list-style-position: inside;">${errorsHtml}</ol>`,
        confirmButtonText: 'Aceptar'
      });
    } else {
      try {
        console.log(formData.cedula);
        await deleteUsuario(formData.cedula); // Llama a tu función asincrónica para eliminar al usuario con el id_usuario
        Swal.fire({
          icon: 'success',
          title: 'Usuario eliminado',
          showConfirmButton: false,
          timer: 1500
        });
        handleCancel(); // Limpia el formulario después de eliminar el usuario
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar usuario',
          text: 'Hubo un problema al intentar eliminar el usuario. Por favor, intenta de nuevo más tarde.',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.cedula) {
      newErrors.cedula = "La cédula es obligatoria.";
    } else if (isNaN(formData.cedula)) {
      newErrors.cedula = "La cédula debe ser un número.";
    }

    return newErrors;
  };

  const handleCancel = () => {
    setFormData({
      cedula: "",
    });
    setErrors({});
  };

  return (
    <DeleteUserForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      titleData="Eliminar Usuario"
      btnTitle="Eliminar"
    />
  );
};

export default Deleteform;
