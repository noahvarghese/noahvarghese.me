import React from "react";
import { graphql } from "gatsby";
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles({

});


/* 
 * Info Required for project markdown files
 *
 * LIST
 * Title
 * Project Date
 * Slug
 * Tech stack used
 * Description
 * Image
 * 
 * SINGLE
 * html
 * extra images/video (ie websan app)
 * 
*/
export default function Template({
    data,
}) {
    const classes = useStyles();
    const { markdownRemark } = data;
    const { frontMatter, html } = markdownRemark;

    return (
        <>
        </>
    );
}
