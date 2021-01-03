import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import Header from "../components/Header";
import Wave from "../components/Wave";
import Project from "../components/Project";
import { graphql } from "gatsby";
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
		columnGap: "4rem",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "space-around",
        margin: "auto",
        position: "relative"
    },

    containerMobile: {
      paddingTop: '4rem',
      width: "90%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "space-around",
      margin: "auto",
      position: "relative"
    }
});

const Projects = ({ 
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const projects = edges
    .map(edge => <Project key={edge.node.id} project={edge.node} />);


    const isMobile = useMediaQuery('(max-width: 600px)');
    const classes = useStyles();

    return (
        <>
            <Wave/>
            <Header/>
            <div className={isMobile ? classes.containerMobile : classes.container}>
                { projects }
            </div>
            
        </>
    )
}

export default Projects;


export const projectQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            image
            techStack
            description
            link
          }
        }
      }
    }
  }
`
