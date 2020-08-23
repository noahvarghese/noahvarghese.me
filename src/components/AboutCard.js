import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Typography, Avatar, Link } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "40em",
        position: "absolute",
        top: "18em",
        left: "20vw",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
    },
    pos: {
        fontSize: 18,
        marginBottom: 12,
    },
    avatar: {
      backgroundColor: "#2196f3",
    },
    link: {
        color: "#2196f3",
        fontFamily: "Roboto",
        '&:hover': {
            color: "black",
            cursor: "pointer",
            textDecoration: "none"
        }
    }
});

export default function AboutCard() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return ( 
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Noah" className={classes.avatar}>N</Avatar>
                }
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>About Me</Typography>
                <Typography variant="h5" component="h2">Noah Varghese</Typography>
                <Typography className={classes.pos} color="textSecondary">{bull} Software Developer {bull}</Typography>
                <Typography variant="body2" component="p" className={classes.pos}>
                    Hi! I'm Noah, I'm a software developer based out of Ontario. 
                </Typography>
                <Typography variant="body2" component="p" className={classes.pos}>
                    I learned software development through Mohawk College, and through my own projects.
                    My main interests lie in both mobile and web app development, as well as dev ops and automation.
                </Typography>
                <Typography variant="body2" component="p" className={classes.pos}>
                    When I'm not in front of my computer you can find me playing the guitar, or hiking through whatever forrest I can find.
                </Typography>
                <Typography variant="body2" component="p" className={classes.pos}>
                    If you would like to collaborate or inquire about my services feel free to <Link to="/contact/" className={classes.link}>contact me.</Link>
                </Typography>
            </CardContent>
        </Card>
    );
}