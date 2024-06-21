import React from "react";
import { useTranslation } from "react-i18next";
import herobackvideoeng from "../../videos/herobackeng.mp4";
import herobackvideouz from "../../videos/herobackuz.mp4";
import herobackvideoru from "../../videos/herobackru.mp4";
import "./hero.css";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="hero-box">
        <section className="hero" id="hero">
          {t("check") === "en" ? (
            <video
              autoPlay
              loop
              muted={"true"}
              width={"100%"}
              src={herobackvideoeng}
              height={"100%"}
            ></video>
          ) : t("check")==="uz"?(
            <video
              autoPlay
              loop
              muted={"true"}
              width={"100%"}
              src={herobackvideouz}
              height={"100%"}
            ></video>
          ):(
            <video
              autoPlay
              loop
              muted={"true"}
              width={"100%"}
              src={herobackvideoru}
              height={"100%"}
            ></video>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}
