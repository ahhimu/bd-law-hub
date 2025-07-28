import { Link } from 'react-router';

const SingleLawer = ({lawer}) => {
    // console.log(lawer);
    const {AvilableBadge,experience,name,specialty,licenseNo,image} = lawer;
  
    



    return (
        <section>
<div className="flex justify-between gap-3 items-center bg-base-100 shadow-sm rounded-2xl hover:bg-blue-300 hover:shadow-lg transition duration-300 ease-in-out">
  <figure className='w-2/8 p-4 '>
    <img className='rounded-xl'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">

        <div className='space-x-2'>
                <span className='py-1 px-2 rounded-2xl text-green-500 bg-green-100'>{AvilableBadge}</span>
                <span className='p-2 rounded-2xl bg-blue-100 text-[#176AE5]'>{experience}+Years Experianced</span>
        </div>

    <h2 className="text-xl font-bold">{name}</h2>
    <p className='text-base font-semibold'>{specialty}</p>
        <p>&reg; License No:{licenseNo}</p>

    <div className="">
        <Link to={`/details/${lawer.id}`}>
      <button className="hover:w-10/12 hover:bg-emerald-400 inline-flex items-center justify-center w-full px-6 py-2 text-sm font-semibold text-center text-[#176AE5] no-underline align-middle transition-all duration-300 ease-in-out  border border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-[#176AE5] hover:border-[#176AE5] focus:shadow-xs focus:no-underline">View Details</button>
      </Link>
    </div>
  </div>
</div>


</section>
    );
};

export default SingleLawer;