import React from "react";
import Header from "../components/Header";
import Wave from "../components/Wave";
import AboutCard from "../components/AboutCard";
import TechStack  from "../components/TechStack";
import "../styles/global.css";
import "../styles/home.css"

export default function Home() {

  return (
    <>
      <Wave />
      <Header />
      <div className="profilePic">
        <img alt="profile picture" src="/img/profilePic.jpg"/>
      </div>
      <AboutCard/>
      <TechStack />
    </>
  );
}
