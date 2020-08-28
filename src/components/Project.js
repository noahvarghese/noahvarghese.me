import React from 'react'
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
    Link, 
    useMediaQuery,
    Button
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useStyles = makeStyles(({ breakpoints, spacing, transitions }) => ({
    root: {
        marginTop: "2rem",
        marginBottom: "2rem",
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 600,
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
    rootMobile: {
        marginTop: "2rem",
        marginBottom: "2rem",
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: "95%",
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
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
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
    header: {
        width: 500,
        fontSize: "3rem",
    },
    headerMobile: {
        width: "85vw",
        fontSize: "3rem !important",
    },
    ul: {
        listStyleType: "none",
    }
}));

export default function Project({ project }) {

    const data = project.frontmatter;
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    const isMobile = useMediaQuery('(max-width: 960px)');
    const isDesktop = useMediaQuery('(min-width: 961px');

    const {
        button: buttonStyles,
        ...contentStyles
    } = useBlogTextInfoContentStyles();

    const bull = <span className={classes.bullet}>•</span>;
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <>
            { isMobile && 
            <Card className={clsx(classes.rootMobile, shadowStyles.root)}>
                <CardMedia
                    className={classes.media}
                    image={
                        data.image
                    }
                />
                <CardContent className={classes.headerMobile}>
                    <TextInfoContent
                    classes={contentStyles}
                    overline={ data.date }
                    heading={ data.title }
                    />
                    <Typography color="textSecondary">Tech Stack</Typography>
                    <ul className={classes.ul}>
                        {data.techStack.map((element) => {
                            return <li key={element}><Typography variant="body1" component="p">{bull} {element}</Typography></li>
                        })}
                    </ul>
                </CardContent>
                <CardActions className={classes.icons}>
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
                        <Typography variant="body1" component="p">
                            { data.description }
                        </Typography>
                        <br />
                        <Button className={buttonStyles}><Link href={ data.link } target="_blank" rel="noopener noreferrer">Learn More</Link></Button>
                    </CardContent>
                </Collapse>
            </Card>
            }

            { isDesktop && 
            <Card className={clsx(classes.root, shadowStyles.root)}>
                <CardMedia
                    className={classes.media}
                    image={
                        data.image
                    }
                />
                <CardContent className={classes.header}>
                    <TextInfoContent
                    classes={contentStyles}
                    overline={ data.date }
                    heading={ data.title }
                    />
                    <Typography color="textSecondary">Tech Stack</Typography>
                    <ul className={classes.ul}>
                        {data.techStack.map((element) => {
                            return <li key={element}><Typography variant="body1" component="p">{bull} {element}</Typography></li>
                        })}
                    </ul>
                </CardContent>
                <CardActions className={classes.icons}>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ChevronRightIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body1" component="p">
                            { data.description }
                        </Typography>
                        <br />
                        <Button className={buttonStyles}><Link href={ data.link } target="_blank" rel="noopener noreferrer">Learn More</Link></Button>
                    </CardContent>
                </Collapse>
            </Card>
            }
        </>
    )
}
