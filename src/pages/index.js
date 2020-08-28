import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "../components/Header";
import Wave from "../components/Wave";
import AboutCard from "../components/AboutCard";
import Typography from '@material-ui/core/Typography';
import "../styles/global.css";
import Technologies from "../components/Technologies";

const useStyles = makeStyles({
  root: {
    maxWidth: "95vw",
    maxHeight: "100%",
    position: "relative",
    top: "10vh",
    bottom: 0,
    left: 0, 
    right: 0,
    margin: "auto"
  },
  me: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10vh"
  },
  imgContainer: {
      marginTop: "2em",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      flex: "1 1 0px"
  },
  title: {
      fontSize: 22,
  },
  container: {
    width: "70%",
    margin: "auto"
  },
  containerMobile: {
    width: "100%"
  }
});

export default function Home() {
  
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isDesktop = useMediaQuery('(min-width: 601px');

  return (
    <>
      <Header />
      <Wave />
      <div className={classes.root}>
        <h1>TEST</h1>
        <div className={classes.me}>
          <AboutCard/>
        </div>
        { isDesktop && 
          <div className={classes.container}>
            <Typography className = {classes.title} color = "textSecondary"gutterBottom> Tools and Technology I Have Used </Typography> 
              <div className={classes.imgContainer}>
                <Technologies />
              </div>
          </div>
        }
        { isMobile && 
          <div className={classes.containerMobile}>
            <Typography className = {classes.title} color = "textSecondary"gutterBottom> Tools and Technology I Have Used </Typography> 
              <div className={classes.imgContainer}>
                <Technologies />
              </div>
          </div>  
        }
      </div>
    </>
  );
}
