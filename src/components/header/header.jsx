import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import logo from "../../images/logoimg.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import { Button, Dropdown } from "antd";
import arrowDown from "../../images/icons/dorpdown.svg";
import i18n from "../../locale/i18next";
import useStore from "../../store/Store";
import Module from "../../UI/module/Module";
import CreatUser from "../creatuser/CreatUser";
import { AuthContext } from "../../utils";
export default function Header() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const setLang = useStore((state) => state.setLang);
  setLang(i18n.language);
  const {setModal } = useContext(AuthContext);
  const items = [
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("uz");
          }}
        >
          UZ
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          RU
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </div>
      ),
    },
  ];
  if (t("check") === "uz") {
    items.splice(0, 1);
  }
  if (t("check") === "ru") {
    items.splice(1, 1);
  }
  if (t("check") === "en") {
    items.splice(2, 1);
  }

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <header className="site-header">
        <Module>
          <CreatUser />
        </Module>
        <Container>
          <div className="header-wrapper">
            <Link to="/">
              <img
                className="logo-img"
                src={logo}
                alt="Right Finance's logo"
                width={210}
                height={74}
              />
            </Link>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">
                    {t("Home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#infos">
                    {t("What we do")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    {t("Contact")}
                  </a>
                </li>
              </ul>
            </nav>
            <div style={{ display: "flex" }}>
              <button className="header-btn" onClick={() => setModal(true)}>
                {t("Request the call")}
              </button>
              <Dropdown
                menu={{
                  items: items,
                }}
                key={{ items }}
                placement="bottom"
                className={"dropdown"}
              >
                <Button className="arrowDown" style={{ textTransform: "uppercase" }}>
                  {t("check")} <img src={arrowDown} alt={"dropdown"}/>
                </Button>
              </Dropdown>
            </div>
            <RxHamburgerMenu onClick={toggleMenu} className="header-burger" />
          </div>
        </Container>
        <div
          className={`left-box ${
            show ? "not-hide-burger-nav" : "hide-burger-nav"
          }`}
        >
          <nav className="burger-nav">
            <IoCloseSharp onClick={toggleMenu} className="close" />
            <div>
              <a href="/">
                <img
                  src={logo}
                  alt="Right Finance's logo"
                  width={130}
                  height={60}
                />
              </a>
              <ul className="burger-list">
                <li className="burger-item">
                  <a className="burger-link" href="#hero">
                    {t("Home")}
                  </a>
                </li>
                <li className="burger-item">
                  <a className="burger-link" href="#infos">
                    {t("What we do")}
                  </a>
                </li>
                <li className="burger-item">
                  <a className="burger-link" href="#contact">
                    {t("Contact")}
                  </a>
                </li>
              </ul>
              <button
                className="header-burger-btn"
                onClick={() => setModal(true)}
              >
                {t("Request the call")}
              </button>
              <Dropdown
                menu={{
                  items: items,
                }}
                key={{ items }}
                placement="bottom"
                className={"dropdown burger-dropdown"}
              >
                <Button style={{ textTransform: "uppercase" }}>
                  {t("check")} <img src={arrowDown} alt="dropdown" />
                </Button>
              </Dropdown>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
