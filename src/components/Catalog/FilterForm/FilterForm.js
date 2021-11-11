import React, {useEffect, useState} from "react";
import "./FilterForm.css";
import HeroCatalog from "../../Catalog/HeroCatalog/HeroCatalog"
import axios from "axios";
import Loading from "../../Loading/Loading";


const Filter = () => {
    const [conference, setConference] = useState(null);
    const [conferenceRender, setConferenceRender] = useState(conference);

    useEffect(() => {
        axios.get(`http://localhost:8080/conference`)
            .then((result) => {setConference(result.data);setConferenceRender(result.data);})
    },[]);


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
                    <input id="search__input" className="header__search__input" type="text" placeholder="Type something..."></input>
                    <button type="button" className="searchBut" onClick={()=>SearchImpl()}>Search</button>
                    <button type="button" className="searchBut" onClick={()=>handleReset()}>Clear</button>
                </div>
            </div>

            <div>
                {conference ? <HeroCatalog conference={conferenceRender}/>:<Loading/>}
            </div>

        </div>
    );

    function filterByAmountOfPeople(){
        let sortedConference = Array.from(conference);
        sortedConference.sort((conf1, conf2) => conf2.amount - conf1.amount);
        setConferenceRender(sortedConference);
    }

    function filterByPrice(){
        let sortedConference = Array.from(conference);
        sortedConference.sort((conf1, conf2) => conf1.price - conf2.price);
        setConferenceRender(sortedConference);
    }

    function SearchImpl(){

        const title = document.getElementById('search__input').value;

        let temp = conference.filter(farm => farm.name.search(title) !== -1);
        console.log(temp);
        setConferenceRender(temp);
    }

    function handleReset() {
        document.getElementById('search__input').value = " ";
        setConferenceRender(conference);
    };
}

export default Filter;