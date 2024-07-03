import { useState } from 'react';

const SesionesClase = ({ title, fecha, finalizado, horario, asistencia, descripcion }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5 mt-3 border rounded-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="block">{title}</span>
          <span className="block text-sm">{fecha}</span>
        </div>
        {finalizado ? (
          <span className="bg-red-500 text-white px-2 py-1 rounded-md mt-3 mx-2">Finalizado</span>
        ) : (
          <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mt-3 mx-2">Proximamente</span>
        )}
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          <p>
            <strong>Horario de la sesión:</strong> {horario}
          </p>
          <p>
            <strong>Asistencia:</strong> <span className="text-green-500">{asistencia}</span>
          </p>
          <p>
            <strong>Descripción:</strong> {descripcion}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3">
            {finalizado ? 'Ingresar a la grabación' : 'Ingresar a la clase'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SesionesClase;
