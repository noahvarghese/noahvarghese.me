import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "../components/Header";
import Wave from "../components/Wave";

const useStyles = makeStyles({
    projects: {

    },
    container: {
        width: "60vw",
        height: "65vh",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto"
    },
    hr: {
        borderWidth: "2px"
    },
    header: {
        color: "white"
    }
});

export default function Projects() {

    const classes = useStyles();
    
    return (
        <>
            <Wave/>
            <Header/>
            <div className={classes.container}>
                <h1 className={classes.header}>MY PROJECTS</h1>
                <hr className={classes.hr}/>
                <div className={classes.projects}>

                </div>
            </div>
            
        </>
    )
}
