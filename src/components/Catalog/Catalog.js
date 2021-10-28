import React from "react";
import Filter from "./FilterForm/FilterForm";
import HeroCatalog from "./HeroCatalog/HeroCatalog";
import "./HeroCatalog/HeroContainer.css";


const Catalog = (props) => {
    return (
        <div>
            <Filter/>
            <HeroCatalog conference={props.conference}/>
        </div>
    );
};

export default Catalog;