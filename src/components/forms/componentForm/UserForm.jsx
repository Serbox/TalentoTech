import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({
  formData,
  handleChange,
  handleSubmit,
  errors,
  titleData,
  btnTitle,
}) => {
 


  return (
    <form onSubmit={handleSubmit} className="w-100 h-100">
      <div className="container text-left p-0 w-100 h-100">
        <div className="d-flex flex-col justify-content-center w-100 h-100">
          <div className="flex flex-col p-3 content-between w-100 h-100 shadow-sm">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">
              {titleData}
            </h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2 gap-2"></div>
            {/* Nombre */}
            <div className="col d-flex flex-column justify-content-center pb-2">
              <label
                htmlFor="nombre"
                className="block text-base font-medium text-gray-400"
              >
                Nombre y Apellido :
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                  placeholder="elonmusk"
                  required
                />
              </div>
              {errors.nombre && (
                <p className="text-red-500 text-sm">{errors.nombre}</p>
              )}
            </div>
            {/*Correo*/}
            <div className="col d-flex flex-column justify-content-center gap-1 pb-2">
              <label
                htmlFor="correo"
                className="block text-base font-medium text-gray-400"
              >
                Correo:
              </label>
              <div className="flex w-100 h-100">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="row m-0 d-flex flex-row justify-content-between pb-2">
              {/* Cedula */}
              <div className="col d-flex flex-col justify-content-center p-0">
                <label
                  htmlFor="cedula"
                  className="block text-base font-medium text-gray-400"
                >
                  Cedula :
                </label>
                <div className="flex w-100 h-100">
                  <span className="inline-flex items-center w-24 text-base text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <select
                      className="bg-transparent border-transparen rounded-e-lg focus:ring-blue-500 w-full px-1 py-2 block text-sm font-bold text-gray-400"
                      defaultValue="Cedula"
                    >
                      <option value="Cedula">CC</option>
                      <option value="Tarjeta de identidad">TI</option>
                    </select>
                  </span>
                  <input
                    type="number"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="1014229886"
                    required
                  />
                </div>
                {errors.cedula && (
                  <p className="text-red-500 text-sm">{errors.cedula}</p>
                )}
              </div>
              {/*Telefono*/}
              <div className="col d-flex flex-column justify-content-center p-0 ps-2">
                <label
                  htmlFor="telefono"
                  className="block text-base font-medium text-gray-400"
                >
                  Teléfono:
                </label>
                <div className="flex w-100 h-100">
                  <span className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </span>
                  <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
                {errors.telefono && (
                  <p className="text-red-500 text-sm">{errors.telefono}</p>
                )}
              </div>
            </div>

            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              {/*Fecha de nacimiento*/}
              <div className="col d-flex flex-col justify-content-center p-0">
                <label
                  htmlFor="fecha_nacimiento"
                  className="block text-base font-medium text-gray-400"
                >
                  Fecha de nacimiento:
                </label>
                <div className="flex w-100 h-100">
                  <span className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <input
                    type="date"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                    className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Select date"
                    required
                  />
                </div>
                {errors.fecha_nacimiento && (
                  <p className="text-red-500 text-sm">
                    {errors.fecha_nacimiento}
                  </p>
                )}
              </div>
              {/*Bootcamp*/}
              <div className="col d-flex flex-column justify-content-center p-0 ps-2">
                <label
                  htmlFor="bootcamp"
                  className="block text-base font-medium text-gray-400"
                >
                  Bootcamp:
                </label>
                <div className="flex w-100 h-100">
                  <span className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <i className="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                  </span>
                  <select
                    type="text"
                    id="bootcamp"
                    name="bootcamp"
                    onChange={handleChange}
                    className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Bootcamp"
                    defaultValue="BlcBasico"
                  >
                    <option value="BlcBasico" >
                      Blockchain basico
                    </option>
                    <option value="BlcIntermedio" >
                      Blockchain intermedio
                    </option>
                    <option value="BlcAvanzado" >
                      Blockchain avanzado
                    </option>
                    <option value="DWEFBasico" >
                      Desarrollo web Full Stack basico
                    </option>
                    <option value="DWEFIntermedio" >
                      Desarrollo web Full Stack intermedio
                    </option>
                    <option value="DWEFAvanzado" >
                      Desarrollo web Full Stack avanzado
                    </option>
                    <option value="ADBasico">Analisis de datos basico</option>
                    <option value="ADIntermedio">
                      Analisis de datos intermedio
                    </option>
                    <option value="ADAvanzado">
                      Analisis de datos avanzado
                    </option>
                    <option value="IABasico">
                      Inteligencia Artificial basico
                    </option>
                    <option value="IAIntermedio">
                      Inteligencia Artificial intermedio
                    </option>
                    <option value="IAAvanzado">
                      Inteligencia Artificial avanzado
                    </option>
                    <option value="NubeBasico">
                      Arquitectura en la Nube basico
                    </option>
                    <option value="NubeIntermedio">
                      Arquitectura en la Nube intermedio
                    </option>
                    <option value="NubeAvanzado">
                      Arquitectura en la Nube avanzado
                    </option>
                  </select>
                </div>
                {errors.bootcamp && (
                  <p className="text-red-500 text-sm">{errors.bootcamp}</p>
                )}
              </div>
            </div>

            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-col justify-content-center p-0">
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-400"
                >
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="col d-flex flex-column justify-content-center p-0 ps-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-medium text-gray-400"
                >
                  Confirmar contraseña:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="d-flex flex-row justify-start pt-4 px-2">
              <button
                type="submit"
                className="absolute bottom-6 right-50 btn bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded"
              >
                {btnTitle}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  formData: PropTypes.shape({
    cedula: PropTypes.string,
    nombre: PropTypes.string,
    ciudad: PropTypes.string,
    fecha_nacimiento: PropTypes.string,
    correo: PropTypes.string,
    telefono: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    bootcamp: PropTypes.string,
    // rol: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default UserForm;
