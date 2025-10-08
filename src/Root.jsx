import React, { createContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData, useLocation } from "react-router";
import Footer from "./Footer/Footer";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "./Utility/addToLocalStorage";
import Loader from "./Components/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
export const AppsContext = createContext([]);
export const HandleInstallContext = createContext(() => {});
export const HandleUninstallContext = createContext(() => {});
const Root = () => {
  const apps = useLoaderData();

  const handleInstall = (data) => {
    addToLocalStorage(data);
    toast.success(`${data.title} installed successfully!`);
  };
  const handleUninstall = (data) => {
    removeFromLocalStorage(data);
    toast.error(`${data.title} uninstalled!`);
  };

  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />

      <HandleUninstallContext.Provider value={handleUninstall}>
        <HandleInstallContext.Provider value={handleInstall}>
          <AppsContext.Provider value={apps}>
            {isNavigating && <Loader />}
            <Outlet />
          </AppsContext.Provider>
        </HandleInstallContext.Provider>
      </HandleUninstallContext.Provider>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
