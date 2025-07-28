import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoredData, removeFromLocalStorage } from '../utility/localStorage';
import Bookedlawer from './Bookedlawer';
import Chart from './Chart';

const Booking = () => {
    const [bookingList, setBookingList] = useState([]);
    // console.log(bookingList)
    const dataFromRouter = useLoaderData();

    useEffect(() => {
        const localStorageData = getStoredData();
        const convertedData = localStorageData.map(id => parseInt(id));
        const myBookingList = dataFromRouter.filter(lawer => convertedData.includes(lawer.id));
        setBookingList(myBookingList);
    }, [dataFromRouter]);

    const handleCancel = (id) => {
        removeFromLocalStorage(id);
        const updatedList = bookingList.filter(item => item.id !== id);
        setBookingList(updatedList);
    };



    return (
        <div>
            {
                bookingList.length === 0 ? (
                    <div className='h-[calc(100vh-301px)] flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-8xl font-bold shadow-2xl shadow-amber-400'>!</h1>
                        <h1 className='text-3xl text-center'>You have not booked any Appointment yet</h1>
                        {/* <img className='w-2/12 rounded-3xl outline-hidden' src="https://i.ibb.co/jvwhFSx8/photo-2025-05-17-23-52-39.jpg" alt="" /> */}
                        <div>
                            <Link to='/'>
                                <button className=' btn bg-blue-400 rounded-3xl hover:bg-[#0EA106] p-2 px-3 hover:text-white'>
                                    Book an Appointment

                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>

                    {/* Recharts */}
                        <div className='w-11/12 mx-auto bg-blue-100 rounded-3xl p-5'>

                          
                            <Chart booked={bookingList}></Chart>
                        </div>
                        <div className='text-center my-12 px-4'>
                            <h1 className='text-3xl font-bold'>My Today Appointments</h1>
                            <p>Our platform connects you with verified, experienced Lawyers across variospecialties — all at your convenience.</p>
                        </div>
                        {
               bookingList.map(booked => (
                // console.log(booked),
                   <Bookedlawer
                       key={booked.id}
                       Bookedlawer={booked}
                       onCancel={handleCancel}
                   />
               ))
               }

                    </>
                )
            }
        </div>
    );
};

export default Booking;
