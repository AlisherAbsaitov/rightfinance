import React, { useState } from "react";
import "./css/adminLogin.css";
import { useTranslation } from "react-i18next";
import useStore from "../store/Store";

export default function AdminLogin() {
  const { t } = useTranslation();
  const setLogin = useStore((state) => state.setLogin);

  const [loginAndPassword, setLoginAndPassword] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginAndPassword((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    let hour = date.getHours()
    let day = date.getDate()
    let minut = date.getMinutes()
    let sekund = date.getSeconds()
   
    let time = (year*3600*3600*60) + ((month+1)*3600*60*60) + (day*3600*60) + ((hour+3)*3600) + ((minut)*60) + sekund;

    if (
      loginAndPassword.login === "Admin4598" &&
      loginAndPassword.password === "24032002"
    ) {
      localStorage.setItem("login", JSON.stringify(loginAndPassword));
      localStorage.setItem("sekund", JSON.stringify(time));
      setLogin(true);
    }
  };


  return (
    <div className="login__back">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="admin-Login__form" autoComplete="off">
        <h3 className="admin-login__title">{t("Admin")}</h3>
        <label className="admin-Login__label" htmlFor="username">
          {t("Login")}
        </label>
        <input
          className="admin-Login__input"
          type="text"
          name="login"
          placeholder="..."
          id="username"
          value={loginAndPassword.login}
          onChange={handleChange}
        />
        <label className="admin-Login__label" htmlFor="password">
          {t("Password")}
        </label>
        <input
          className="admin-Login__input"
          type="password"
          name="password"
          placeholder="..."
          id="password"
          value={loginAndPassword.password}
          onChange={handleChange}
        />
        <button
          className="admin-Login__button"
          type="button"
          onClick={handleLogin}
        >
          {t("Log In")}
        </button>
      </form>
    </div>
  );
}
