import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links=
    <>
    <li className="text-lg font-medium text-[#5f4726]"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg font-medium text-[#5f4726]"><NavLink to="/all-arts-crafts">All Art & Crafts</NavLink></li>
    <li className="text-lg font-medium text-[#5f4726]"><NavLink to="/about">About</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl lg:text-4xl">Art<span className="text-[#A79277]">Nest</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
        <button className="btn btn-ghost mr-3  text-white font-medium bg-[#A79277] lg:text-lg">
        <Link to="/login">
        Log In
        </Link>
        </button>
        <button className="btn btn-ghost  text-white font-medium bg-[#A79277] lg:text-lg">
          <Link to="/register"> Register
          </Link>
            </button>
        </div>
      </div>
    );
};

export default Navbar;