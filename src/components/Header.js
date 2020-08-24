import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav: {
        marginTop: "1.25em"
    },    
    ul: {
        listStyleType: "none",
        display: "inline-block",
        position: "absolute",
        right: 0
    },
    li: {
        display: "inline-block",
        marginRight: "2em",
    },
    a: {
        color: "white",
        textDecoration: "none",
        fontSize: "2em",
        '&:hover': {
            color: "#2196f3"
        }
    }
});

export default function Header() {

    const classes = useStyles();

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
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        
                        {data.site.siteMetadata.menuLinks.map((item) => {
                            return <li className={classes.li} key={item.name}><a href={item.link} className={classes.a}>{item.name.toUpperCase()}</a></li>
                        })}
                    </ul>
                </nav>
            )}
        />
    );
}
