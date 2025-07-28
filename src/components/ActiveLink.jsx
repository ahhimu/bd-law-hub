import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? " bg-amber-100 border-sky-100 font-bold text-[#0EA106]" : "font-bold"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;