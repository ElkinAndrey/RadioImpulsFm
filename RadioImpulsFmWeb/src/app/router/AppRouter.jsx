import { AdminPage } from "@/pages/admin";
import { MainPage } from "@/pages/main";
import { path } from "@/shared/constants";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.main} element={<MainPage />} />
        <Route path={path.admin} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
