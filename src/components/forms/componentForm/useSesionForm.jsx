import React from "react";
import PropTypes from "prop-types";
import RegisterImg from "../../../IMG/register.jpg";


const useSesionForm = ({ formData, handleChange, handleSubmit, handleCancel, errors, titleData, btnTitle }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="container text-left p-0">
        <div className="d-flex flex-row justify-content-center w-100 h-100">
          <div className="col">
            <img src={RegisterImg} alt="register" id="image" className="rounded-l-3xl" />
          </div>
          <div className="col p-3">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">{titleData}</h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2"></div>
            
            {/* Cedula */}
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="cedula" className="block mb-2 text-base text-gray-700 font-medium">Cedula :</label>
                <input
                  type="number"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="90210"
                />
                {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula}</p>}
              </div>
              
              {/* Nombre */}
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="nombre" className="block mb-2 text-base text-gray-700 font-medium">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="elonmusk"

                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
              </div>
            </div>
            
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="ciudad" className="block mb-2 text-base text-gray-700 font-medium">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Bogota D.C"  />
                {errors.ciudad && <p className="text-red-500 text-sm">{errors.ciudad}</p>}

              </div>

              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="fecha_nacimiento" className="block mb-2 text-base text-gray-700 font-medium">Fecha de nacimiento:</label>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" />
                {errors.fecha_nacimiento && <p className="text-red-500 text-sm">{errors.fecha_nacimiento}</p>}

              </div>
            </div>

            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="correo" className="block mb-1 text-base text-gray-700 font-medium">Correo:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="name@flowbite.com" />
                {errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}

              </div>
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="telefono" className="block mb-1 text-base text-gray-700 font-medium">Número de teléfono:</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"  />
                {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}

              </div>
            </div>

            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="password" className="block mb-1 text-base text-gray-700 font-medium">Contraseña:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••"  />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              </div>
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="confirmPassword" className="block mb-1 text-base text-gray-700 font-medium">Confirmar contraseña:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••"  />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="mb-1 d-flex flex-column justify-content-between gap-2">
              <h6 className="block mx-2 text-base text-gray-700 font-medium">Rol</h6>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input id="administrador" type="radio" value="Administrador" name="rol" checked={formData.rol === "Administrador"} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="administrador" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Administrador</label>
                      

                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input id="docente" type="radio" value="Docente" name="rol" checked={formData.rol === "Docente"} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor="docente" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Docente</label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input id="estudiante" type="radio" value="Estudiante" name="rol" checked={formData.rol === "Estudiante"} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="estudiante" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Estudiante</label>
                  </div>
                </li>
                <li className="w-full flex align-middle, justify-center sm:border-b-0 sm:border.r dark:border-gray-600 ">
                {errors.rol && <p className="text-red-500 text-sm self-center">{errors.rol}</p>}

                </li>

              </ul>
            </div>
            
            <div className="d-flex flex-row justify-content-evenly pt-2">
              <button type="submit" className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded">{btnTitle}</button>
              <button type="button" onClick={handleCancel} className="btn bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-700 rounded">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

useSesionForm.propTypes = {
  formData: PropTypes.shape({
    cedula: PropTypes.string,
    nombre: PropTypes.string,
    ciudad: PropTypes.string,
    fecha_nacimiento: PropTypes.string,
    correo: PropTypes.string,
    telefono: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    rol: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default useSesionForm;
