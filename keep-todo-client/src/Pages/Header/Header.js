import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/logo/keep-notes-logo.png";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const logOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }


  return (
    <div className=" shadow-xl">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button>Item 1</button>
              </li>
              <li tabIndex={0}>
                <button className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </button>
                <ul className="p-2">
                  <li>
                    <button>Submenu 1</button>
                  </li>
                  <li>
                    <button>Submenu 2</button>
                  </li>
                </ul>
              </li>
              <li>
                <button>Item 3</button>
              </li>
            </ul>
          </div>

          <Link to={"/"}>
            <button className="ml-0 btn btn-ghost normal-case text-xl">
              <img className="w-10 mr-1 rounded-full" src={logo} alt="" />
              Keep <span className="ml-1 text-amber-500">ToDo's</span>
            </button>
          </Link>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="my-1 mr-4 flex justify-center items-center">
              <p className="mr-3 font-semibold">{user.email}</p>
              <button onClick={logOut} className=" btn btn-outline btn-info">
                LogOut
              </button>
            </div>
          ) : (
            <div className="my-1 mr-4">
              <Link to={"/login"}>
                <button className="btn btn-outline btn-info">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-outline btn-warning ml-3">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
