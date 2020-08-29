import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
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
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types"

const useStyles = makeStyles(({transitions}) => ({
    nav: {
        marginTop: "1.25em",
        zIndex: 5,
        width: "100vw",
    },    
    navMobile: {
        width: "100vw",
        zIndex: 10,
    },
    ul: {
        listStyleType: "none",
        display: "inline-block",
        float: "right",
    },
    li: {
        display: "inline-block",
        marginRight: "2em",
    },
    backgroundMobile: {
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    liMobile: {
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
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: transitions.create('transform', {
            duration: transitions.duration.shortest,
        }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    selected: {
        color: "#2196f3 !important",
        textDecoration: "none",
        fontSize: "2em",
    }
}));

const Header = ({data}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isDesktop = useMediaQuery('(min-width: 601px');
    const isClient = typeof window !== 'undefined';
    const bull = <span className={classes.bullet}>•</span>;

    const [expanded, setExpanded] = React.useState(false);

    const expand = () => {
        setExpanded(!expanded);
    };
    
    let description = data.site.siteMetadata.description;
    let title = data.site.siteMetadata.title;


    let navItems = [];

    console.log(data.site.siteMetadata.menuLinks);

    data.site.siteMetadata.menuLinks.forEach((item) => {
        
        let isSelected = false;

        if ( isClient )
        {
            if ( item.link == window.location.pathname )
            {
                if ( item.description != "" )
                {
                    description = item.description;
                }
        
                if ( item.title != "" && item.title != "Home" )
                {
                    title = item.title + " • " + title;
                }

                isSelected = true;
            }            
        }
        
        navItems.push(
            <li className={ isMobile ? classes.liMobile : classes.li } key={item.name}>\
                <a href={item.link} className={ isSelected ? classes.selected : classes.a}>
                    {item.name.toUpperCase()}
                </a>
            </li>
        );
    });

    return (
        <>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={description}/>
                <link rel="icon" type="image/ico" href="favicon.ico"/>
            </Helmet>
            { 
                isMobile && 
                <nav className={clsx(classes.navMobile, {
                        [classes.backgroundMobile]: expanded
                    })}>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })} 
                        onClick={expand}
                        aria-expanded={expanded}
                        aria-label="open menu">
                        <MenuIcon className={classes.menu}/>
                    </IconButton>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <ul className={classes.ulMobile}>
                            { navItems.map(item => {return item}) }
                        </ul>
                    </Collapse>
                </nav>
            }
            { 
                isDesktop &&
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        { navItems.map(item => {return item}) }
                    </ul>
                </nav>
            }
        </>
    );
}

export default function MyHeader(props) {
    return (
        <StaticQuery
        query = { graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        menuLinks {
                            name,
                            title,
                            link,
                            description
                        },
                        title,
                        description
                    }
                }
            }
        `}
        render={data => <Header data={data} {...props}/>}
        />
    )
}

Header.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                menuLinks: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired,
                        link: PropTypes.string.isRequired,
                        description: PropTypes.string.isRequired,
                    }).isRequired
                ).isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            }).isRequired,
        }).isRequired,
    }).isRequired,
}
