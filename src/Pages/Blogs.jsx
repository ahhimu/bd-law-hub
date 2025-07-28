import React from 'react';
import { useLoaderData } from 'react-router-dom'; 

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className='mb-15 mt-5 p-5 bg-green-200 space-y-4'>
      {blogs.map((blog, index) => (
        <div key={index} className="collapse collapse-arrow border border-base-300 bg-white rounded-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold bg-amber-200">
            {blog.question}
          </div>
          <div className="collapse-content text-sm bg-fuchsia-300">
            {blog.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
