import React from "react";
import { NavLink } from "react-router";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import hero from "../../assets/hero.png";
const Home = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto pt-[40px] lg:pt-[80px] ">
        <div className="text-center p-3 lg:p-0">
          <h3 className="text-4xl lg:text-[72px] mb-4">
            We Build <br />
            <span className="font-extrabold bg-gradient-to-r from-[#8351ea] to-[#9c66f0] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h3>
          <p className="text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <div>
            <NavLink
              to="https://play.google.com/store/apps?hl=en"
              target="_blank"
              className="btn lg:btn-xl lg:text-[20px] font-semibold shadow-sm"
            >
              <img className="w-[32px] h-[32px] " src={playstore} alt="" />{" "}
              Google Play
            </NavLink>
          </div>
          <div>
            <NavLink
              to="https://www.apple.com/app-store/"
              target="_blank"
              className="btn lg:btn-xl lg:text-[20px] font-semibold shadow-sm"
            >
              <img className="w-[32px] h-[32px]" src={appstore} alt="" /> App
              Store
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#6a34e5] to-[#965af0] text-white py-[64px] lg:py-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-center text-3xl lg:text-[48px] font-bold mb-10">
            Trusted by Millions, Built for You
          </h3>
          <div className="lg:flex justify-around text-center">
            <div className="mb-15">
              <p className="text-[1rem]">Total Downloads</p>
              <p className="text-[64px] font-extrabold">29.4M</p>
              <p className="text-[1rem]">21% more than last month</p>
            </div>

            <div className="mb-15">
              <p className="text-[1rem]">Total Reviews</p>
              <p className="text-[64px] font-extrabold">906K</p>
              <p className="text-[1rem]">46% more than last month</p>
            </div>
            <div className="mb-15">
              <p className="text-[1rem]">Active Apps</p>
              <p className="text-[64px] font-extrabold">132+</p>
              <p className="text-[1rem]">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
