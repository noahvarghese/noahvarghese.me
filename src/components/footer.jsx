import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div id="footerContent">
                <p>&#169; Noah Varghese {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
