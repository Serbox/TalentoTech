import React from "react";
import PropTypes from "prop-types";

const useSesionForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleCancel,
  errors,
  titleData,
  btnTitle,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="container text-left p-0">
        <div className="d-flex flex-row justify-content-center w-100 h-100">
          <div className="col p-3">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">
              {titleData}
            </h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2 gap-2"></div>
            {/* Nombre */}
            <div className=" mt-[100px]">
              <div className="row m-0 d-flex flex-row justify-content-between py-2">
                {/*Fecha de nacimiento*/}
                <div className="col d-flex flex-col justify-content-center p-0">
                  <label
                    htmlFor="date-input"
                    className="block text-base font-medium text-gray-400"
                  >
                    Fecha :
                  </label>
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                      id="fecha_Sesion"
                      name="fecha_Sesion"
                      value={formData.fecha}
                      onChange={handleChange}
                      class="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Select date"
                    />
                  </div>
                  {errors.fecha_Sesion && (
                    <p className="text-red-500 text-sm">
                      {errors.fecha_Sesion}
                    </p>
                  )}
                </div>
                <div className="col d-flex flex-column justify-content-center p-0 ps-2">
                  <label
                    htmlFor="Nombre"
                    className="block text-base font-medium text-gray-400"
                  >
                    Nombre:
                  </label>
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <i class="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                    </span>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="elonmusk"
                    />
                  </div>
                  {errors.nombre && (
                    <p className="text-red-500 text-sm">{errors.nombre}</p>
                  )}
                </div>
              </div>

              <div className="row m-0 d-flex flex-row justify-content-between py-2">
                <div className="col d-flex flex-col justify-content-center p-0">
                  <label
                    htmlFor="Enlace"
                    className="block text-base font-medium text-gray-400"
                  >
                    Enlace:
                  </label>
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <i class="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                    </span>
                    <input
                      type="text"
                      id="enlace"
                      name="enlace"
                      value={formData.enlace}
                      onChange={handleChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="meet.google.com/xyz-abc-123"
                    />
                  </div>
                  {errors.enlace && (
                    <p className="text-red-500 text-sm">{errors.enlace}</p>
                  )}
                </div>
                {/*Bootcamp*/}
                <div className="col d-flex flex-column justify-content-center p-0 ps-2">
                  <label
                    htmlFor="componente"
                    className="block text-base font-medium text-gray-400"
                  >
                    Componente:
                  </label>
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <i class="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                    </span>
                    <select
                      type="text"
                      id="componente"
                      name="componente"
                      onChange={handleChange}
                      class="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Componente"
                    >
                      <option value="Ingles" selected>
                        Ingles tecnico
                      </option>
                      <option value="Tecnico">Formación técnica</option>
                      <option value="Porwer">Desarrollo de power skills</option>
                      <option value="Proyectos">Gestion de proyectos</option>
                    </select>
                  </div>
                  {errors.componente && (
                    <p className="text-red-500 text-sm">{errors.componente}</p>
                  )}
                </div>
              </div>
              <div className="row m-0 d-flex flex-row justify-content-between py-2">
                {/*Fecha de nacimiento*/}
                <div className="col d-flex flex-col justify-content-center p-0">
                  <label
                    htmlFor="estado_sesion"
                    className="block text-base font-medium text-gray-400"
                  >
                    Estado sesion:
                  </label>
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <i class="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                    </span>
                    <select
                      type="text"
                      id="estado_sesion"
                      name="estado_sesion"
                      onChange={handleChange}
                      class="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="proximamente">Proximamente</option>
                      <option value="activo" selected>
                        Activo
                      </option>
                      <option value="finalizado">Finalizado</option>
                    </select>
                  </div>
                  {errors.estado_sesion && (
                    <p className="text-red-500 text-sm">
                      {errors.estado_sesion}
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
                  <div class="flex w-100 h-100">
                    <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <i class="bi bi-code-square text-xl text-center mb-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"></i>
                    </span>
                    <select
                      type="text"
                      id="bootcamp"
                      name="bootcamp"
                      onChange={handleChange}
                      class="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Bootcamp"
                    >
                      <option value="BlcBasico" selected>
                        Blockchain basico
                      </option>
                      <option value="BlcIntermedio" selected>
                        Blockchain intermedio
                      </option>
                      <option value="BlcAvanzado" selected>
                        Blockchain avanzado
                      </option>
                      <option value="DWEFBasico" selected>
                        Desarrollo web Full Stack basico
                      </option>
                      <option value="DWEFIntermedio" selected>
                        Desarrollo web Full Stack intermedio
                      </option>
                      <option value="DWEFAvanzado" selected>
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
              <div className="flex flex-row justify-start pt-4 px-2">
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
      </div>
    </form>
  );
};

useSesionForm.propTypes = {
  formData: PropTypes.shape({
    fecha_Sesion: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    enlace: PropTypes.string,
    bootcamp: PropTypes.string,
    componente: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default useSesionForm;
