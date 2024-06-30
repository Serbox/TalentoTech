import Modal from '../Modal/modal';
import React, { useState } from 'react'
import RegisterImg from "../../IMG/register.jpg";

const FormModal = ({Form, ButonTitle, btnClass}) => {
    const [open, setopen] = useState();
    return (
        <div>
            <button className={btnClass} onClick={()=> setopen(true)}> 
                {ButonTitle}
            </button>
            <Modal  open={open} onclose={() => setopen(false)}>
                <div className="flex justify-center align-middle border border-solid w-full h-full">
                    <div className='w-full'>
                        <img src={RegisterImg} alt="" id="image" className=" shadow rounded-l-lg"></img>
                    </div>
                    <div className='overflow-auto w-100 h-100'>
                        {Form}
                    </div>
                </div>
            </Modal>
            
        </div>
    );
}

export default FormModal;
