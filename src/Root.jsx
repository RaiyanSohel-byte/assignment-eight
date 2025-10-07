import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Footer/Footer";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "./Utility/addToLocalStorage";
export const AppsContext = createContext([]);
export const HandleInstallContext = createContext(() => {});
export const HandleUninstallContext = createContext(() => {});
const Root = () => {
  const apps = useLoaderData();

  const handleInstall = (data) => {
    addToLocalStorage(data);
  };
  const handleUninstall = (data) => {
    removeFromLocalStorage(data);
  };
  return (
    <div>
      <Header />

      <HandleUninstallContext value={handleUninstall}>
        <HandleInstallContext value={handleInstall}>
          <AppsContext value={apps}>
            <Outlet />
          </AppsContext>
        </HandleInstallContext>
      </HandleUninstallContext>

      <Footer />
    </div>
  );
};

export default Root;
