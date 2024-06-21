import React from "react";
import Hero from "../hero/Hero";
import Infos from "../infos/Infos";
import Contact from "../contact/Contact";
import Ourwork from "../ourwork/Ourwork";

export default function Main() {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Infos />
        <Ourwork/>
        <Contact />
      </main>
    </React.Fragment>
  );
}
