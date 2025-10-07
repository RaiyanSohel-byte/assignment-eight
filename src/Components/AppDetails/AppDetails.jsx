import React, { useContext } from "react";
import { AppsContext } from "../../Root";
import { useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";
import ratingIcon from "../../assets/icon-ratings.png";
import Stats from "./Stats";
const AppDetails = () => {
  const apps = useContext(AppsContext);
  const appIdString = useParams();
  const appId = parseInt(appIdString.id);
  const appsDetails = apps.find((app) => app.id === appId);

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
            <button className="btn btn-success mt-4 text-white">
              Install Now ({appsDetails.size} MB)
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
