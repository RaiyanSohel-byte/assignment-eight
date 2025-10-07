import React, { useContext } from "react";
import { AppsContext } from "../../Root";
import App2 from "./App2";

const Apps = () => {
  const apps = useContext(AppsContext);
  return (
    <div className="bg-gray-100 pb-20">
      <div className="text-center max-w-[1440px] mx-auto py-[64px] lg:py-[80px]">
        <h3 className="text-[48px] font-bold">Our All Applications</h3>
        <p className="lg:text-[20px] text-sm text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto lg:flex justify-between">
        <h3 className="text-[24px] font-semibold mb-3 text-center lg:text-left">
          ({apps.length}) Apps Found
        </h3>
        <label htmlFor="Search">
          <div className="relative border border-gray-300 rounded-lg lg:w-[400px] w-[300px] mx-auto">
            <input
              type="text"
              id="Search"
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
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1440px] mt-5 mx-auto gap-4 ">
        {apps.map((app) => (
          <App2 app={app} key={app.id} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
