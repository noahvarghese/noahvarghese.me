import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "30vw",
        position: "absolute",
        top: "20vh",
        left: "20vw"
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
});

export default function AboutCard() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return ( 
        <Card className={classes.root}>
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
                    If you would like to collaborate or inquire about my services feel free to contact me.
                </Typography>
            </CardContent>
        </Card>
    );
}