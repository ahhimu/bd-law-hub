import React from 'react';

const Hero = () => {
    return (
       <div
  className="hero w-11/12 h-[550px] mx-auto rounded-2xl overflow-hidden"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/Gfw128hc/banner-img-1.png)",
  backgroundSize: "cover",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-3/4">
      <h1 className="mb-5 text-4xl font-bold italic">Your Trusted Legal Partner for Comprehensive Legal
Solutions in Bangladesh</h1>
      <p className="mb-5">
As your trusted legal partner in Bangladesh, we provide expert legal services tailored to your unique needs. Whether you're seeking corporate legal guidance, personal legal support, or litigation assistance, our experienced team is committed to delivering reliable, transparent, and results-driven solutions every step of the way.
      </p>
      
    </div>
  </div>
</div>
    );
};

export default Hero;