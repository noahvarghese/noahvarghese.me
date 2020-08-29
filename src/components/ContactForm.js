import React, { useState } from 'react'
import clsx from 'clsx';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import {
    makeStyles
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 800,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "4em",
    },
    rootMobile: {
        margin: 'auto',
        paddingTop: "1em",
        marginLeft: "1%",
        marginRight: "1%",
        marginBottom: "1%",
        zIndex: 1
    },
    rootLandscape: {
        top: "20vh"
    },
    form: {
        marginRight: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        '& .MuiTextField-root': {
            margin: spacing(1),
        },
    },
    row: {
        marginLeft: "2em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    formMobile: {
        backgroundColor: "rgba(255,255,255, 0.7)",
        padding: "1em",
        height: "100%",
        '& .MuiTextField-root': {
            marginTop: spacing(1),
            marginBottom: spacing(1),
        },
        zIndex: 2,
    },
    rowMobile: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    portraitMobileTitle: {
        marginLeft: "1em"
    }
}));

export default function ContactForm() {

    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    let [error, setError] = useState("");
    let [submitting, setSubmitting] = useState("");


    const sendEmail = async (event) => {

        event.preventDefault();
        
        const body = 'From: ' + fname + " " + lname + '\n\nEmail: ' + email + '\n\nMessage: ' + message;

        const response = await fetch("https://chestnut-shrimp-6053.twil.io/send-email", {
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: new URLSearchParams({ email, body }).toString(),
        });

        if (response.status === 200) {
            setError(null);
            setSubmitting(false);
            setFname("");
            setLname("");
            setEmail("");
            setMessage("");
        } else {
            const json = await response.json()
            setError(json.error);
            setSubmitting(false);
        }

    }

    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    const isMobile = useMediaQuery('(max-width: 812px)');

    return (
        <Card className={ clsx((isMobile ? classes.rootMobile : classes.root), shadowStyles.root) }>
            <Typography variant="h5" component="h2" className={classes.portraitMobileTitle}>Contact</Typography>
            <form method="POST" action="https://chestnut-shrimp-6053.twil.io/send-email" className={classes.formMobile}>
                <TextField required id="fname" label="First Name" variant="outlined" value={fname} onChange={(e) => {setFname(e.target.value)}} fullWidth/>
                <TextField required id="lname" label="Last Name" variant="outlined" value={lname} onChange={(e) => {setLname(e.target.value)}}  fullWidth/>
                <TextField required id="email" label="Email" variant="outlined" value={email} onChange={(e) => {setEmail(e.target.value)}}  fullWidth />
                <TextField required id="message" label="Message" variant="outlined" value={message} onChange={(e) => {setMessage(e.target.value)}}  multiline rows={5} fullWidth />
                <div className={ isMobile ? classes.rowMobile : classes.row }>
                    <Button type="reset" color="secondary" size="large">Clear</Button>
                    <Button type="submit" color="primary" size="large" onClick={sendEmail}>Submit</Button>
                </div>
            </form>
        </Card>
    )
}
