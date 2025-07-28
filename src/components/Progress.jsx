import React from 'react';
import CountUp from 'react-countup';

const Progress = () => {
    return (
               <section className="py-12 mb-16 bg-gray-50 rounded-lg w-11/12 mx-auto">
            <div className="text-center mb-12 ">
                <h2 className="text-3xl font-bold mb-4">We Provide Best Law Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. 
                </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
                <div className=" bg-black/50 p-6 rounded-lg shadow-md text-center">
                    <div className="flex items-center justify-center mb-3">
                         <img src="/success-doctor.png" alt="" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={199} duration={15} />+
                    </div>
                    <div className="text-gray-600">Total Lawyer</div>
                </div>


                <div className=" bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex items-center justify-center mb-3">
                     <img src="/success-review.png" alt="" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={467} duration={15} />+
                    </div>
                    <div className="text-gray-600">Total Reviews</div>
                </div>

                <div className=" bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex items-center justify-center mb-3">
                     <img src="/success-patients.png" alt="" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={1900} duration={15} />+
                    </div>
                    <div className="text-gray-600">Total Cases Initiated</div>
                </div>

                <div className=" bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex items-center justify-center mb-3">
                     <img src="/success-staffs.png" alt="" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={300} duration={15} />+
                    </div>
                    <div className="text-gray-600">Total Stuffs</div>
                </div>

            </div>
        </section>
    );
};

export default Progress;