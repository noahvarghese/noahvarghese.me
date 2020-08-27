import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "../components/Header";
import Wave from "../components/Wave";
import Project from "../components/Project";
import { graphql } from "gatsby";

const useStyles = makeStyles({
    projects: {

    },
    container: {
        height: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "space-between",
        margin: "auto",
        position: "relative"
    },
});

const Projects = ({ 
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const projects = edges
    .map(edge => <Project key={edge.node.id} project={edge.node} />);


    const classes = useStyles();

    return (
        <>
            <Wave/>
            <Header/>
            <div className={classes.container}>
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
