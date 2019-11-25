import React, { Component } from 'react';

class Login extends Component {
    render() {
        document.getElementsByClassName("app").innerHTML = "";
        return(
            <form method="POST" action="https://noahvarghese.me/user">
                <input type="email" name="email" id="email" autoComplete="email"></input>
                <input type="password" name="password" id="password" autoComplete="current-password"></input>
                <input type="hidden" name="read" value="true"></input>
                <input type="submit" vlaue="Log In"></input>
            </form>
        );
    };
}

export default Login;