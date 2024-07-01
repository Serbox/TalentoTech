

const CrearSesion = () => {
  return (
    <form action="/create" method="POST">
      <div className="container text-left p-0">
        <div className="d-flex flex-row justify-content-center w-100 h-100">
          
          <div className="col p-3 ">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">CREAR SESIÓN</h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2"></div>
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="date-input" className="block mb-2 text-base text-gray-700 font-medium">Fecha :</label>
                <input type="date" id="date-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="componente-input" className="block mb-2 text-base text-gray-700 font-medium">Componente:</label>
                <input type="text" id="componente-input" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="Componente" required />
              </div>
            </div>
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="nombre-input" className="block mb-2 text-base text-gray-700 font-medium">Nombre :</label>
                <input type="text" id="nombre-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nombre" required />
              </div>
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="enlace-input" className="block mb-2 text-base text-gray-700 font-medium">Enlace :</label>
                <input type="text" id="enlace-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enlace" required />
              </div>
            </div>
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="estado-select" className="block mb-2 text-base text-gray-700 font-medium">Estado :</label>
                <select id="estado-select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="finalizado">Finalizado</option>
                  <option value="en-progreso">En progreso</option>
                  <option value="pendiente">Pendiente</option>
                </select>
              </div>
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label htmlFor="asignatura-input" className="block mb-2 text-base text-gray-700 font-medium">Asignatura :</label>
                <input type="text" id="asignatura-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Asignatura" required />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-evenly pt-2">
              <button type="submit" className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded">Crear</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CrearSesion;
