import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
    makeStyles
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import { 
    useMediaQuery,
    Collapse, 
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(({transitions}) => ({
    nav: {
        marginTop: "1.25em",
        zIndex: 5,
    },    
    navMobile: {
        position: "relative",
        width: "100%",
        zIndex: 10,
    },
    ul: {
        listStyleType: "none",
        display: "inline-block",
        position: "absolute",
        right: 0, 
        width: "100%"
    },
    li: {
        display: "inline-block",
        marginRight: "2em",
    },
    backgroundMobile: {
        backgroundColor: "black",
    },
    liMobile: {
        backgroundColor: "black",
        width: "100%",
        textAlign: "center",
        zIndex: 10,
        paddingTop: "1em",
        paddingBottom: "1em"
    },
    a: {
        color: "white",
        textDecoration: "none",
        fontSize: "2em",
        '&:hover': {
            color: "#2196f3"
        }
    },
    aMobile: {
        color: "white",
        textDecoration: "none",
        fontSize: "2em",
        textAlign: "center"
    },
    menu: {
        color: "white",
        fontSize: "2em",
        float: "right"
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
}));

export default function Header() {

    const classes = useStyles();
    const isActive = useMediaQuery('(max-width: 600px)');

    const [expanded, setExpanded] = React.useState(false);

    const expand = () => {
        setExpanded(!expanded);
    };

    return (
        <StaticQuery 
            query = { graphql `
                query HeadingQuery {
                    site {
                        siteMetadata {
                            menuLinks {
                                name,
                                link
                            }
                        }
                    }
                }
            `}
            render = { data => (
                <>
                        { 
                            isActive && 
                            <nav className={clsx(classes.navMobile, {
                                [classes.backgroundMobile]: expanded
                            })}>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })} 
                                    onClick={expand}
                                    aria-expanded={expanded}
                                    aria-label="open menu"
                                >
                                    <MenuIcon className={classes.menu}/>
                                </IconButton>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <ul className={classes.ul}>
                                        {data.site.siteMetadata.menuLinks.map((item) => {
                                            return <li className={classes.liMobile} key={item.name}><a href={item.link} className={classes.aMobile}>{item.name.toUpperCase()}</a></li>
                                        })}
                                    </ul>
                                </Collapse>
                            </nav>
                        }
                        { 
                            ! isActive &&
                            <nav className={classes.nav}>
                                <ul className={classes.ul}>
                                    {data.site.siteMetadata.menuLinks.map((item) => {
                                        return <li className={classes.li} key={item.name}><a href={item.link} className={classes.a}>{item.name.toUpperCase()}</a></li>
                                    })}
                                </ul>
                            </nav>
                        }
                            </>
            )}
        />
    );
}
