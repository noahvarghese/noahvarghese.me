import React, {
    Component
} from 'react'
import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "60vh",
        marginLeft: "20vw",
        marginRight: "20vw"
    },
    container: {
        marginLeft: "2em",
        marginTop: "2em",
    },
    img: {
        width: "6em",
        marginLeft: "1em",
        marginTop: "1em",
        marginRight: "1em",
        marginBottom: "1em",
        verticalAlign: "middle",
        display: "inline-block"
    }, 
    imgSmall: {
        width: "8em",
        marginLeft: "1em",
        marginTop: "1em",
        marginRight: "1em",
        marginBottom: "1em",
        verticalAlign: "middle",
        display: "inline-block"
    },
    title: {
        fontSize: 22,
    }
});


export default function TechStack() {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Typography className = {classes.title} color = "textSecondary"gutterBottom> Tools and Technology I Have Used </Typography> 
            <div className={classes.container}>

            </div>
            <img alt="hugo" src="/img/hugo.svg" className={classes.imgSmall}/>
            <img alt="docker" src="/img/docker.png" className={classes.img}/>
            <img alt="git" src="/img/git.png" className={classes.img}/>
            <img alt="javascript" src="/img/js.png" className={classes.img}/>
            <img alt="gatsby" src="/img/gatsby.png" className={classes.img}/>
            <img alt="react" src="/img/react.jpeg" className={classes.img}/>
            <img alt="aws" src="/img/aws.png" className={classes.img}/>
            <img alt="netlify" src="/img/netlify.png" className={classes.imgSmall}/>
            <img alt="heroku" src="/img/heroku.png" className={classes.imgSmall}/>
            <img alt="c#" src="/img/csharp.svg" className={classes.img}/>
            <img alt="xamarin" src="/img/xamarin.svg" className={classes.img}/>
            <img alt="dot net" src="/img/netCore.png" className={classes.img}/>
            <img alt="selenium" src="/img/selenium.png" className={classes.imgSmall}/>
            <img alt="mysql" src="/img/mysql.png" className={classes.imgSmall}/>
            <img alt="microsoft sql server" src="/img/mssql.png" className={classes.imgSmall}/>
            <img alt="postgresql" src="/img/postgresql.png" className={classes.imgSmall}/>
            <img alt="php" src="/img/php.png" className={classes.imgSmall}/>
            <img alt="laravel" src="/img/laravel.png" className={classes.imgSmall}/>
            <img alt="code igniter" src="/img/codeigniter.svg" className={classes.img}/>
            <img alt="css" src="/img/css3.svg" className={classes.img}/>
            <img alt="html" src="/img/html5.png" className={classes.img}/>
        </div >
    );
}
