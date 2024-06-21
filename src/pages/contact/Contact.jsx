import React from "react";
import { Container } from "react-bootstrap";
import "./contact.css";
import { useTranslation } from "react-i18next";
import Maps from "./Maps";

export default function Contact() {
  const {t} = useTranslation()
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <Container>
          <h2 className="contact-title">{t("Contact US")}</h2>
          <div className="contact-wrapper">
            <div className="map">
              <Maps/>
            </div>
            <address className="contact-box__infos">
              <div className="contact-infos__box">
                <b className="contact-info">{t("Reach out to us")}</b>
                <a
                  className="contact-infos__link"
                  target="_blank"
                  rel="noreferrer" 
                  href="https://yandex.uz/maps/-/CDRJATKl"
                >
                  {t("Labzak street 64A, 100128, Tashkent, Uzbekistan")}
                </a>
              </div>
              <div className="contact-infos__box">
                <b className="contact-info">{t("Telephone")}</b>
                <a className="contact-infos__link" href="tel:+998337171770">
                  {t("+998337171770")}
                </a>
              </div>
              <div className="contact-infos__box">
                <b className="contact-info">{t("Email:")}</b>
                <a className="contact-infos__link" href="mailto:admin@rightfinance.info">
                {t("admin@rightfinance.info")}
                </a>
              </div>
            </address>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
