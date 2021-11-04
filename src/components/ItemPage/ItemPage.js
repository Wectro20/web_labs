import React from "react";
import {Link, useParams} from 'react-router-dom'
import {conference} from "../Util/UtilConference";
import conf_logo from "../../img/conference_logo.png";
import s from "../Items/ItemTemplate.css";
import "./itemPage.css";

const ItemPage = () => {
        const params = useParams();
        let a = conference[params.id];

        return (
            <div className="item_intro">
                    <img src={conf_logo} alt={s.conference}/>
                    <div>
                    <h5 className={s.itemInfoName}>Name: {a.name}</h5>
                    <h5 className={s.itemInfoAmount}>Amount of people: {a.amountOfPeople}</h5>
                    <h5 className={s.itemInfoPrice}>Price of Ticket: {a.priceOfTicket} $</h5>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
            </div>
        );


}

export default ItemPage;