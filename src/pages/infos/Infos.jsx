import React from "react";
import { Container } from "react-bootstrap";
import videoen from "../../videos/infosonebackeng.mp4";
import videouz from "../../videos/infosonebackuz.mp4";
import videoru from "../../videos/infosonebackru.mp4";
import "./infos.css";
import { useTranslation } from "react-i18next";
export default function Infos() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="infos">
        <Container>
          <div className="infos-wrapper">
            <div className="infos__left-video-box">
              {t("check") === "en" ? (
                <video
                  className="infos__video"
                  src={videoen}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : t("check") === "uz" ? (
                <video
                  className="infos__video"
                  src={videouz}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              ) : (
                <video
                  className="infos__video"
                  src={videoru}
                  autoPlay
                  loop
                  muted={"true"}
                  width={"100%"}
                ></video>
              )}
            </div>
            <div className="infos__right">
              <div className="infos-title__box">
                <h2 className="infos-title">
                  {t("Creating the Honest Trust value")}
                </h2>
              </div>
              <p className="infos-desc">
                {t(
                  "Right Finance consulting firm use own expertise and financial industry knowledge to analyze financial data and market, identify opportunities, and recommend strategies that maximize returns and minimize risks and Provide risk management solutions to clients."
                )}
              </p>
              <p className="infos-desc">
                {t(
                  "Right Finance consulting firm offer a variety of services that can help individuals and businesses achieve own financial goals."
                )}
              </p>
              <p className="infos-desc">
                {t(
                  "With our specialized knowledge and experience, are a valuable resource for anyone seeking to improve their financial position."
                )}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
