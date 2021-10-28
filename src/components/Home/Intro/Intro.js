import React from "react";
import conf_logo from "../../../img/conference_logo.png";
import "./intro.css"
import {NavLink} from "react-router-dom";

const Intro = () => (
    <div className="hero_container">
        <div className="inner_intro">
            <img src={conf_logo} alt="conference"/>
            <h3 className="item__title"> </h3>
            <h5 className="item__info name">Name: Intel</h5>
            <h5 className="item__info amount">Amount of people: 40</h5>
            <h5 className="item__info price">Price of Ticket: 120$</h5>
        </div>
        <div className="inner_intro">
            <img src={conf_logo} alt="conference"/>
            <h3 className="item__title"> </h3>
            <h5 className="item__info name">Name: AMD</h5>
            <h5 className="item__info amount">Amount of people: 85</h5>
            <h5 className="item__info price">Price of Ticket: 60$</h5>
        </div>
        <div className="inner_intro">
            <img src={conf_logo} alt="conference"/>
            <h3 className="item__title"> </h3>
            <h5 className="item__info name">Name: Apple</h5>
            <h5 className="item__info amount">Amount of people: 90</h5>
            <h5 className="item__info price">Price of Ticket: 165$</h5>
        </div>
    </div>

);

export  default Intro;