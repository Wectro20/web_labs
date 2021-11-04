import React, {useState} from "react";
import "./FilterForm.css";
import {conference} from "../../Util/UtilConference";
import HeroCatalog from "../../Catalog/HeroCatalog/HeroCatalog"


const Filter = () => {

    let [conferenceRender, setConferenceRender] = useState(conference);

    return (
        <div className="FilterContainer">
            <div className="inputmenu">
            <div className="filterBlock">
                <div className="dropDownMenu">
            <span className="dropdown">
            <button className="filterBut">Filter by</button>
                <label>
                    <input type="checkbox"/>
                        <ul>
                          <li onClick={() => filterByAmountOfPeople()}>people</li>
                          <li onClick={() => filterByPrice()}>price</li>
                        </ul>
                </label>
            </span>
                </div>
            </div>
            <div className="searchBlock">
                    <input id="search__input" className="header__search__input" type="text"
                           placeholder="Type something..."/>
                <button type="button" className="searchBut" onClick={()=>SearchImpl()}>Search</button>
                <button type="button" className="searchBut" onClick={()=>handleReset()}>Clear</button>
            </div>
            </div>
            <div>
                <HeroCatalog conference={conferenceRender}/>
            </div>
        </div>
    )

    function filterByAmountOfPeople(){
        let sortedConference = Array.from(conference);
        sortedConference.sort((conf1, conf2) => conf2.amountOfPeople - conf1.amountOfPeople);
        setConferenceRender(sortedConference);
    }

    function filterByPrice(){
        let sortedConference = Array.from(conference);
        sortedConference.sort((conf1, conf2) => conf1.priceOfTicket - conf2.priceOfTicket);
        setConferenceRender(sortedConference);
    }

    function SearchImpl(){
        const title = document.getElementById('search__input');
        let temp = conference.filter(conf => conf.name.search(title.value) !== -1);
        setConferenceRender(temp);
    }

    function handleReset() {
        document.getElementById('search__input').value = " ";
        setConferenceRender(conference);
    };
}
export default Filter;