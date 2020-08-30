import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import clsx from 'clsx';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { 
    Card, 
    CardMedia, 
    CardActions, 
    CardContent, 
    Collapse,
    Typography, 
    IconButton,
    Link 
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useMediaQuery } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(({ breakpoints, spacing, transitions }) => ({
    root: {
      margin: 'auto',
      borderRadius: spacing(2), // 16px
      transition: '0.3s',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      position: 'relative',
      maxWidth: 1100,
      marginLeft: 'auto',
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: spacing(2),
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        paddingTop: spacing(2),
      },
      zIndex: 1
    },
    media: {
      width: '88%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: spacing(-3),
      height: 0,
      paddingBottom: '48%',
      borderRadius: spacing(2),
      backgroundColor: '#fff',
      position: 'relative',
      [breakpoints.up('md')]: {
        width: '100%',
        marginLeft: spacing(-3),
        marginTop: 0,
        transform: 'translateX(-8px)',
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(147deg, #696969 0%, #2196f3 74%)',
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    header: {
        maxWidth: 1000,
        minWidth: 200,
    },
    title: {
        fontSize: 22,
    },
    pos: {
        fontSize: 18,
        marginBottom: 12,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
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
    icons: {
        display: 'block',
        '&> *': {
            marginTop: "1em",
            marginRight: "1em"
        }
    },
    imageContainer: {
        position: "relative",
        margin: "auto"
    },
    imageContainerMobile: {
        position: "relative",
        left: "50%",
        margin: "auto",
        transform: "translateX(-20%)",
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



    testImg: {
        width: "100%"
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
    expandTest: {
        marginTop: '2rem',
        margin: 'auto'
    },
    imageContainerTest: {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        paddingBottom: '1rem'
    }
}));

export default function AboutCard() {

    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    const [expanded, setExpanded] = React.useState(false);
    const isMobile = useMediaQuery('(max-width: 960px)');
    const isDesktop = useMediaQuery('(min-width: 961px');
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const bull = <span className={classes.bullet}>•</span>;

    return ( 
        // <Card className={clsx(classes.root, shadowStyles.root)}>
        //     <CardMedia
        //         className={classes.media}
        //         image={, clsx(shadowStyles.root)
        //     />
        //     <CardContent className={classes.header}>
        //         <Typography className={classes.title} color="textSecondary" gutterBottom>About Me</Typography>
        //         <Typography variant="h5" component="h2">Noah Varghese</Typography>
        //         <Typography className={classes.pos} color="textSecondary">{bull} Software Developer {bull}</Typography>
        //             <Typography variant="body2" component="p" className={classes.pos}>
        //                 Hi! I'm Noah, I'm a software developer based out of Ontario. 
        //             </Typography>
        //             { isMobile && 
        //             <div className={classes.imageContainerMobile}>
        //                 <Link to="https://github.com/noahvarghese" target="_blank"><GitHubIcon className={classes.image}/></Link>
        //                 <Link to="https://linkedin.com/in/varghese-noah/" target="_blank"><LinkedInIcon className={classes.image}/></Link>            
        //             </div>}
        //             { isDesktop && 
        //             <div className={classes.imageContainer}>
        //                 <Link href="https://github.com/noahvarghese" target="_blank" rel="noopener noreferrer"><GitHubIcon className={classes.image}/></Link>
        //                 <Link href="https://linkedin.com/in/varghese-noah/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.image}/></Link>            
        //             </div>}
        //     </CardContent>
        //     <CardActions className={classes.icons}>
        //         <IconButton
        //             className={clsx(classes.expand, {
        //                 [classes.expandOpen]: expanded,
        //             })}
        //             onClick={handleExpandClick}
        //             aria-expanded={expanded}
        //             aria-label="show more">
        //             { isMobile && <ExpandMoreIcon /> }
        //             { isDesktop && <ChevronRightIcon />}
        //         </IconButton>
        //     </CardActions>
        //     <Collapse in={expanded} timeout="auto" unmountOnExit>
        //         <CardContent>
        //             <Typography variant="body2" component="p" className={classes.pos}>
        //                 I am primarily experienced in web and mobile application development, with interests in dev ops and automation.
        //             </Typography>
        //             <Typography variant="body2" component="p" className={classes.pos}>
        //                 My major accomplishments lie in working with clients to implement a product they are proud of! Some examples of this are the mobile application I worked on with a team in my internship, as well as the quote calculator I worked on for an acoustic paneling company.
        //             </Typography>
        //             <Typography variant="body2" component="p" className={classes.pos}>
        //                 When I'm not in front of my computer you can find me playing the guitar, or hiking through whatever forrest I can find.
        //             </Typography>
        //             <Typography variant="body2" component="p" className={classes.pos}>
        //                 If you would like to collaborate or inquire about my services feel free to <Link href="/contact/" className={classes.link}>contact me.</Link>
        //             </Typography>
        //         </CardContent>
        //     </Collapse>
        // </Card>
        <>
            <div className={classes.container}>
                <div className={ isMobile ? clsx(classes.outerMobile, shadowStyles.root) : clsx(classes.outerContainer, shadowStyles.root)}>
                    <div className={ isMobile ? classes.innerMobile : classes.innerContainer}>
                        <img alt="Noah" src="/img/profilePic.jpg" className={classes.testImg}/>
                    </div>
                </div>
                <div className={classes.heading}>
                    <p>
                        Hi! I'm Noah, I'm a software developer based out of Ontario. 
                    </p>
                    <IconButton
                        className={clsx(classes.expandTest, {
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
                                When I'm not in front of my computer you can find me playing the guitar, or hiking through whatever forrest I can find.
                            </p>
                            <p className={classes.p}>
                                If you would like to collaborate or inquire about my services feel free to <Link href="/contact/" className={classes.link}>contact me.</Link>
                            </p>
                            <div className={classes.imageContainerTest}>
                                <Link href="https://github.com/noahvarghese" target="_blank" rel="noopener noreferrer"><GitHubIcon className={classes.image}/></Link>
                                <Link href="https://linkedin.com/in/varghese-noah/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.image}/></Link>            
                            </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
}