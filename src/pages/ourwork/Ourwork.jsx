import React from "react";
import { Container } from "react-bootstrap";
import "./Ourwork.css";
import videotwoen from "../../videos/infostwoeng.mp4";
import videotwouz from "../../videos/infostwouz.mp4";
import videotworu from "../../videos/infostworu.mp4";

import videothreeen from "../../videos/infosthreeeng.mp4";
import videothreeru from "../../videos/infosthreeru.mp4";
import videothreeuz from "../../videos/infosthreeuz.mp4";

import videofouren from "../../videos/infosfoureng.mp4";
import videofourru from "../../videos/infosfourru.mp4";
import videofouruz from "../../videos/infosfouruz.mp4";
import { useTranslation } from "react-i18next";
export default function Ourwork() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="work" id="infos">
        <Container>
          <h2 className="work__title">{t("WHAT WE DO")}</h2>
          <div className="work__box">
            <div className="work__infos">
              <h3 className="work__box-title">* {t("The AIM")}</h3>
              <p className="work__desc">
                {t(
                  "We care the beginners and experienced clients to choose the realand reliable companies And We offer clients big picture analysisof market . We help clients create a financial plan to reach different types of goals. We help to reach different milestones inyour financial life."
                )}
              </p>
            </div>
            <div className="work__video-box work__video-box--one">
            {t("check") === "en" ? (
                <video
                  className="infos__video"
                  src={videotwoen}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : t("check") === "uz" ? (
                <video
                  className="infos__video"
                  src={videotwouz}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : (
                <video
                  className="infos__video"
                  src={videotworu}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              )}
            </div>
          </div>
          <div className="work__box work__box---two">
            <div className="work__video-box work__video-box--two">
            {t("check") === "en" ? (
                <video
                  className="infos__video"
                  src={videothreeen}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : t("check") === "uz" ? (
                <video
                  className="infos__video"
                  src={videothreeuz}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : (
                <video
                  className="infos__video"
                  src={videothreeru}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              )}
            </div>
            <div className="work__infos work__infos-two">
              <h3 className="work__box-title">
                * {t("Account Setup & Support")}
              </h3>
              <p className="work__desc">
                {t(
                  "We assist clients set up their accounts with real and reliable companies. We always care and support our clients to help and to resolve their questions and problems. Funding the account and start trading with the assistance of our technical analysis, signals, and market view."
                )}
              </p>
            </div>
          </div>
          <div className="work__box">
            <div className="work__infos work__infos-one">
              <h3 className="work__box-title">* {t("Risk Management")} </h3>
              <p className="work__desc">
                {t(
                  "We offer clients the risk management techniques and in same time we follow up clients and help them to make profitable trades and manage their balance sheets, as well as to reduce their risk and maximize profitability."
                )}
              </p>
            </div>
            <div className="work__video-box work__video-box--one">
            {t("check") === "en" ? (
                <video
                  className="infos__video"
                  src={videofouren}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : t("check") === "uz" ? (
                <video
                  className="infos__video"
                  src={videofouruz}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : (
                <video
                  className="infos__video"
                  src={videofourru}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              )}
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
