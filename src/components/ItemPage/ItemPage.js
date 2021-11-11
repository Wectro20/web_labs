import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import conf_logo from "../../img/conference_logo.png";
import s from "../Items/ItemTemplate.css";
import "./itemPage.css";
import axios from "axios";
import Loading from "../Loading/Loading";

const ItemPage = () => {
    const params = useParams();
    const [conference, setConference] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/conference/${params.id}`).then((result) => {
            setConference(result.data)
        })
    },[]);

    return(
        <div>
        {conference ? <Show conference={conference}/>:<Loading/>}
        </div>
    );
}

const Show = (props) => {
    return (
        <div className="item_intro">
            <img src={conf_logo} alt={s.conference}/>
            <div className="itemconf">
                <h5 className={s.itemInfoName}>Name: {props.conference.name}</h5>
                <h5 className={s.itemInfoAmount}>Amount of people: {props.conference.amount}</h5>
                <h5 className={s.itemInfoPrice}>Price of Ticket: {props.conference.price} $</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}

export default ItemPage;