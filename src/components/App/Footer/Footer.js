import React from "react";
import "./footer.css";
import logo from "../../../img/logo.png";
import flogo from "../../../img/facebook-logo.png";
import tlogo from "../../../img/twitter-logo.png"
import lilogo from "../../../img/linkedin.png"
import glogo from "../../../img/google-logo.png"


const Footer = () => (
    <footer className="footer">
        <div className="upperline"></div>
        <div className="footer_container">
            <div className="footer_branding">
                <h2>Branding stuff</h2>
                <p>Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry.
                </p>
            </div>
            <img className="footer_logos" src={logo}/>
            <div className="contact_us">
                <img className="footer_logo" src={flogo}/>
                <img className="footer_logo" src={tlogo}/>
                <img className="footer_logo" src={lilogo}/>
                <img className="footer_logo" src={glogo}/>
            </div>
        </div>
    </footer>
);

export  default Footer;