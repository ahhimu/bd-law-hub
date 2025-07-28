import React from 'react';
import { removeFromLocalStorage } from '../utility/localStorage';
import { toast } from 'react-toastify';
// import Recharts from './Recharts';

const Bookedlawer = ({ Bookedlawer, onCancel }) => {
    const { id, name, fee, specialty } = Bookedlawer;
    // console.log(id)

    const handleCancel = () => {
        removeFromLocalStorage(id);
        onCancel(id);
        toast.info("Appoinment Removed Successfully! ")
    };

    return (

     <div>

            {/* recharts */}


        <div className='lg:card-side bg-base-100 border border-gray-300 rounded-2xl mb-8 p-4 md:w-11/12 mx-auto'>


           

            <div className='w-full'>
                <div className='flex justify-between flex-col md:flex-row space-y-2'>
                    <span className='font-semibold text-xl'>{name}</span>
                    <span className='font-semibold'>
                        Appointment Fee: <span className='font-bold text-xl text-green-400'>{fee}</span> Taka
                    </span>
                </div>
                <span className='font-semibold'>{specialty}</span>
                <div className='w-full border-b border-dashed my-4 border-gray-300 mt-2'></div>

                <div className='mt-4'>
                    <button
                        onClick={handleCancel}
                        className='hover:bg-blue-300 bg-amber-300 w-full text-center border-1 rounded-4xl p-2'>
                        Cancel Appointment
                    </button>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Bookedlawer;
