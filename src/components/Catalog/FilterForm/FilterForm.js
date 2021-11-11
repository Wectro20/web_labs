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
                    <input id="search__input" className="header__search__input" type="text" placeholder="Type something..."/>
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
        Array.from(conference);
        axios.get(`http://localhost:8080/conference/sort?name=amount`)
            .then((result) => {setConferenceRender(result.data)});
    }

    function filterByPrice(){
        Array.from(conference);
        axios.get(`http://localhost:8080/conference/sort?name=price`)
            .then((result) => {setConferenceRender(result.data)});
    }

    function SearchImpl(){
        const title = document.getElementById('search__input').value;
        axios.get(`http://localhost:8080/conference/search?name=${title}`)
            .then((result) => {setConferenceRender(result.data)});
    }

    function handleReset() {
        document.getElementById('search__input').value = " ";
        setConferenceRender(conference);
    }
}

export default Filter;