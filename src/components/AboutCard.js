import React from "react";
import {
    makeStyles
} from '@material-ui/core/styles';
import clsx from 'clsx';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { useTheme } from '@material-ui/core/styles';
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
import ShareIcon from '@material-ui/icons/Share';

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
        fontFamily: "Roboto",
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
    }
}));

export default function AboutCard() {

    const classes = useStyles();
    const theme = useTheme();
    const shadowStyles = useOverShadowStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const bull = <span className={classes.bullet}>•</span>;

    return ( 
        <Card className={clsx(classes.root, shadowStyles.root)}>
            <CardMedia
                className={classes.media}
                image={
                    '/img/profilePic.jpg'
                }
            />
            <CardContent className={classes.header}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>About Me</Typography>
                <Typography variant="h5" component="h2">Noah Varghese</Typography>
                <Typography className={classes.pos} color="textSecondary">{bull} Software Developer {bull}</Typography>
                    <Typography variant="body2" component="p" className={classes.pos}>
                        Hi! I'm Noah, I'm a software developer based out of Ontario. 
                    </Typography>
            </CardContent>
            <CardActions className={classes.icons}>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
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
            </Collapse>
        </Card>
    );
}