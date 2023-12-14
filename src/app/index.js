import { useCallback, useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useSelector from "../hooks/use-selector";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import Login from "./login";
import Profile from "./profile";

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function App() {
  const activeModal = useSelector((state) => state.modals.name);
  const isAuth = useSelector((state) => state.login.isAuth);

  return (
    <>
      <Routes>
        <Route path={""} element={<Main />} />
        <Route path={"/articles/:id"} element={<Article />} />
        {/* {!isAuth && <Route path={"/login"} element={<Login />} />} */}
        <Route path={"/login"} element={<Login />} />
        {isAuth && <Route path={"/profile"} element={<Profile />} />}
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>

      {activeModal === "basket" && <Basket />}
    </>
  );
}

export default App;
