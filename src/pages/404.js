import React from 'react'
import Wave from "../components/Wave";
import {
    makeStyles
} from '@material-ui/core/styles';
import Header from "../components/Header";
import Card from '@material-ui/core/Card';
import {Link} from "gatsby";
import Typography from '@material-ui/core/Typography';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import clsx from 'clsx';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        width: '100%',
        margin: 'auto',
    },
    root: {
        marginTop: "2rem",
        marginBottom: "2rem",
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        maxWidth: 600,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            paddingTop: spacing(2),
        },
        minWidth: 275,
        minHeight: '12rem',
        maxWidth: '95%',
        padding: "2em",
        justifyContent: 'center',
    },
    rootMobile: {

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
}));

export default function NotFound(props) {

    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();

    return (
        <>
            <Wave/>
            <Header />
            <div className={classes.container}>
                <Card className={clsx(classes.root, shadowStyles.root)}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>404 Page Not Found</Typography>
                    <Typography variant="h5" component="h2" className={classes.margin}>What Do You Think You're Doing?</Typography>
                    <Typography variant="body2" component="p" className={classes.pos}>
                        If you think you have found a bug, please <Link to="/contact/" className={classes.link}>send me the details.</Link>
                    </Typography>
                </Card>
            </div>
        </>
    )
}
