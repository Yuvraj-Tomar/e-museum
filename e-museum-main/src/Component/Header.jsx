import React, { useEffect, useState } from "react";
import logo from "../assests/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  }, [toggle]);
  return (
    <nav
      className={`flex items-center z-50 justify-around min-h-[10vh] transition-all ease-in-out duration-300   ${
        toggle
          ? "fixed w-full bg-white text-black shadow-md"
          : "absolute w-full text-white "
      }`}
    >
      <div className="flex items-center space-x-3">
        <img className="w-[70px]" src={logo} alt="" />
        <h3 className=" font-fontMOnte font-bold ">E-Sangrahalaya</h3>
      </div>

      <ul className="flex items-center space-x-5 font-fontMOnte font-semibold">
        <a href="#home">
          <li>Home</li>
        </a>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        {!isAuthenticated && (
          <button
            onClick={() => loginWithRedirect()}
            className="hover:shadow-lg border rounded-lg bg-gray-300 px-4 py-2 cursor-pointer"
          >
            SignUp
          </button>
        )}
        {isAuthenticated && <h1>Hey {user.name}</h1>}
        {isAuthenticated && (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="hover:shadow-lg border rounded-lg bg-gray-300 px-4 py-2 cursor-pointer"
          >
            logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Header;
