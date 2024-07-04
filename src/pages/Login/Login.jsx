import React from 'react';
import ImgLogin from '../../IMG/BackgroundLogin.png';
import ImgTalentoTech from '../../IMG/TalentoTech_Login.svg'

function Login() {
  return (
    <div className='flex flex-row justify-center h-screen w-full bg-gradient-to-r from-blue-950 to-blue-900 m-0 p-0'>
        <div className='flex flex-row w-[80%] p-0 bg-white rounded-3xl self-center shadow-lg shadow-blue-950'>
            <div className='w-100 h-100'>
                <img src={ImgLogin} className='w-100 h-100  rounded-l-xl' alt='..'></img>
            </div>
            <div className='w-[68%] flex flex-col justify-start'>
                <div className='block self-center'>
                    <img src={ImgTalentoTech} alt='...' className='w-[90%]'></img>
                </div>
                <div className=' flex flex-col border-2 border-gray-200 w-[74%] self-center rounded-xl px-2 py-3'>

                    <h2 className='text-center text-blue-900 font-bold text-3xl'>Iniciar sesion</h2>
                    <p className='text-center text-blue-900 font-bold text-base'>Mintic progresa en tu carrera junto a los mejores profecionales en el ambito IT</p>
                    <div className='w-100 flex flex-col '>
                        <label className='mx-4 text-gray-500 text-base font-bold'>Correo</label>
                        <input className='border-b-4 border-gray-300 w-[75%] mx-5 rounded-sm mb-4 outline-none text-gray-600 font-bold' placeholder='Sylvanas@gmail.com'></input>
                        <label className='mx-4 text-gray-500 text-base font-bold'>contraseña</label>
                        <input className='border-b-4 border-gray-300 w-[75%] mx-5 rounded-sm outline-none text-gray-600 font-bold' placeholder='**********'></input>
                        <a href='#' className='text-blue-900 font-bold text-base text-right hover:font-bold hover:text-base'>Olvidaste tu contraseña?</a>
                        <button type="submit" className="btn bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 border-b-4 border-blue-950 hover:border-blue-900 rounded mx-5 mt-4">
                         Ingresar
                        </button>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
