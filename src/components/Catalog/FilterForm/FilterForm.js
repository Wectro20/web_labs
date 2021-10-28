import React from "react";
import "./FilterForm.css";


const Filter = () => (

    <div className="FilterContainer">
        <div className="filterBlock">
        <div className="dropDownMenu">
            <span className="dropdown">
            <button className="filterBut">Filter by price</button>
                <label>
                    <input type="checkbox"/>
                        <ul>
                          <li>ASC</li>
                          <li>DESC</li>
                        </ul>
                </label>
            </span>
        </div>
                <button className="ApplyButton">Apply</button>
        </div>
        <div className="searchBlock">
        <form>
            <input id="search__input" className="header__search__input" type="text"
                   placeholder="Type something..."/>
        </form>
        <button className="searchBut">Search</button>
        </div>
    </div>

);

export default Filter;