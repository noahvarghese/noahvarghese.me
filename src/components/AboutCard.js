import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import clsx from 'clsx';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { 
    Collapse,
    IconButton,
    Link 
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useMediaQuery } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(({ breakpoints, spacing, transitions }) => ({
    img: {
        width: "100%",
        marginTop: '-2rem',
    },
    header: {
        textAlign: 'center'
    },
    innerContainer: {
        borderRadius: "50%",
        border: "2px solid black",
        width: "24rem",
        height: "24rem",
        overflow: "hidden",
        margin: "auto",
        padding: "auto",
    },
    innerMobile: {
        borderRadius: "50%",
        border: "2px solid black",
        width: "90vw",
        height: "90vw",
        overflow: "hidden",
        margin: "auto",
        padding: "auto",
    },
    outerContainer: {
        borderRadius: "50%",
        border: "5px solid black",
        width: "25rem",
        height: "25rem",
        margin: "auto",
        backgroundColor: "white",
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: "3rem"
    },
    outerMobile: {
        borderRadius: "50%",
        border: "5px solid black",
        width: "95vw",
        height: "95vw",
        margin: "auto",
        backgroundColor: "white",
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "3rem"
    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
    },
    heading: {
        fontSize: "2rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
    },
    expand: {
        marginTop: '2rem',
        margin: 'auto'
    },
    imageContainer: {
        fontSize: '1.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    expandMore: {
        fontSize: "3rem",
    },
    content: {
        width: "50%",
        fontSize: '1.25rem',
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3rem'
    },
    contentMobile: {
        width: "95vw",
        fontSize: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        paddingBottom: '2rem',
        lineHeight: '1.75rem'
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
    link: {
        color: "#2196f3",
        fontFamily: "Montserrat",
        textDecoration: "none",
        '&:hover': {
            color: "black",
            cursor: "pointer",
        }
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
}));

export default function AboutCard() {

    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    const [expanded, setExpanded] = React.useState(false);
    const isMobile = useMediaQuery('(max-width: 960px)');
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return ( 
        <>
            <div className={classes.container}>
                <div className={ isMobile ? clsx(classes.outerMobile, shadowStyles.root) : clsx(classes.outerContainer, shadowStyles.root)}>
                    <div className={ isMobile ? classes.innerMobile : classes.innerContainer}>
                        <img alt="Noah" src="/img/profilePic.jpg" className={classes.img}/>
                    </div>
                </div>
                <div className={classes.heading}>
                    <p className={classes.header}>
                        Hi! I'm Noah, I'm a software developer based out of Ontario. 
                    </p>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                            <ExpandMoreIcon className={classes.expandMore}/>
                    </IconButton>

                    <Collapse in={expanded} timeout="auto" unmountOnExit className={ isMobile ? classes.contentMobile : classes.content}>
                            <p className={classes.p}>
                                I am primarily experienced in web and mobile application development, with interests in dev ops and automation.
                            </p>
                            <p className={classes.p}>
                                My major accomplishments lie in working with clients to implement a product they are proud of! Some examples of this are the mobile application I worked on with a team in my internship, as well as the quote calculator I worked on for an acoustic paneling company.
                            </p>
                            <p className={classes.p}>
                                When I'm not in front of my computer you can find me playing the guitar, or hiking through whatever forest I can find.
                            </p>
                            <p className={classes.p}>
                                If you would like to collaborate or inquire about my services feel free to <Link href="/contact/" className={classes.link}>contact me.</Link>
                            </p>
                            <div className={classes.imageContainer}>
                                <Link href="https://github.com/noahvarghese" target="_blank" rel="noopener noreferrer"><GitHubIcon className={classes.image}/></Link>
                                <Link href="https://linkedin.com/in/varghese-noah/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.image}/></Link>            
                            </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
}