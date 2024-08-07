import React from 'react'
import './modal.css';

function modal({open, onclose, children}) {
  return (
    //backdrop
    <div className={`fixed inset-0 justify-center items-center transition-colors z-10 ${open ? "visible bg-black/20" : "invisible"}`} onClick={onclose}>
      {/*modal*/}
      <div onClick={e => e.stopPropagation()} className={`mx-auto mt-6 max-w-[60%] max-h-full bg-white rounded-xl shadow p-2 transition-all ${open ? "scale-100": "scale-125 opacity-0"}`}>
        <button onClick={onclose} className='absolute bg-transparent top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
          <i className="bi bi-x-circle text-xl hover:text-red-500"></i>
        </button>
        <button type="button" onClick={onclose} className="absolute bottom-6 right-8 btn bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-700 rounded">Cancelar</button>
        {children}
      </div>
    </div>
  );
}

export default modal
