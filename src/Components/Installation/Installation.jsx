import React, { useContext, useState } from "react";

import { FaCaretDown } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { GoStarFill } from "react-icons/go";
import { getStoredApp } from "../../Utility/addToLocalStorage";
import { HandleUninstallContext } from "../../Root";

const Installation = () => {
  const [installs, setInstalls] = useState(getStoredApp());
  const [sort, setSort] = useState("Sort By Downloads");
  const handleUninstall = useContext(HandleUninstallContext);
  const handleClickUninstall = (app) => {
    handleUninstall(app);
    setInstalls((prev) => prev.filter((inst) => inst.id !== app.id));
  };
  const handleSort = (type) => {
    setSort(type);
    if (type === "High-Low") {
      const sortedHighLow = [...installs].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalls(sortedHighLow);
    }
    if (type === "Low-High") {
      const sortedHighLow = [...installs].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalls(sortedHighLow);
    }
  };
  return (
    <div className="bg-gray-100 pb-20">
      <div className="text-center max-w-[1440px] mx-auto py-[64px] lg:py-[80px]">
        <h3 className="text-[48px] font-bold">Your Installed Apps</h3>
        <p className="lg:text-[16px] text-sm text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto lg:flex justify-between">
        <h3 className="text-[24px] font-semibold mb-3 text-center lg:text-left">
          ({installs.length}) Apps Found
        </h3>
        <div className="flex justify-center lg:justify-start">
          <div className="dropdown dropdown-center">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-outline border-gray-300 text-gray-500 bg-white m-1"
            >
              {sort} <FaCaretDown size={28} />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content w-48 menu bg-base-100 rounded-box z-1  p-2 shadow-md"
            >
              <li>
                <a onClick={() => handleSort("Low-High")}>Low-High</a>
              </li>
              <li>
                <a onClick={() => handleSort("High-Low")}>High-Low</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="my-5">
          {installs.map((install) => (
            <div className="rounded-[4px] bg-white p-4 flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-[80px] h-[80px] rounded-[8px]"
                    src={install.image}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[20px] mb-4 font-semibold">
                    {install.title}
                  </h3>
                  <div className="flex gap-4">
                    <p className="flex items-center text-[#00D390] font-medium">
                      <HiDownload /> {(install.downloads / 1000000).toFixed(2)}M
                    </p>
                    <p className="flex items-center text-[#FF8811] font-medium">
                      <GoStarFill /> {install.ratingAvg}
                    </p>
                    <p className="text-gray-400">{install.size}MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleClickUninstall(install)}
                  className="btn btn-success btn-xs lg:btn-md text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
