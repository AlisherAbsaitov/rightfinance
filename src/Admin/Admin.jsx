import React, { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";
import AdminMain from "./pages/AdminMain";
import AdminNavbar from "./pages/AdminNavbar";
import "./css/AdminAll.css";
import useStore from "../store/Store";
export default function Admin() {
  let [local] = useState(JSON.parse(localStorage.getItem("sekund")));
  let setLogin = useStore((state) => state.setLogin);
  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let hour = date.getHours();
    let day = date.getDate();
    let minut = date.getMinutes();
    let sekund = date.getSeconds();
    let time =
      year * 3600 * 3600 * 60 +
      (month + 1) * 3600 * 60 * 60 +
      day * 3600 * 60 +
      hour * 3600 +
      minut * 60 +
      sekund;
    if (time > local) {
      setLogin(false);
      localStorage.removeItem("login");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="admin-wrapper">
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<AdminMain />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
