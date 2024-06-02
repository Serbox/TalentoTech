import React from 'react'
import './SlideBar.css'

const SlideBar = () => {
  return (
    <>
        <div className='slider-container'>
            <div className='sub-container'>
            <span className="material-symbols-outlined icon">menu_book</span>
            <h4>Informacion Actualizada</h4>
            </div>
            <div className='sub-container'>
            <span className="material-symbols-outlined icon">groups_3</span>
            <h4>Trabajo Colaborativo</h4>
            </div>
            <div className='sub-container'>
            <span className="material-symbols-outlined icon" >handyman</span>
            <h4>Material de Apoyo</h4>
            </div>
        </div>
    </>
  )
}

export default SlideBar