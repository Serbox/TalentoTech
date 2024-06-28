import React from 'react'
import './modal.css';

function modal({open, onclose, children}) {
  return (
    //backdrop
    <div className={`fixed inset-0 justify-center items-center transition-colors z-10 ${open ? "visible bg-black/20" : "invisible"}`} onClick={onclose}>
      {/*modal*/}
      <div onClick={e => e.stopPropagation()} className={`mx-auto mt-10 max-w-[80%] max-h-full bg-white rounded-xl shadow p-2 transition-all ${open ? "scale-100": "scale-125 opacity-0"}`}>
        <button onClick={onclose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
          <i class="bi bi-x-circle text-xl hover:text-red-500"></i>
        </button>
        {children}
      </div>
    </div>
  );
}

export default modal
