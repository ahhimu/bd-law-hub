import React, { Suspense, useState } from 'react';
import SingleLawer from './SingleLawer';
import { FiArrowRight } from 'react-icons/fi';
import Progress from './Progress';

const LawerContainer = ({ data }) => {
    // eikhane ekta stat thakte pare 
    const [show, setShow] = useState(false);
    const datah = show ? data : data.slice(0, 6);
    // console.log(datah);
    const handleToggle = () => {
        setShow(!show)
    }


    return (
        <section id="lawyer-section">
            <div>
                <h1 className='text-center font-bold text-3xl mt-25 mb-4'>Our Best Lawyers</h1>
                <p className='text-center w-8/12 mx-auto mb-8'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className='w-11/12 md:grid md:grid-cols-2 gap-8 mx-auto ' >
                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

                        {Array.isArray(datah) && datah.map((lawer) => (
                            <SingleLawer key={lawer.id} lawer={lawer} />
                        ))}
                    </Suspense>
                </div>


            </div>

            <div className="mt-10 text-center mb-15">
                <button
                    onClick={handleToggle}
                    className="btn bg-green-500 rounded-2xl text-white hover:text-black hover:bg-green-200">
                    Show {show ? "Less Lawer" : "More Lawer"}
                    <FiArrowRight className="ml-2" />
                </button>
            </div>


            <Progress></Progress>

        </section>
    );
};

export default LawerContainer;