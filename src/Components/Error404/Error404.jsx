import React from "react";
import { useNavigate } from "react-router";
import errorImg from "../../assets/error-404.png";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[1440px] mx-auto min-h-[200px] flex flex-col items-center my-20">
      <div>
        <img src={errorImg} alt="" />
      </div>
      <h3 className="text-center text-4xl lg:text-6xl font-bold mt-9 text-[#332a51]">
        Oops, page not found!
      </h3>
      <p className="text-center  my-9 text-gray-500">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="btn [background:linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default Error404;
