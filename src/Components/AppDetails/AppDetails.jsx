import React, { useContext, useState } from "react";
import { AppsContext, HandleInstallContext } from "../../Root";
import { NavLink, useNavigate, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";
import ratingIcon from "../../assets/icon-ratings.png";
import Stats from "./Stats";
import { getStoredApp } from "../../Utility/addToLocalStorage";
import errorImg from "../../assets/app-error.png";

const AppDetails = () => {
  const apps = useContext(AppsContext);
  const appIdString = useParams();
  const appId = parseInt(appIdString.id);
  const appsDetails = apps.find((app) => app.id === appId);
  const [installs, setInstalls] = useState(getStoredApp());
  const handleInstall = useContext(HandleInstallContext);
  const navigate = useNavigate();

  if (!appsDetails) {
    return (
      <div className="lg:w-[1440px] mx-auto min-h-[200px] flex flex-col items-center my-20">
        <div>
          <img src={errorImg} alt="" />
        </div>
        <h3 className="text-center text-4xl lg:text-6xl font-bold mt-9 text-[#332a51]">
          OPPS!! APP NOT FOUND
        </h3>
        <p className="text-center  my-9 text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/apps")}
            className="btn [background:linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white"
          >
            Show All Apps
          </button>
        </div>
      </div>
    );
  }

  const isInstalled = installs.some((app) => app.id === appsDetails.id);

  const handleClick = () => {
    if (!isInstalled) {
      handleInstall(appsDetails);
      setInstalls((prev) => [...prev, appsDetails]);
    }
  };

  return (
    <div className="bg-gray-100 py-[80px]">
      <div className="max-w-[1440px] mx-auto lg:flex gap-10 border-b border-gray-300 pb-8">
        <div>
          <img
            className="w-[350px] h-[350px] mx-auto"
            src={appsDetails.image}
            alt=""
          />
        </div>
        <div>
          <div className="border-b lg:w-[1050px] border-gray-300 pb-4 text-center lg:text-left my-5 lg:my-0">
            <h3 className="text-[32px] font-bold">{appsDetails.title}</h3>
            <p className="text-[20px] text-gray-500">
              Developed by{" "}
              <span className="text-[#7a41e9]">{appsDetails.companyName}</span>
            </p>
          </div>
          <div className="lg:flex pt-5 gap-6 text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-3">
                {" "}
                <img src={downloadIcon} alt="" />
              </div>
              <p className="text-[1rem] text-gray-500">Downloads</p>
              <p className="text-[40px] font-extrabold">
                {appsDetails.downloads / 1000000}M
              </p>
            </div>
            <div className="mb-6">
              <div className="flex justify-center mb-3">
                {" "}
                <img src={ratingIcon} alt="" />
              </div>
              <p className="text-[1rem] text-gray-500">Average Ratings</p>
              <p className="text-[40px] font-extrabold">
                {appsDetails.ratingAvg}
              </p>
            </div>
            <div className="mb-6">
              <div className="flex justify-center mb-3">
                {" "}
                <img src={reviewIcon} alt="" />
              </div>
              <p className="text-[1rem] text-gray-500">Total Reviews</p>
              <p className="text-[40px] font-extrabold">
                {(appsDetails.reviews / 1000).toFixed(1)}K
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleClick}
              disabled={isInstalled}
              className="btn btn-success mt-4 text-white"
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${appsDetails.size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto border-b border-gray-300">
        <Stats appsDetails={appsDetails} />
      </div>
      <div className="max-w-[1440px] mx-auto  py-8 px-4 lg:px-0">
        <h3 className="text-[24px] font-bold mb-5 text-center lg:text-left">
          Description
        </h3>
        <p className="text-center lg:text-left text-gray-400">
          {appsDetails.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
