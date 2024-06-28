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
                <div className="flex justify-center align-middle border border-solid border-black w-full h-full">
                    <div className='w-full h-[500px]'>
                        <img src={RegisterImg} alt="" id="image" className=" shadow rounded-l-lg h-[602px] w-[602px]"></img>
                    </div>
                    <div className='overflow-auto w-full'>
                        {Form}
                    </div>
                </div>
            </Modal>
            
        </div>
    );
}

export default FormModal;
