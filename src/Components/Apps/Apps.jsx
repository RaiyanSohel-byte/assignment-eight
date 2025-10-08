import React, { useContext, useState } from "react";
import { AppsContext } from "../../Root";
import App2 from "./App2";
import appErrorImg from "../../assets/app-error.png";
import logo from "../../assets/logo.png";
const Apps = () => {
  const apps = useContext(AppsContext);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };
  return (
    <>
      <div className="bg-gray-100 pb-20">
        <div className="text-center max-w-[1440px] mx-auto py-[64px] lg:py-[80px]">
          <h3 className="text-[48px] font-bold">Our All Applications</h3>
          <p className="lg:text-[20px] text-sm text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto lg:flex justify-between">
          <h3 className="text-[24px] font-semibold mb-3 text-center lg:text-left">
            ({filteredApps.length}) Apps Found
          </h3>
          <label htmlFor="Search">
            <div className="relative border border-gray-300 rounded-lg lg:w-[400px] w-[300px] mx-auto">
              <input
                type="text"
                id="Search"
                value={search}
                onChange={(e) => handleSearch(e)}
                className="mt-0.5 w-full px-5 py-2 shadow-sm sm:text-sm"
                placeholder="Search App"
              />

              <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                <button
                  type="button"
                  aria-label="Submit"
                  className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </label>
        </div>
        {isSearching ? (
          <div className="flex justify-center gap-3 items-center my-20">
            <h3 className="text-5xl font-bold  text-gray-400 text-center">
              LOADING
            </h3>
            <img className="w-[40px] h-[40px] animate-spin" src={logo} alt="" />{" "}
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mt-5 mx-auto gap-4 ">
            {!isSearching &&
              filteredApps.map((app) => <App2 app={app} key={app.id} />)}
          </div>
        ) : (
          <div className="lg:w-[1440px] mx-auto min-h-[200px] flex flex-col items-center my-20">
            <div>
              <img src={appErrorImg} alt="" />
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
                onClick={() => setSearch("")}
                className="btn [background:linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white"
              >
                Show All Apps
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;
