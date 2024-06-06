import React from 'react'
import './Info.css'
import Student from '../../IMG/estudent.jpg'

const Info = () => {
    return (
        <>
            <div className='info-container'>
                <div className='info-card'>
                    
                    <div className='text-primary'>
                        <h1>¡ Despierta tu Pontencial y Aprende Sin Limites!</h1>
                    </div>
                    <div className='tex-secondary'>
                        <h3>¿Estas Listo?</h3>
                    </div>
                </div>
                <div className='info-imagen'>
                    <img src={Student} alt='Student' title='Student' />
                </div>
            </div>
        </>
    )
}

export default Info;