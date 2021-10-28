import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {Image, LinkingWrapper} from "./Header.styles";
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog"
import logo from "../../../img/logo.png";

const Header = () => {
    let conference = [
        {
            id: 0,
            name: "Intel",
            amountOfPeople: 450,
            priceOfTicket: 320,
        },
        {
            id: 1,
            name: "AMD",
            amountOfPeople: 650,
            priceOfTicket: 120,
        },
        {
            id: 2,
            name: "Nvidia",
            amountOfPeople: 540,
            priceOfTicket: 126,
        },
        {
            id: 3,
            name: "Apple",
            amountOfPeople: 40,
            priceOfTicket: 16,
        },
        {
            id: 4,
            name: "CapCom",
            amountOfPeople: 50,
            priceOfTicket: 12,
        },
        {
            id: 5,
            name: "Sony",
            amountOfPeople: 580,
            priceOfTicket: 146,
        },
    ];
return(
    <Router>
        <LinkingWrapper>
            <div id="navbar">
                <Image><img src={logo} alt="Logo"/></Image>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/catalog" component={Catalog}>
                    <Catalog conference = {conference}/>
                </Route>
                <Route path="/Cart">
                    <div>:(</div>
                </Route>
                <Route exact path="/" component={Home}>
                    <Home/>
                </Route>
            </Switch>
        </LinkingWrapper>
    </Router>
)};

export default Header;