import React from 'react'
import './Tools.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';




const Tools = () => {


    const Recursos = [
        { text: "Kit del programador" },
        { text: "Actividades estudiantes" },
        { text: "Material clase" },
        { text: "Contenido tematico" },
        { text: "Tutorias componente tecnico" },

    ];

    const ingles = [
        {logo:"add_to_drive",text:"Consulta Horarios"},
        {logo:"brightness_low",text:"Ingreso tutoria diurna"},
        {logo:"bedtime",text:"Ingreso tutoria nocturna"},
        {logo:"add_to_drive",text:"Consulta grabaciones de tutorias"},
    
    ]


    return (
        <>
            <div className='tools-container'>
                <h1>Herramientas del estudiante!</h1>
                <div className='toolsSub-Container'>
                    <div className='conte-tools'>
                        <h3>Recursos:</h3>
                        <div className='cont-info'>
                            {Recursos.map((item, index) => (
                                <div key={index} className='cont-option'>
                                        <span className='material-symbols-outlined'>add_to_drive</span>
                                        <p>{item.text}</p>
                                            <span className='material-symbols-outlined'>link</span>
                                    </div>
                            ))}
                        </div>
                    </div>


                    <div className='conte-tools'>
                        <h3>Tutorias en ingles:</h3>
                        <div className='cont-info'>
                        {ingles.map((item, index) => (
                                <div key={index} className='cont-option'>
                                        <span className='material-symbols-outlined'>{item.logo}</span>
                                        <p>{item.text}</p>
                                            <span className='material-symbols-outlined'>link</span>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='toolsSub-Container'>
                    <div className='conte-tools'>
                        <div className='cont-info'>
                            <h1>Foros</h1>
                            <h3>Representación y conocimiento de los mienbros del grupo </h3>
                            <div className='cursor-pointer'>
                                <div
                                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
                                >
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
                                    ></span>
                                    <span
                                        className="right-0 pr-4 duration-200 ease-out group-hover:translate-x-1 z-10"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            fill="none"
                                            className="w-5 h-5 text-green-400"
                                        >
                                            <path
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                stroke-width="2"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                            ></path>
                                        </svg>
                                    </span>

                                    <span
                                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                                    >Entrar</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='conte-tools'>
                        <h3>Calendario:</h3>
                        <div className='cont-info'>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools