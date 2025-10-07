import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Footer/Footer";
import { addToLocalStorage } from "./Utility/addToLocalStorage";
export const AppsContext = createContext([]);
export const HandleInstallContext = createContext(() => {});

const Root = () => {
  const apps = useLoaderData();
  // const [install, setInstall] = useState([]);

  const handleInstall = (data) => {
    addToLocalStorage(data);
  };
  return (
    <div>
      <Header />

      <HandleInstallContext value={handleInstall}>
        <AppsContext value={apps}>
          <Outlet />
        </AppsContext>
      </HandleInstallContext>

      <Footer />
    </div>
  );
};

export default Root;
