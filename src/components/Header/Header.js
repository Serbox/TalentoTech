import React from 'react'
import './Header.css'
import img1 from '../../IMG/logo_talento.svg'
import img2 from '../../IMG/tec-presidencia.svg'
const Header = () => {
  return (
    <>
    <header>
         <div className='imgs'>
            <a href='#'><img className='img' src={img1}/></a>
            <a href='#'><img className='img' src={img2}></img></a>
         </div>
         <div className='nav-bar'>
            <nav className='options'>
                <ul>
                    <li className='dropdown'>
                        <a href='#'>Inicio</a>
                        <div className='dropdown-content'>
                            <a href='#'>Bootcamps</a>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <a href='#'>Opciones</a>
                        <div className='dropdown-content'>
                            <a href='#'>Hackathons</a>
                            <a href='#'>Job Connections</a>
                            <a href='#'>Marketplace</a>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <a href='#'>Ayuda</a>
                        <div className='dropdown-content'>
                            <a href='#'>Manual de Usuario</a>
                            <a href='#'>Preguntas Frecuentes</a>
                        </div>
                    </li>
                    <li className='dropdown user'>
                        <a href='#'>JR</a>
                        <div className='dropdown-content user-dropdown'>
                            <p>JUAN SEBASTIÁN HERNÁNDEZ REYES</p>
                            <hr/>
                            <p>juanserbox@gmail.com</p>
                            <div className='user-info'>
                                <span>🏆 0</span>
                            </div>
                            <button className='logout-button'>Salir</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header