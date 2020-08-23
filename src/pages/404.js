import React from 'react'
import Wave from "../components/Wave";
import {
    makeStyles
} from '@material-ui/core/styles';
import Header from "../components/Header";
import Card from '@material-ui/core/Card';
import {Link} from "gatsby";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "40em",
        height: "12em",
        margin: "auto",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0, 
        right: 0,
        padding: "2em"
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
    margin: {
        marginBottom: 12
    },
    link: {
        color: "#2196f3",
        fontSize: 18,
        fontFamily: "Roboto",
        '&:hover': {
            color: "black"
        }
    }
});

export default function NotFound(props) {

    const classes = useStyles();

    return (
        <>
            <Wave/>
            <Header />
            <Card className={classes.root}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>404 Page Not Found</Typography>
                <Typography variant="h5" component="h2" className={classes.margin}>What Do You Think You're Doing?</Typography>
                <Typography variant="body2" component="p" className={classes.pos}>
                    If you think you have found a bug, please <Link to="/contact/" className={classes.link}>send me the details.</Link>
                </Typography>
            </Card>
        </>
    )
}
