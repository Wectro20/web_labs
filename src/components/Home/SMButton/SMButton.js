import React from "react";
import {NavLink} from "react-router-dom";
import "./SMButton.css";
import "./animation.css"

const SMButton = () => {
    return (
        <NavLink exact to="/catalog" activeClassName="selected">
            <button className="btn_more">Show more</button>
        </NavLink>
    );
};

export default SMButton;