
import { CiWarning } from 'react-icons/ci';

import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { setStoredData } from '../utility/localStorage';

const Details = () => {

    const { id } = useParams();
    
    const navigate = useNavigate();
    
    const data = useLoaderData();



    const singleLawer = data?.find(item => item.id === parseInt(id))
    

    const { AvilableBadge, experience, name, specialty, licenseNo, image, phone, email, address, available, fee } = singleLawer;
    ;

    const handleAppointment = id => {
    const success = setStoredData(parseInt(id));
    if (success) {
        navigate('/booking');
    }

    }




    return (
        <div className='p-3 md:w-11/12 mx-auto'>
            <div className='bg-gray-200 text-center p-8 rounded-2xl mb-8'>
                <h1 className='text-3xl'>Lawyer’s Profile Details</h1>
                <p className='w-3/5 text-center mx-auto'>Get to know your lawyer – their background, legal expertise, and areas of specialization. Trust and transparency matter, so we provide a clear profile to help you choose the right legal support for your needs.</p>


            </div>


            <div className="border-1 flex justify-between gap-3 items-center bg-base-100 shadow-sm rounded-2xl hover:bg-blue-300 hover:shadow-lg transition duration-300 ease-in-out mb-10">
                <figure className='w-2/8 p-4 '>
                    <img className='rounded-xl'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">

                    <div className='space-x-2'>
                        <span className='py-1 px-2 rounded-2xl text-green-500 bg-green-100'>{AvilableBadge}</span>
                        <span className='p-2 rounded-2xl bg-blue-100 text-[#176AE5]'>{experience}+Years Experienced</span>
                    </div>

                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className='text-base font-semibold'>{specialty}</p>
                    <p>&reg; License No:{licenseNo}</p>
                    <p>Cell: {phone}</p>
                    <p>E-mail: {email}</p>
                    <p>Address : {address}</p>
                    <div className='flex items-center gap-2'>Availability:
                        {
                            available.map((item, index) => <span key={index} className='text-[#FFA000] px-2 bg-amber-50 rounded-2xl border border-[#FFA000]'>{item}</span>)
                        }

                    </div>


                    <h1 className='font-bold'>Charge: {fee}  BDT</h1>


                </div>
            </div>

            <div className=' lg:card-side bg-base-100 border border-gray-300 rounded-2xl mb-8 p-4'>
                <div className='text-center text-2xl'>
                    <p>Book An Appointment</p>
                </div>
                <div className='w-full border-dashed border-b-1 border-gray-300 mt-2'></div>
                <div className='flex justify-between w-full mt-2'>
                    <h2 className='font-bold'>Availability</h2>
                    <span className='text-[#09982F] px-2 py-1 bg-green-100 rounded-2xl border border-[#09982F]'>
                        Lawyer  {AvilableBadge} Today
                    </span>
                </div>
                <div className='w-full border-b my-4 border-gray-300 mt-2 '></div>

                <p className='text-[#FFA000]  gap-2 mb-4  text-center px-1 py-1 bg-amber-100 rounded-2xl w-full flex justify-center items-center '>

                    <CiWarning />
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation
                </p>




                <div className='mt-4'>
                    {/* <Link to={'/booking'}> */}
                        <button onClick={() => handleAppointment(id)} className='hover:bg-blue-300 bg-amber-300  w-full text-center border-1 rounded-4xl p-2'>Book Appointment Now</button>
                    {/* </Link> */}

                </div>




            </div>

        </div>
    );
};

export default Details;