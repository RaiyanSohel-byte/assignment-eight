import React, { createContext } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Footer/Footer";
export const AppsContext = createContext([]);
const Root = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Header />
      <AppsContext value={apps}>
        <Outlet />
      </AppsContext>
      <Footer />
    </div>
  );
};

export default Root;
