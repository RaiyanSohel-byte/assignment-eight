import React from "react";
import logo from "../../assets/logo.png";
const Loader = () => {
  return (
    <div className="flex justify-center gap-3 items-center min-h-screen bg-gray-200">
      <h3 className="text-5xl font-bold  text-gray-400 text-center">LOADING</h3>
      <img className="w-[40px] h-[40px] animate-spin" src={logo} alt="" />{" "}
    </div>
  );
};

export default Loader;
