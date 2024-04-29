import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
const Navbar = () => {

  const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"light");
  useEffect(()=>{
      localStorage.setItem('theme',theme);
      const localTheme = localStorage.getItem('theme');
      document.querySelector('html').setAttribute('data-theme',localTheme);
  },[theme])

  const handleToggle=(e)=>{
    if(e.target.checked){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }

  }
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const links = (
    <>
      <li className="text-lg font-medium text-base-color-navbar dark:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium text-base-color-navbar dark:text-white">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="text-lg font-medium text-base-color-navbar dark:text-white">
        <NavLink to="/all-arts-crafts">All Art & Crafts</NavLink>
      </li>

      {user && (
        <>
          <li className="text-lg font-medium text-base-color-navbar dark:text-white">
            <NavLink to={`/my-arts-crafts/${user.email}`}>
              My Art & Craft List
            </NavLink>
          </li>
          <li className="text-lg font-medium text-base-color-navbar dark:text-white">
            <NavLink to={`/add-crafts/${user.email}`}>Add Craft</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast("You have successfully logged out");
        navigate("/");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 22 22"
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
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-2xl md:text-4xl">
          Art<span className="text-[#715329] dark:text-white">Nest</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleToggle}
          />
{theme==="light" ?
        
          <svg
            className="swap-off fill-current w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          :
        
          <svg
            className="swap-on fill-current w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>}
        </label>

        {user ? (
          <>
            <div className="dropdown dropdown-end ">
              <a className="my-anchor-element-id">
              <button
                className="btn-ghost  rounded-full w-9 h-9 lg:w-12 lg:h-12"
              >
                <img
                  src={user?.photoURL}
                  onTouchMove={user.displayName}
                  className="rounded-full w-9 h-9  ml-1 lg:w-12 lg:h-12 mr-1 lg:mr-3"
                  alt="user"
                />
              </button>
              </a>
              <Tooltip
                anchorSelect=".my-anchor-element-id"
                content={user.displayName}
                place="bottom"
                className="z-[20]"
              />
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2 z-[20] p-2 bg-[#f3f0ec] shadow  rounded-box w-36"
              >
                <li className="p-2">
                  <button className="btn btn-ghost text-base font-medium text-black">
                    {" "}
                    <Link to={`/user-profile/${user.displayName}`}>
                      My Profile
                    </Link>
                  </button>
                  <hr></hr>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost text-base font-medium text-black"
                  >
                    Log Out
                  </button>
                  <hr></hr>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button className="btn btn-ghost lg:ml-2 ml-1 mr-1 lg:mr-3  text-white font-medium bg-[#715329] text-sm lg:text-lg">
              <Link to="/login">Log In</Link>
            </button>
            <button className="btn btn-ghost  text-white font-medium bg-[#715329] text-sm lg:text-lg">
              <Link to="/register"> Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */
}
