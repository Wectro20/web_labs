import React from "react";
import conf_logo from "../../img/conference_logo.png";
import c from "./CartTemplate.css";
import s from "../Items/ItemTemplate.css";

const ShoppingCartTemplate = (props) => {
    return(
        <div className="carts">
            <img src={conf_logo} alt={c.conference}/>
            <h5 className={s.itemInfoName}>Name: {props.name}</h5>
            <button>+</button>
            <button>-</button>
            <h5 className={s.itemInfoPrice}>Price of Ticket: {props.price} $</h5>
        </div>
    );
}