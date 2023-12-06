import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Main from "../main";
import Product from "../product";
import main from "../main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/app" Component={main} />
      <Route path="/app/:id" Component={Product} />
      <Route path="/*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
};

export default AppRouter;
