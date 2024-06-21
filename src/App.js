import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./utils";
import Main from "./pages/main/Main";
import Admin from "./Admin/Admin";
import AdminLogin from "./Admin/AdminLogin";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import useStore from "./store/Store";

export default function App() {
  const [modal, setModal] = useState(false);
  const setLogin = useStore((state) => state.setLogin);
  const login = useStore((state) => state.login);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <AuthContext.Provider value={{ modal, setModal }}>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
          </AuthContext.Provider>
        }
      />

      {login ? (
        <Route path="/admin/*" element={<Admin />} />
      ) : (
        <Route path="/admin/*" element={<AdminLogin />} />
      )}
    </Routes>
  );
}
