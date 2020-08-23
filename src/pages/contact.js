import React, { Component } from 'react'
import Header from "../components/Header";
import Wave from "../components/Wave";
import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { TextField, createMuiTheme } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from "gatsby";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#00b0ff",
        }
    }
});

const useStyles = makeStyles({
    root: {
        padding: "2em",
        width: "39em",
        height: "40em",
        display: 'flex',
        flexWrap: 'wrap',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0, 
        right: 0,
        margin: "auto"
    },
    form: {
        marginRight: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        },
    },
    row: {
        marginLeft: "2em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    imageContainer: {
        margin: "auto"
    },
    image: {
        fontSize: "2em",
        marginTop: "0.5em",
        marginRight: "0.5em",
        marginLeft: "0.5em",
        color: "#888888",
        '&:hover': {
            color: "black"
        }
    }
});

export default function Contact() {

    const classes = useStyles();

    return (
        <>
            <Wave/>
            <Header/>
            <Card className={classes.root}>
                <Typography variant="h5" component="h2">Contact</Typography>
                <form method="POST" action="" className={classes.form}>
                    <TextField required id="fname" label="First Name" variant="outlined" fullWidth/>
                    <TextField required id="lname" label="Last Name" variant="outlined" fullWidth/>
                    <TextField required id="email" label="Email" variant="outlined" fullWidth />
                    <TextField required id="message" label="Message" variant="outlined" multiline rows={5} fullWidth />
                    <div className={classes.row}>
                        <Button type="reset" color="secondary" size="large">Clear</Button>
                        <Button type="submit" color="primary" size="large">Submit</Button>
                    </div>
                </form>
                <div className={classes.imageContainer}>
                    <Link to="https://github.com/noahvarghese"><GitHubIcon className={classes.image}/></Link>
                    <Link to="https://linkedin.com/in/varghese-noah/"><LinkedInIcon className={classes.image}/></Link>
                    
                </div>
            </Card>
        </>
    );
}
