import React from 'react';
import conf_logo from "../../img/conference_logo.png";
import s from "./ItemTemplate.css";
import { BrowserRouter as Router, Switch, Route, NavLink,Redirect,Link } from "react-router-dom";


const ConferenceTemplate = (props) => {
    return(
        <div className="items">
            <div className="inner_intro">
                <img src={conf_logo} alt={s.conference}/>
                <h5 className={s.itemInfoName}>Name: {props.name}</h5>
                <h5 className={s.itemInfoAmount}>Amount of people: {props.amountOfPeople}</h5>
                <h5 className={s.itemInfoPrice}>Price of Ticket: {props.priceOfTicket} $</h5>
                <button className="viewMore">
                    <Link to={"/itempage/"+props.id}>view</Link>
                </button>
            </div>
        </div>
    );
}

export default ConferenceTemplate;

