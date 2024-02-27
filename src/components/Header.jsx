import React from "react";
import logo from "../assets/logo.png";
import './Header.css';
const Header = () => {
  return (
    <div className="flex  items-center  ">
      <img src={logo} alt="logo" className=" hover:cursor-pointer" />
      <div className="flex-grow"></div>
      <div className="grid grid-cols-6 gap-2  justify-self-end ">
        <p className="text-center">
            <span className="hover:cursor-pointer text-xs hover:v-symbol hover:font-bold">Consultation</span>
        </p>
        <p className="text-center">
        <span className="hover:cursor-pointer text-xs hover:font-bold">Medical weight loss</span>
        </p>
        <p className="text-center">
          <span className="hover:cursor-pointer text-xs hover:font-bold">Aging</span>
        </p>
        <p className="text-center">
        <span className="hover:cursor-pointer text-xs hover:font-bold">Sexual health</span>
      </p>
        <p className="text-center">
        <span className="hover:cursor-pointer text-xs hover:font-bold">Lab testing</span></p>
        <p className="text-center border-l-2 border-stone-400">
        <span className=" hover:cursor-pointer text-xs hover:font-bold">Contact us</span></p>
      </div>
      <div className="ml-auto">
        <button className="px-10 py-2 bg-green-500 text-white rounded-md transition-transform hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
};
export default Header;
