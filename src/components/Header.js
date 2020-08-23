import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import "../styles/header.css";

export default () => (
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
            <nav>
                <ul>
                    
                    {data.site.siteMetadata.menuLinks.map((item) => {
                        return <li key={item.name}><a href={item.link}>{item.name.toUpperCase()}</a></li>
                    })}
                </ul>
            </nav>
        )}
    />
);
