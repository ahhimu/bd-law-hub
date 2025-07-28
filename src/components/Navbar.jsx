import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const navPath = [
    {
      to: "/",
      text: "Home"
    },
    {
      to: "/booking",
      text: "Bookings"
    },
    {
      to: "/blogs",
      text: "Blogs"
    },
    {
      to: "/contactus",
      text: "Contact Us"
    }
  ];

  return (
    <div className="navbar bg-base-100 px-4 md:px-8 lg:px-12 min-h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navPath?.map((item, index) => (
              
                <li key={index}>
                  <ActiveLink to={item.to}>{item.text}</ActiveLink>
                </li>
            

            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div>
            <figure>
              <img src="/logo.png" alt="Logo" />
            </figure>
          </div>
          <div>
            <Link to="/" className="font-bold text-xl">
              Law.BD
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navPath?.map(item => (
            <li key={item.to}>
              <ActiveLink to={item.to}>{item.text}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/" className="btn px-5 py-2 text-white rounded-4xl bg-[#0EA106]">
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
