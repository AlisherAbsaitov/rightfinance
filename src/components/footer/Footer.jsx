import React, { useState } from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../images/footerlogoimg.svg";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const {t}= useTranslation()
  const [year]= useState(new Date().getFullYear())
  return (
    <React.Fragment>
      <footer className="site-footer footer">
        <Container>
          <div className="footer__wrapper">
            <div className="footer__left-box">
              <a className="footer__logo-link" href="#home">
                <img
                  className="footer__logo-img"
                  src={logo}
                  alt="Right Finance's logo"
                  width={200}
                  height={80}
                />
              </a>
              <p className="footer__left-desc">
                {t("We work closely with our clients to understand their financial situation and develop a comprehensive plan that addresses their current and future needs.")}
              </p>
            </div>
            <div className="footer__right-box">
              <a className="footer__icon-link" href="#">
                <FaTelegramPlane className="footer__icon telegram" />
              </a>
              <a className="footer__icon-link" href="#">
                <FiInstagram className="footer__icon telegram" />
              </a>
              <a className="footer__icon-link" href="#">
                <FaFacebookF className="footer__icon facebook" />
              </a>
            </div>
          </div>
          <p className="footer__bottom">© RF {year}</p>
        </Container>
      </footer>
    </React.Fragment>
  );
}
