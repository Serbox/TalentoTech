import Modal from '../Modal/modal';
import React, { useState } from 'react'
import RegisterImg from "../../IMG/register.jpg";

const FormModal = ({Form}) => {
    const [open, setopen] = useState();
    return (
        <div>
            <button className='btn btn-danger' onClick={()=> setopen(true)}> 
                Editar
            </button>
            <Modal open={open} onclose={() => setopen(false)}>
                <div className="grid grid-cols-2 w-100 h-100">
                    <div className='w-100 h-100'>
                        <img src={RegisterImg} alt="" id="image" className=" shadow rounded-l-lg"></img>
                    </div>
                    <div>
                        {Form}
                    </div>
                </div>
            </Modal>
            
        </div>
    );
}

export default FormModal;
