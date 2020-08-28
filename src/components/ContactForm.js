import React from 'react'
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
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from "gatsby";

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
    imageContainer: {
        position: "relative",
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
    imageContainerMobile: {
        position: "relative",
        left: "50%",
        margin: "auto",
        transform: "translateX(-20%)",
    },
    portraitMobileTitle: {
        marginLeft: "1em"
    }
}));

export default function ContactForm() {

    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    const isMobile = useMediaQuery('(max-width: 812px)');
    const isDesktop = useMediaQuery('(min-width: 813px');

    return (

        <>
            { isMobile && 
                <Card className={classes.rootMobile}>
                    <Typography variant="h5" component="h2" className={classes.portraitMobileTitle}>Contact</Typography>
                    <form method="POST" action="" className={classes.formMobile}>
                        <TextField required id="fname" label="First Name" variant="outlined" fullWidth/>
                        <TextField required id="lname" label="Last Name" variant="outlined" fullWidth/>
                        <TextField required id="email" label="Email" variant="outlined" fullWidth />
                        <TextField required id="message" label="Message" variant="outlined" multiline rows={5} fullWidth />
                        <div className={classes.rowMobile}>
                            <Button type="reset" color="secondary" size="large">Clear</Button>
                            <Button type="submit" color="primary" size="large">Submit</Button>
                        </div>
                    </form>
                    <div className={classes.imageContainerMobile}>
                        <Link to="https://github.com/noahvarghese" target="_blank"><GitHubIcon className={classes.image}/></Link>
                        <Link to="https://linkedin.com/in/varghese-noah/" target="_blank"><LinkedInIcon className={classes.image}/></Link>            
                    </div>
                </Card>
            }

            { isDesktop &&
                <Card className={clsx(classes.root, shadowStyles.root)}>
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
                        <Link to="https://github.com/noahvarghese" target="_blank"><GitHubIcon className={classes.image}/></Link>
                        <Link to="https://linkedin.com/in/varghese-noah/" target="_blank"><LinkedInIcon className={classes.image}/></Link>            
                    </div>
                </Card> 
            }
        </>
    )
}
