import React from 'react'
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles({
  img: {
      display: "block",
      maxWidth: "12em",
      maxHeight: "5em",
      width: "auto",
      height: "auto",
      marginTop: "1em",
      marginRight: "1em",
      marginBottom: "1em",
  }, 
  imgSmall: {
      display: "block",
      maxWidth: "12em",
      maxHeight: "7em",
      width: "auto",
      height: "auto",
      marginTop: "1em",
      marginRight: "2em",
      marginBottom: "1em",
  }
});


export default function Technologies() {
    const classes = useStyles();
    return (
        <>
            <img alt="hugo" src="/img/hugo.svg" className={classes.imgSmall}/>
                <img alt="docker" src="/img/docker.png" className={classes.imgSmall}/>
                <img alt="git" src="/img/git.png" className={classes.img}/>
                <img alt="javascript" src="/img/js.png" className={classes.img}/>
                <img alt="gatsby" src="/img/gatsby.png" className={classes.img}/>
                <img alt="react" src="/img/react.png" className={classes.img}/>
                <img alt="aws" src="/img/aws.png" className={classes.img}/>
                <img alt="netlify" src="/img/netlify.png" className={classes.img}/>
                <img alt="heroku" src="/img/heroku.png" className={classes.img}/>
                <img alt="c#" src="/img/csharp.svg" className={classes.img}/>
                <img alt="xamarin" src="/img/xamarin.svg" className={classes.img}/>
                <img alt="dot net" src="/img/netCore.png" className={classes.img}/>
                <img alt="selenium" src="/img/selenium.png" className={classes.img}/>
                <img alt="mysql" src="/img/mysql.png" className={classes.img}/>
                <img alt="microsoft sql server" src="/img/mssql.png" className={classes.imgSmall}/>
                <img alt="postgresql" src="/img/postgresql.png" className={classes.imgSmall}/>
                <img alt="php" src="/img/php.svg" className={classes.img}/>
                <img alt="laravel" src="/img/laravel.png" className={classes.imgSmall}/>
                <img alt="code igniter" src="/img/codeigniter.svg" className={classes.img}/>
                <img alt="css" src="/img/css3.svg" className={classes.imgSmall}/>
                <img alt="html" src="/img/html5.png" className={classes.imgSmall}/>
                <img alt="bootstrap" src="/img/bootstrap.png" className={classes.img}/>
                <img alt="jquery" src="/img/jquery.png" className={classes.img}/>
                <img alt="python" src="/img/python.svg" className={classes.img}/>
                <img alt="ruby" src="/img/ruby.png" className={classes.img}/>
        </>
    )
}
