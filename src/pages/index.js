import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import Header from "../components/Header";
import Wave from "../components/Wave";
import AboutCard from "../components/AboutCard";
import TechStack  from "../components/TechStack";
import "../styles/global.css";

const useStyles = makeStyles({
  profilePic: {
    borderRadius: "50%",
    height: "22em",
    width: "22em",
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "absolute",
    right: "22vw",
    top: "15vh",
    overflow: "hidden",
    boxShadow: "2em, 2em, 3em, #888888",
    zIndex: 0,
  },

  img: {
      marginTop: "-2em",
      width: "100%",
      boxShadow: "2em, 2em, 3em, #888888",
  },

  about: {
    position: "absolute",
    top: "20em",
    left: "20vw",
  }
});

export default function Home() {
  
  const classes = useStyles();

  return (
    <>
      <Wave />
      <Header />
      <div className={classes.profilePic}>
        <img alt="profile picture" src="/img/profilePic.jpg" className={classes.img}/>
      </div>
      <AboutCard className={classes.about}/>
      <TechStack />
    </>
  );
}
