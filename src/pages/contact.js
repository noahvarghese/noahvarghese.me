import React from 'react'
import Header from "../components/Header";
import Wave from "../components/Wave";
import ContactForm from "../components/ContactForm";
import {
    makeStyles
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
      width: "100%",
      top: "30%",
      bottom: 0,
      left: 0, 
      right: 0,
      margin: "auto",
    },
    rootMobile: {
        position: "absolute",
        height: "70%",
        overflowX: "hidden",
    }
}));

export default function Contact() {

    const classes = useStyles();
    const isActive = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <Wave/>
            <Header/>

            { isActive && 
                <div className={classes.rootMobile}>
                    <ContactForm/>
                </div>
            }

            { ! isActive && 
                <>
                    <div className={classes.root}>
                        <ContactForm/>
                    </div>
                </>
            }
        </>
    );
}
