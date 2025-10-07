import React, { createContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData, useLocation } from "react-router";
import Footer from "./Footer/Footer";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "./Utility/addToLocalStorage";
import Loader from "./Components/Loader/Loader";
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

  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <Header />

      <HandleUninstallContext value={handleUninstall}>
        <HandleInstallContext value={handleInstall}>
          <AppsContext value={apps}>
            {isNavigating && <Loader />}
            <Outlet />
          </AppsContext>
        </HandleInstallContext>
      </HandleUninstallContext>

      <Footer />
    </div>
  );
};

export default Root;
