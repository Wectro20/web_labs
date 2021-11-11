import React, {useEffect, useState} from "react";
import ConferenceTemplate from "../../Items/ConferenceTemplate";
import axios from "axios";
import Loading from "../../Loading/Loading";

const HeroCatalog = (props) => {
    return(
        <div className="items">
            {props.conference ? <ItemContainer conferences={props.conference}/> : <Loading/>}
        </div>
    )
};

function ItemContainer(props) {
    return(
      <ul className="item">
          {
              props.conferences.map(((conference,id) => (
                  <li key={id}><ConferenceTemplate
                  id={id}
                  name={conference.name}
                  amount={conference.amount}
                  price={conference.price}
                  /></li>
              )))
          }
      </ul>
    );
}



export default HeroCatalog;

