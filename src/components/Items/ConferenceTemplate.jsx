import React from 'react';
import conf_logo from "../../img/conference_logo.png";
import s from "./ItemTemplate.css"

const ConferenceTemplate = (props) => {
    return(
        <div className="items">
            <div className="inner_intro">
                <img src={conf_logo} alt={s.conference}/>
                <h5 className={s.itemInfoName}>Name: {props.name}</h5>
                <h5 className={s.itemInfoAmount}>Amount of people: {props.amountOfPeople}</h5>
                <h5 className={s.itemInfoPrice}>Price of Ticket: {props.priceOfTicket} $</h5>
            </div>
        </div>
    );
}

export default ConferenceTemplate;