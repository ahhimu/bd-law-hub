import React from 'react';
import { FiAlertTriangle, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
      <section>
      <Navbar></Navbar>
          <div className="flex flex-col h-full">
            
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200 p-4">
        <div className=" w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-error text-white p-6 flex justify-center">
            <FiAlertTriangle size={50} />
          </div>

           <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">
              <Link to="/" className="btn bg-emerald-200 btn-lg">
                <FiHome className="mr-2" /> Back to Homepage
              </Link>
            </div>

          <div className="p-8 text-center">
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops!DUDE!</h1>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Where Is My Page ?</h1>
            <p className="text-xl mb-6 text-gray-600">
              We can't seem to find the page you're looking for
            </p>
            <div className='flex justify-center w-3/8 mx-auto'>
                  <img className='' src="https://i.ibb.co/gZqVKNkJ/6373669.jpg" alt="" />
            </div>
            


          
          </div>

          <div className="bg-base-300 p-4 text-center">
            <p className="text-sm text-gray-600">
              If you think this is a mistake, please contact support
            </p>
          </div>
        </div>
      </div>

       
    </div>

    </section>
    );
};

export default ErrorPage;